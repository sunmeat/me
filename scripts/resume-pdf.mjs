// Local PDF export requires Chromium and Poppler; Vercel serves the validated artifact.
import{readFile,writeFile,mkdir}from'node:fs/promises';
import{createServer}from'node:http';
import{execFileSync}from'node:child_process';
import{resolve}from'node:path';
import{browser}from'../tests/helpers/offlineBrowser.mjs';
import {RESUME_FILENAME} from '../src/resume-asset.js';
const server=createServer(async(_req,res)=>{res.setHeader('Content-Type','text/html;charset=utf-8');res.end(await readFile('public/resume.html'));});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const b=await browser();
try{
 await b.navigate('http://127.0.0.1:'+server.address().port);
 await b.evaluate('document.fonts.ready.then(()=>true)');
 await b.send('Emulation.setEmulatedMedia',{media:'print'});
 await b.send('Emulation.setDeviceMetricsOverride',{width:665,height:1005,deviceScaleFactor:1,mobile:false});
 const dimensions=await b.evaluate('[...document.querySelectorAll(".page")].map(p=>({height:p.getBoundingClientRect().height,width:p.getBoundingClientRect().width,sections:[...p.children].map(s=>({tag:s.tagName,title:s.querySelector("h2")?.textContent,height:s.getBoundingClientRect().height}))}))');
 await mkdir('work/resume',{recursive:true});
 const pdf=await b.send('Page.printToPDF',{printBackground:true,preferCSSPageSize:true,displayHeaderFooter:true,headerTemplate:'<span></span>',footerTemplate:'<div style="font:8pt Arial,sans-serif;color:#55616c;width:100%;margin:0 16mm;border-top:0.5pt solid #ccd5db;padding-top:4pt;display:flex;justify-content:space-between"><span>Oleksandr Zahoruiko · Senior Full-Stack Developer</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>',generateTaggedPDF:true});
 const bytes=Buffer.from(pdf.data,'base64'),candidate=resolve('work/resume/candidate.pdf');await writeFile(candidate,bytes);
 const info=execFileSync('pdfinfo',[candidate],{encoding:'utf8'}),text=execFileSync('pdftotext',['-raw',candidate,'-'],{encoding:'utf8'});
 const pages=Number(info.match(/^Pages:\s+(\d+)/m)?.[1]);
 if(!/^Page size:.*\(A4\)/m.test(info))throw Error('PDF must use A4 pages');
 if(!/^Tagged:\s+yes/m.test(info))throw Error('PDF must retain accessible text structure');
 if(/[\u0400-\u04ff\ufffd]/u.test(text))throw Error('CV must contain English text without broken Unicode');
 if(pages!==2)throw Error('Expected exactly two A4 pages; got '+pages+'; dimensions '+JSON.stringify(dimensions));
 for(const value of ['Oleksandr Zahoruiko','Senior Full-Stack Developer','PROFESSIONAL SUMMARY','TECHNICAL SKILLS','PROFESSIONAL EXPERIENCE','SELECTED PROJECTS','EDUCATION','LANGUAGES','CERTIFICATIONS','Back-End Development','Front-End Web Development','Data Analysis Using Python','JavaScript Essentials 2'])if(!text.includes(value))throw Error('Missing ATS text: '+value);
 await writeFile('public/resume.pdf',bytes);await writeFile('public/Oleksandr_Zahoruiko_Android_FullStack_Developer_CV.pdf',bytes);await writeFile(resolve('public',RESUME_FILENAME),bytes);await writeFile('work/resume/extracted.txt',text);
 for(let page=1;page<=2;page++)execFileSync('pdftoppm',['-f',String(page),'-l',String(page),'-scale-to','1400','-png','-singlefile',candidate,resolve('work/resume/page-'+page)],{stdio:'ignore'});
 console.log(JSON.stringify({pages,bytes:bytes.length,tagged:/^Tagged:\s+yes/m.test(info),dimensions,textCharacters:text.length,filename:RESUME_FILENAME}));
}finally{await b.close();server.close();}
