// UI presentation layer for the Arabic edition.
// Use contextual translation dictionaries first; convert otherwise untranslated
// visible Latin terms to Arabic script without corrupting links or email addresses.
const WORDS = {
  android:"أندرويد",github:"غيت هاب",google:"غوغل",play:"بلاي",
  react:"رياكت",firebase:"فايربيس",javascript:"جافاسكريبت",typescript:"تايب سكريبت",
  kotlin:"كوتلن",python:"بايثون",java:"جافا",django:"جانغو",spring:"سبرينغ",
  node:"نود",vercel:"فيرسل",netlify:"نتليفاي",telegram:"تلغرام",
  starlink:"ستارلينك",duolingo:"دولينغو",tiktok:"تيك توك",youtube:"يوتيوب",
  instagram:"إنستغرام",facebook:"فيسبوك",linkedin:"لينكدإن",
  sunmeat:"سنميت",oleksandr:"أوليكساندر",zahoruiko:"زاهورويكو",
  orleans:"أورليان",france:"فرنسا",ukraine:"أوكرانيا",odesa:"أوديسا",
  english:"الإنجليزية",ukrainian:"الأوكرانية",french:"الفرنسية",
  german:"الألمانية",spanish:"الإسبانية",chinese:"الصينية",japanese:"اليابانية",
  arabic:"العربية",portuguese:"البرتغالية",valyrian:"الفاليرية",
  sanskrit:"السنسكريتية",korean:"الكورية",
  portfolio:"معرض الأعمال",profile:"الملف الشخصي",website:"موقع",
  websites:"مواقع",site:"موقع",sites:"مواقع",web:"الويب",
  software:"البرمجيات",engineer:"مهندس",engineering:"هندسة",
  developer:"مطوّر",developers:"مطوّرون",development:"تطوير",
  coding:"برمجة",code:"شيفرة",teacher:"معلّم",teaching:"تدريس",
  lecturer:"محاضر",education:"تعليم",experience:"خبرة",skills:"مهارات",
  skill:"مهارة",about:"نبذة",contact:"تواصل",home:"الرئيسية",
  apps:"تطبيقات",app:"تطبيق",application:"تطبيق",applications:"تطبيقات",
  projects:"مشاريع",project:"مشروع",games:"ألعاب",game:"لعبة",
  source:"مصدر",open:"فتح",close:"إغلاق",read:"قراءة",view:"عرض",
  published:"منشور",publish:"نشر",live:"مباشر",more:"المزيد",
  less:"أقل",details:"تفاصيل",learning:"تعلّم",learn:"تعلّم",
  lessons:"دروس",students:"طلاب",student:"طالب",university:"جامعة",
  professional:"مهني",personal:"شخصي",independent:"مستقل",
  freelance:"عمل حر",free:"مجاني",available:"متاح",online:"متصل",
  offline:"غير متصل",support:"دعم",help:"مساعدة",start:"ابدأ",
  create:"إنشاء",build:"بناء",building:"بناء",built:"مبني",
  working:"عمل",today:"اليوم",now:"الآن",time:"وقت",
  years:"سنوات",year:"سنة",days:"أيام",day:"يوم",
  weeks:"أسابيع",week:"أسبوع",month:"شهر",estimated:"مقدّر",
  estimate:"تقدير",duration:"مدّة",timeline:"جدول زمني",
  features:"ميزات",feature:"ميزة",choose:"اختر",select:"اختيار",
  selected:"محدّد",platform:"منصة",platforms:"منصات",
  recommended:"موصى به",custom:"مخصّص",
  authentication:"مصادقة",security:"أمان",privacy:"خصوصية",
  hardware:"أجهزة",sensors:"مستشعرات",admin:"إدارة",panel:"لوحة",
  mode:"وضع",settings:"إعدادات",performance:"أداء",
  testing:"اختبار",test:"اختبار",quality:"جودة",system:"نظام",
  data:"بيانات",database:"قاعدة بيانات",api:"واجهة برمجية",
  ui:"واجهة مستخدم",ux:"تجربة مستخدم",design:"تصميم",
  frameworks:"أطر عمل",framework:"إطار عمل",tools:"أدوات",
  languages:"لغات",language:"لغة",technology:"تقنية",
  technologies:"تقنيات",repository:"مستودع",repositories:"مستودعات",
  documentation:"توثيق",docs:"وثائق",chat:"محادثة",
  message:"رسالة",messages:"رسائل",comments:"تعليقات",comment:"تعليق",
  like:"إعجاب",likes:"إعجابات",unlike:"إلغاء الإعجاب",
  copy:"نسخ",copied:"تم النسخ",save:"حفظ",saved:"محفوظ",
  remove:"إزالة",share:"مشاركة",download:"تنزيل",send:"إرسال",
  submit:"إرسال",name:"الاسم",email:"البريد الإلكتروني",
  address:"عنوان",error:"خطأ",failed:"فشل",loading:"جارٍ التحميل",
  please:"رجاءً",thanks:"شكرًا",thank:"شكرًا",
  you:"أنت",your:"خاصتك",my:"خاصتي",i:"أنا",me:"أنا",
  our:"خاصتنا",we:"نحن",is:"يكون",are:"تكون",the:"",a:"",an:"",
  of:"من",for:"من أجل",in:"في",to:"إلى",with:"مع",and:"و",
  or:"أو",by:"بواسطة",from:"من",on:"على",at:"في",
  this:"هذا",that:"ذلك",all:"كل",new:"جديد",
  first:"الأول",next:"التالي",previous:"السابق",back:"رجوع",
  step:"خطوة",steps:"خطوات",complete:"مكتمل",required:"مطلوب",
  priority:"أولوية",express:"سريع",standard:"قياسي",
  budget:"ميزانية",cost:"تكلفة",price:"سعر",scope:"نطاق",
  brief:"ملخص",text:"نص",digital:"رقمي",interactive:"تفاعلي",
  simple:"بسيط",fast:"سريع",quick:"سريع",minimal:"بسيط",
  blog:"مدونة",music:"موسيقى",radio:"راديو",player:"مشغل",
  camera:"كاميرا",location:"موقع",country:"بلد",flag:"علم",
  welcome:"مرحبًا",logo:"شعار",icon:"أيقونة",image:"صورة",
  photo:"صورة",photos:"صور",link:"رابط",links:"روابط",
  click:"انقر",menu:"قائمة",toggle:"تبديل",source:"مصدر",
  news:"أخبار",feed:"موجز",latest:"أحدث",update:"تحديث",
  requests:"طلبات",request:"طلب",response:"استجابة",
  server:"خادم",client:"عميل",cloud:"سحابة",deploy:"نشر",
  deployed:"منشور",hosting:"استضافة",full:"كامل",stack:"متكامل",
  native:"أصلي",browser:"متصفح",mobile:"جوال"
};
const PHRASES = [
  ["full-stack","تطوير متكامل"],["open source","المصدر المفتوح"],
  ["software engineer","مهندس برمجيات"],["artificial intelligence","الذكاء الاصطناعي"],
  ["machine learning","تعلّم الآلة"],["google play","متجر غوغل بلاي"],
  ["web analytics","تحليلات الويب"],["project estimator","أداة تقدير المشاريع"],
  ["android native","تطبيق أندرويد أصلي"],["core features","الميزات الأساسية"],
  ["available for projects","متاح للمشاريع"],["news feed","موجز الأخبار"],
  ["in development","قيد التطوير"],["get in touch","تواصل معي"],
  ["recommended stack","التقنيات الموصى بها"],["source code","الشيفرة المصدرية"],
  ["read more","اقرأ المزيد"],["web app","تطبيق ويب"]
].sort((a,b)=>b[0].length-a[0].length);
const LETTERS={a:"ا",b:"ب",c:"ك",d:"د",e:"ي",f:"ف",g:"غ",h:"ه",i:"ي",j:"ج",k:"ك",l:"ل",m:"م",n:"ن",o:"و",p:"ب",q:"ق",r:"ر",s:"س",t:"ت",u:"و",v:"ڤ",w:"و",x:"كس",y:"ي",z:"ز"};
const LATIN=/[\p{Script=Latin}]/u;
const WORD=/[\p{Script=Latin}][\p{Script=Latin}\p{M}\d]*/gu;
const ADDRESS=/https?:\/\/[^\s<>"']+|[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}|(?:[A-Za-z0-9-]+\.)+(?:dev|app|com|org|io|ua|fr|net)(?:\/[^\s<>"']*)?/gi;
function phonetic(word) {
  let result=word.normalize("NFD").replace(/\p{M}/gu,"").toLowerCase();
  for(const [from,to] of [["tch","تش"],["sch","ش"],["sh","ش"],["ch","تش"],["kh","خ"],["gh","غ"],["ph","ف"],["th","ث"],["ck","ك"],["qu","كو"],["tion","شن"],["ee","ي"],["oo","و"]]) result=result.split(from).join(to);
  return result.replace(/[a-z]/g,ch=>LETTERS[ch]||ch);
}
/** Localize display copy only. Preserve URLs/emails for functioning links and copying. */
export function arabizeVisibleText(value) {
  if(typeof value!=="string" || !LATIN.test(value)) return value;
  const kept=[];
  let output=value.replace(ADDRESS,s=>{kept.push(s);return "\uE010"+(kept.length-1)+"\uE011";});
  for(const [phrase,translation] of PHRASES){
    const safe=phrase.replace(/[.*+?^$()|[\]{}\\]/g,"\\$&");
    output=output.replace(new RegExp("\\b"+safe+"\\b","gi"),translation);
  }
  output=output.replace(WORD,s=>WORDS[s.toLowerCase()]??phonetic(s));
  return output.replace(/\uE010(\d+)\uE011/g,(_,j)=>kept[Number(j)]).replace(/[ \t]{2,}/g," ");
}
