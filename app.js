/* ----------------------------------------------------
   Golden Sens Official Website - Application Logic
   ---------------------------------------------------- */

const OFFICIAL_WHATSAPP = "970595283261";
const OFFICIAL_PHONE    = "+46 70 739 06 16";

/* ---- Translation Dictionary & Exhaustive Text Mapping ---- */
const textReplacements = {
  en: {
    // Navigation & Header
    "الكاشفات": "Detectors",
    "من نحن": "About Us",
    "البرامج": "Software",
    "تعلم": "Learn",
    "الخدمة والدعم": "Service & Support",
    "الموزعين": "Distributors",
    "اتصل بنا": "Contact Us",
    "كواشف المعادن والماسحات 3D": "Metal Detectors & 3D Scanners",

    // Footer & Common
    "روابط سريعة": "Quick Links",
    "فئات الأجهزة": "Device Categories",
    "التواصل والمقر": "Contact & Location",
    "معلومات التواصل": "Contact Information",
    "الحث النبضي (PI)": "Pulse Induction (PI)",
    "ماسحات ضوئية 3D": "3D Scanners",
    // Footer items (Screenshot fixes)
    "<i class=\"fas fa-map-marker-alt\" style=\"color:var(--primary-gold);\"></i> <span>المقر: GOLDEN SENSITIVITY AB, BREDGRÄND 15, 753 20 UPPSALA (السويد)</span>": "<i class=\"fas fa-map-marker-alt\" style=\"color:var(--primary-gold);\"></i> <span>HQ: GOLDEN SENSITIVITY AB, BREDGRÄND 15, 753 20 UPPSALA (Sweden)</span>",
    "المقر: GOLDEN SENSITIVITY AB, BREDGRÄND 15, 753 20 UPPSALA (السويد)": "HQ: GOLDEN SENSITIVITY AB, BREDGRÄND 15, 753 20 UPPSALA (Sweden)",
    "GOLDEN SENSITIVITY AB<br>BREDGRÄND 15<br>753 20 UPPSALA (السويد)": "GOLDEN SENSITIVITY AB<br>BREDGRÄND 15<br>753 20 UPPSALA (Sweden)",
    "رادارات الأرض GPR": "GPR Ground Radars",
    "كواشف المياه والآبار": "Water & Well Detectors",
    "تعلم (يوتيوب)": "Learn (YouTube)",
    "الاتصال: +4670 739 06 16": "Call: +46 70 739 06 16",
    "الواتساب الرسمي": "Official WhatsApp",
    "<i class=\"fab fa-whatsapp\"></i> الواتساب الرسمي": "<i class=\"fab fa-whatsapp\"></i> Official WhatsApp",
    "شركة سويدية متخصصة في بناء وتطوير أجهزة كشف المعادن والماسحات الجيوفيزيائية ثلاثية الأبعاد. وانظمه الحمايه": "Swedish company specializing in building and developing 3D geophysical metal detectors and security systems.",
    "شركة سويدية متخصصة في بناء وتطوير أجهزة كشف المعادن والماسحات الجيوفيزيائية ثلاثية الأبعاد. وانظمه الحمايه.": "Swedish company specializing in building and developing 3D geophysical metal detectors and security systems.",
    "Golden Sens هي شركة سويدية متخصصة في بناء وتطوير أجهزة كشف المعادن والماسحات الجيوفيزيائية ثلاثية الأبعاد. وانظمه الحمايه.": "Golden Sens is a Swedish company specializing in building and developing 3D geophysical metal detectors and security systems.",
    "© 2026 Golden Sensitivity AB - جميع الحقوق محفوظة لشركة Golden Sensitivity AB السويدية.": "© 2026 Golden Sensitivity AB - All rights reserved by Golden Sensitivity AB Sweden.",

    // Screenshot 1 & 2: Card Categories, Badges & Descriptions on index.html
    "كاشفات النبض الكهرومغناطيسي (PI)": "Electromagnetic Pulse Detectors (PI)",
    "كواشف النبض الكهرومغناطيسي (PI)": "Electromagnetic Pulse Detectors (PI)",
    "ماسحات ضوئية 3D متقدمة": "Advanced 3D Scanners",
    "ماسحات 3D متقدمة": "Advanced 3D Scanners",
    "ماسح ضوئي 3D متقدم": "Advanced 3D Scanner",
    "ماسح 3D متقدم": "Advanced 3D Scanner",
    "رادارات اختراق الأرض (GPR)": "Ground Penetrating Radars (GPR)",
    "كواشف المياه الجوفية": "Water & Well Detection Systems",
    "أنظمة كشف المياه والآبار": "Water & Well Detection Systems",
    "أنظمة التسجيل والتحليل": "Logging & Analysis Systems",

    "الأكثر طلباً 🌟": "Best Seller 🌟",
    "أعماق 12m 🚀": "12m Depth 🚀",
    "مياه وآبار 💧": "Water & Wells 💧",
    "ماسح 3D": "3D Scanner",
    "الأشهر 🔥": "Most Popular 🔥",
    "PRO 🏆": "PRO 🏆",
    "مسجّل 3D": "3D Logger",
    "مسجّل 3D 📡": "3D Logger 📡",

    "البحث عن الكنوز والتجاويف والأنفاق — مع تطبيق GS_MAGNOVA": "Treasure, Cavity & Tunnel Hunting — With GS MAGNOVA App",
    "البحث عن الكنوز والتجاويف والانفاق — مع تطبيق GS_MAGNOVA": "Treasure, Cavity & Tunnel Hunting — With GS MAGNOVA App",
    "الذهب والكنوز والآثار — Magnetometer + Mineral Scan": "Gold, Treasures & Relics — Magnetometer + Mineral Scan",
    "المنظومة الكاملة للمحترفين — جميع أوضاع الكشف": "Complete System for Professionals — All Detection Modes",
    "يحوّل الإشارات الصوتية إلى صورة 3D مع تطبيق GS MAGNOVA": "Converts Acoustic Signals to 3D Image with GS MAGNOVA App",

    // Screenshot 2: Contact page links
    "فتح محادثة الواتساب ←": "Open WhatsApp Chat ←",
    "فتح محادثة الواتساب": "Open WhatsApp Chat",
    "Golden Sens — انضم للمجموعة ←": "Golden Sens — Join Group ←",
    "انضم للمجموعة ←": "Join Group ←",
    "تواصل مع فريقنا": "Connect with Our Team",
    "نحن هنا للإجابة عن كافة استفساراتك حول أجهزتنا. تواصل معنا عبر أي من قنوات التواصل التالية.": "We are here to answer all your inquiries about our detectors. Contact us through any of the following channels.",
    "المقر الرئيسي": "Headquarters",
    "GOLDEN SENSITIVITY AB<br>BREDGRÄND 15<br>753 20 UPPSALA (السويد)": "GOLDEN SENSITIVITY AB<br>BREDGRÄND 15<br>753 20 UPPSALA (Sweden)",
    "رقم ضريبة القيمة المضافة (Momsreg.nr / VAT-nr):": "VAT Registration Number (Momsreg.nr / VAT-nr):",
    "رقم الاتصال المباشر": "Direct Phone Number",
    "واتساب مباشر": "Direct WhatsApp",
    "البريد الإلكتروني": "Email Address",
    "قناة اليوتيوب": "YouTube Channel",
    "مجموعة الفيسبوك الرسمية": "Official Facebook Group",
    "قناة التلجرام الرسمية": "Official Telegram Channel",
    "Golden Sens — قناة التلجرام": "Golden Sens — Telegram Channel",
    "قناة التلجرام": "Telegram Channel",
    "أرسل لنا رسالة": "Send Us a Message",
    "رقم هاتفك": "Your Phone Number",
    "أدخل رقم هاتفك للرد عليك": "Enter your phone number",
    "بريدك الإلكتروني (اختياري)": "Your Email (Optional)",
    "رسالتك": "Your Message",
    "اكتب استفسارك أو طلبك هنا...": "Write your inquiry or request here...",
    "إرسال الرسالة": "Send Message",
    "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.": "Your message has been sent successfully! We will contact you soon.",

    // Screenshot 3: GS9000 specs box item on product.html
    "دعم متعدد للغات:": "Multi-Language Support:",
    "واجهات مستخدم سهلة وبسيطة.": "Simple and easy user interface.",
    "<i class=\"fas fa-globe\"></i> <strong>دعم متعدد للغات:</strong> واجهات مستخدم سهلة وبسيطة.": "<i class=\"fas fa-globe\"></i> <strong>Multi-Language Support:</strong> Simple and easy user interface.",
    "<i class=\"fas fa-globe\"></i> <strong>دعم متعدد للغات:</strong> واجهات عالمية سهلة الاستخدام.": "<i class=\"fas fa-globe\"></i> <strong>Multi-Language Support:</strong> Easy-to-use global interfaces.",

    // Screenshot 4: About page tags & titles
    "المقر الرئيسي والتصنيع": "Headquarters & Manufacturing",
    "<i class=\"fas fa-building\"></i> المقر الرئيسي والتصنيع": "<i class=\"fas fa-building\"></i> Headquarters &amp; Manufacturing",
    "الرؤية المستقبلية": "Future Vision",
    "<i class=\"fas fa-eye\"></i> الرؤية المستقبلية": "<i class=\"fas fa-eye\"></i> Future Vision",
    "التعريف بالشركة والاعتماد": "Company Overview & Certification",
    "من نحن - شركة Golden Sensitivity AB السويدية": "About Us - Golden Sensitivity AB Sweden",
    "من نحن - شركة Golden Sens السويدية": "About Us - Golden Sensitivity AB Sweden",
    "نبذة عن الشركة": "Company Profile",
    "Golden Sensitivity AB هي شركة سويدية متخصصة في بناء وتطوير أجهزة كشف المعادن والماسحات الجيوفيزيائية ثلاثية الأبعاد وأنظمة الحماية.": "Golden Sensitivity AB is a Swedish company specializing in building and developing 3D geophysical metal detectors and security systems.",
    "الرؤية المستقبلية لشركة Golden Sensitivity AB هي قيادة الابتكار العالمي في أجهزة الحث النبضي والرادارات الأرضية، وتطوير معالجات رقمية فائقة الذكاء قادرة على التغلغل في الطبقات الصخرية العميقة وتسهيل عمليات التنقيب والاستكشاف بدقة متناهية.": "The future vision of Golden Sensitivity AB is to lead global innovation in pulse induction devices and ground radars, developing super-smart digital processors capable of penetrating deep rock layers and facilitating exploration operations with ultimate precision.",
    "المقر الرئيسي والشركة": "Headquarters & Company",
    "(السويد)": "(Sweden)",
    "مقر الشركة (Uppsala)": "Company HQ (Uppsala)",
    "عرض صورة مقر الشركة بالكامل": "View Full Company HQ Image",
    "شهادة الاعتماد والرسمية لشركة Golden Sens السويدية": "Official Registration Certificate of Golden Sens Sweden",
    "شهادة الاعتماد والسجل التجاري الرسمي لشركة Golden Sens": "Official Certificate & Commercial Registration of Golden Sens Sweden",

    // Screenshot 5: Learn page YouTube links & PDF download button
    "مشاهدة الدرس على يوتيوب ←": "Watch Lesson on YouTube ←",
    "مشاهدة الدرس على يوتيوب": "Watch Lesson on YouTube",
    "تحميل دليل الاستخدام (PDF)": "Download User Manual (PDF)",
    "<i class=\"fas fa-download\"></i> تحميل دليل الاستخدام (PDF)": "<i class=\"fas fa-download\"></i> Download User Manual (PDF)",
    "دروس واختبارات الأجهزة الميدانية": "Field Tutorials & Device Testing",
    "شروحات وفيديوهات التدريب الميداني المعتمدة": "Approved Field Tutorials & Training Videos",
    "قناة Golden Sensitivity الرسمية على اليوتيوب": "Official Golden Sensitivity YouTube Channel",
    "تابع الشروحات الميدانية الحصرية، طرق معايرة الأجهزة، وتجارب الكشف ثلاثي الأبعاد مباشرة خطوة بخطوة.": "Watch exclusive field tutorials, device calibration methods, and step-by-step 3D detection demos.",
    "أكاديمية التدريب الميداني": "Field Training Academy",
    "قائمة الدروس والتجارب الميدانية المرتبة": "List of Organized Field Lessons & Demos",
    "الدرس الأول — المبادئ الأساسية": "Lesson 1 — Core Fundamentals",
    "طريقة تجميع وتشغيل جهاز حث نبضي": "How to Assemble & Operate a Pulse Induction Device",
    "شرح خطوات تركيبة الأجزاء، ربط طبق البحث، وتشغيل الوحدة الرئيسية لأول مرة بطريقة صحيحة.": "Explanation of assembly steps, coil connection, and first-time main unit operation.",
    "الدرس الثاني — المعايرة الميدانية": "Lesson 2 — Field Calibration",
    "موازنة التربة وعزل الصخور البازلتية والمعدنية": "Ground Balance & Basalt/Mineral Rock Isolation",
    "طريقة ضبط الحساسية وعزل الإشارات الكاذبة الناتجة عن تمعدن التربة والجبال الصخرية.": "How to adjust sensitivity and isolate false signals caused by soil mineralization and rocky mountains.",
    "الدرس الثالث — قياس الأعماق": "Lesson 3 — Depth Measurement",
    "طريقة تحديد عمق وحجم الأهداف والكنوز الدفينة": "How to Determine Depth and Size of Buried Treasures",
    "كيفية حساب العمق بالمتر وقراءة الترددات الصادرة من المعادن الثمينة تحت الأرض.": "How to calculate depth in meters and read frequencies emitted by precious metals underground.",
    "الدليل الميداني الرسمي": "Official Field Guide",
    "GS_Iridium دليل الاستخدام": "GS Iridium User Manual",
    "الكتالوج والكتيب الميداني المعتمد الشامل لخطوات تشغيل ومعايرة جهاز GS Iridium 3D وضبط الإعدادات.": "Official certified field handbook covering operation, calibration, and settings of GS Iridium 3D.",

    // Software Page (programs.html)
    "البرمجيات الجيوفيزيائية المعتمدة": "Certified Geophysical Software",
    "برامج وتطبيقات Golden Sens على متجر Google Play": "Golden Sens Apps & Software on Google Play Store",
    "أنظمة تحليل تصويرية احترافية ثلاثية الأبعاد تمكنك من معالجة بيانات الكشف ورسم الخرائط الحرارية وتحديد نوع المعدن والعمق بدقة عالية.": "Professional 3D imaging analysis systems enabling scan data processing, heat map rendering, and precise metal & depth identification.",
    "Google Play Official App": "Official Google Play App",
    "التطبيق المعتمد للمسح المغناطيسي والتصوير الجيوفيزيائي ثلاثي الأبعاد وعرض الخرائط الحرارية المباشرة للأرض والمباني والجدران.": "Official app for magnetic scanning, 3D geophysical imaging, and live thermal heat maps for ground, buildings, and walls.",
    "تطبيق مجاني GS MAGNOLITE": "Free App GS MAGNOLITE",
    "تطبيق المسح والتحليل المجاني السريع عبر البلوتوث لعرض البيانات الجيوفيزيائية الأساسية وتحليل التربة ميدانياً.": "Fast free Bluetooth scan and analysis app for essential geophysical data display and field soil analysis.",
    "Windows PC Software PRO 💻": "Windows PC Software PRO 💻",
    "Visualizer 3D Studio": "Visualizer 3D Studio",
    "برنامج كشف وتصوير احترافي لتجسيد الهياكل والتجاويف والأهداف المخفية في نطاق ثلاثي الأبعاد (3D).": "Professional detection & imaging software for rendering 3D structures, cavities, and buried targets.",
    "الاحترافي:": "Professional:",
    "برنامج تصوير ثلاثي الأبعاد مخصص لأجهزة الكشف عن المعادن والماسحات الضوئية 3D.": "3D imaging software designed for metal detectors and 3D geophysical scanners.",
    "سهل الاستخدام:": "Easy to Use:",
    "واجهة سلسة ومصممة أيضاً للمستخدمين الأقل خبرة.": "Intuitive user interface also tailored for less experienced users.",
    "التصور:": "Visualization:",
    "عرض التجاويف والعيوب والهياكل المكتشفة كرسومات ثنائية وثلاثية الأبعاد (2D & 3D).": "Display detected cavities, faults, and structures as 2D and 3D graphics.",
    "التحديد:": "Determination:",
    "تحديد الموقع، الحجم، والعمق بالمتر للأشياء والأهداف المخفية.": "Precise location, size, and depth measurement in meters for hidden objects.",
    "التحليل والتوثيق:": "Analysis & Documentation:",
    "تحليل كامل للأجسام والهياكل المكتشفة مع التوثيق واستخراج التقارير الجيوفيزيائية.": "Comprehensive analysis of detected objects and structures including documentation and reports.",
    "طلب تفعيل البرنامج (Visualizer 3D Studio)": "Request Activation Key (Visualizer 3D Studio)",
    "تحميل التطبيق من متجر Google Play": "Download App on Google Play Store",
    "تحميل ملف التثبيت (Setup.exe)": "Download Setup File (Setup.exe)",
    "السعر: 30 يورو": "Price: 30 €",
    "السعر: مجاني 🎁": "Price: Free 🎁",
    "للتفعيل اضغط هنا": "Click Here to Activate",
    "التطبيق المعتمد للمسح المغناطيسي والتصوير الجيوفيزيائي ثلاثي الأبعاد وعرض الخرائط الحرارية المباشرة للأرض والمباني والجدران (يعمل فقط مع أجهزة الشركة).": "Official app for magnetic scanning, 3D geophysical imaging, and live thermal heat maps (Works only with company devices).",

    // Product Titles
    "جهاز GS9000": "GS9000 Device",
    "جهاز GS Iridium 3D": "GS Iridium 3D Device",
    "جهاز GPR Radar": "GPR Radar Device",
    "جهاز كشف المياه والآبار": "Water & Well Detector",
    "GS_MAGNOVA LITE": "GS MAGNOVA LITE",
    "GS_MAGNOVA PLUS": "GS MAGNOVA PLUS",
    "GS_MAGNOVA PRO": "GS MAGNOVA PRO",
    "GS data_logger": "GS Data Logger",
    "جهاز data_logger": "GS Data Logger Device",

    // Specs Labels & Quantities
    "العمق الأقصى:": "Max Depth:",
    "عمق الكشف:": "Detection Depth:",
    "الضمان:": "Warranty:",
    "الوضع:": "Mode:",
    "التقنية:": "Technology:",
    "الاتصال:": "Connectivity:",
    "المستوى:": "Level:",
    "التطبيق:": "App:",
    "المحتويات:": "Package Contents:",
    "3 متراً": "3 Meters",
    "6 متراً": "6 Meters",
    "12 متراً": "12 Meters",
    "100 متر": "100 Meters",
    "12 م": "12 m",
    "8 م": "8 m",
    "2 سنوات": "2 Years",
    "Full 3D System": "Full 3D System",
    "صوت → صورة 3D": "Audio → 3D Image",
    "Bluetooth / USB": "Bluetooth / USB",

    // Badges
    "الأكثر طلباً 🌟": "Best Seller 🌟",
    "الأول عالمياً بتقنية 4D 🌟": "World's First 4D 🌟",
    "أعماق 12m 🚀": "12m Depth 🚀",
    "رادار اختراق الأرض 📡": "Ground Radar 📡",
    "مياه وآبار 💧": "Water & Wells 💧",
    "مسجّل 3D 📡": "3D Logger 📡",
    "مسجّل 3D": "3D Logger",

    // Subtitles & Descriptions
    "المنظومة الكاملة للمحترفين — جميع أوضاع الكشف": "Complete system for professionals — all detection modes",
    "يحوّل الإشارات الصوتية إلى صورة 3D مع تطبيق GS MAGNOVA": "Converts acoustic signals into 3D images with GS MAGNOVA app",
    "نظام الحث النبضي المتقدم للكشف العميق وعزل المعادن والصخور البازلتية.": "Advanced pulse induction system for deep detection and mineral discrimination.",
    "كاشف معادن سريع متعدد الترددات لاسلكي بالكامل.. عالي الأداء على الأرض لصيد الذهب والآثار، وعلى الشاطئ للعملات والمجوهرات حتى على الرمال الرطبة وتحت الماء لصيد الكنوز. الجهاز الأول بالعالم بهذه التقنية التي تعتمد على رسم 4D للحقل المعدني.": "Fast multi-frequency fully wireless metal detector.. High performance on land for gold & relics, on beach for coins & jewelry even on wet sand and underwater. The world's first device with 4D magnetic field mapping.",
    "نظام راداري جيوفيزيائي عالي الدقة لكشف التكهفات والفراغات والمقابر الدفينة.": "High-precision geophysical radar system for detecting cavities, voids, and buried vaults.",
    "نظام استكشاف المياه الجوفية والآبار الارتوازية وتحديد نسبة الملوحة.": "Underground water & artesian well exploration system with salinity level detection.",
    "البداية المثالية للكشف الميداني — كاشف الكنوز مع جهاز لوحي وبرنامج GS_MAGNOVA.": "Ideal start for field detection — treasure detector with tablet & GS MAGNOVA app.",
    "الأداء الاحترافي للباحثين المتقدمين — كاشف الكنوز مع جهاز لوحي وبرنامج GS_MAGNOVA.": "Professional performance for advanced seekers — treasure detector with tablet & GS MAGNOVA app.",
    "المنظومة الكاملة للمحترفين — جميع أوضاع الكشف في جهاز واحد.": "Complete professional system — all detection modes in one device.",
    "يحوّل الإشارات الصوتية الصادرة من التربة إلى صورة ثلاثية الأبعاد تفاعلية — مع تطبيق GS MAGNOVA.": "Converts soil acoustic signals into interactive 3D graphics — with GS MAGNOVA app.",
    "وضعيات مسح مرنة تلائم كافة التضاريس. يمنحك الجهاز خيارات متعددة لمسح التربة وتحديد ما تحت الأرض بأساليب مختلفة ودقيقة.": "Flexible scanning modes for all terrains. Provides multiple options for ground scanning and underground target pinpointing.",
    "عرض التفاصيل": "View Details",
    "الاستفسار والطلب الفوري عبر الواتساب": "Instant WhatsApp Inquiry & Order",
    "تحميل GS_Iridium دليل الاستخدام (PDF)": "Download GS Iridium User Manual (PDF)",
    "تحميل التطبيق من متجر Google Play": "Download App on Google Play Store",
    "زيارة القناة والاشتراك 🔔": "Visit Channel & Subscribe 🔔",
    "تحميل دليل الاستخدام (PDF)": "Download User Manual (PDF)",
    "المواصفات الفنية والتقنية:": "Technical Specifications:",
    "SWEDISH TECHNOLOGY - GOLDEN SENS": "SWEDISH TECHNOLOGY - GOLDEN SENS",
    "مطابقة الجودة الأوروبية": "European CE Quality Certified",
    "شهادة الجودة العالمية": "ISO 9001:2015 Certified",
    "تكنولوجيا سويدية معتمدة": "Certified Swedish Technology",
    "اعتماد TÜV Rheinland": "TÜV Rheinland Certified",
    "معيار البيئة الأوروبي": "RoHS Environmentally Compliant",
    // Screenshot headers
    "الكاتالوج المعتمد": "Official Catalog",
    "الكاتالوج المعتمد لعام 2026": "Official 2026 Catalog",
    "أجهزة الكشف والتصوير 3D": "3D Detection & Imaging Devices",
    "أجهزة الكشف الجيوفيزيائية والماسحات 3D": "Geophysical Detectors & 3D Scanners",
    "السجل والوثائق التجارية المعتمدة": "Approved Commercial Registrations & Certificates",
    "الضمانات والوثائق": "Guarantees & Certificates",

    // All Full Spec LI Items
    "<i class=\"fas fa-crosshairs\"></i> <strong>المسح النقطي الموجه:</strong> كشف دقيق ومحدد للأهداف.": "<i class=\"fas fa-crosshairs\"></i> <strong>Pinpoint Directed Scan:</strong> Precise and targeted detection of targets.",
    "<i class=\"fas fa-sync-alt\"></i> <strong>المسح التلقائي المستمر:</strong> مسح مساحات واسعة بسلاسة.": "<i class=\"fas fa-sync-alt\"></i> <strong>Continuous Auto Scan:</strong> Smoothly scans large areas.",
    "<i class=\"fas fa-bolt\"></i> <strong>التصوير اللحظي الفوري:</strong> إظهار نتائج المسح في الوقت الفعلي.": "<i class=\"fas fa-bolt\"></i> <strong>Real-time Live Scan:</strong> Displays scan results in real-time.",
    "<i class=\"fas fa-balance-scale\"></i> <strong>مؤشر الموازنة والاستقرار:</strong> استقرار عالٍ في كافة أنواع التربة.": "<i class=\"fas fa-balance-scale\"></i> <strong>Balance &amp; Stability Indicator:</strong> High stability across all soil types.",
    "<i class=\"fas fa-gem\"></i> <strong>التحليل المتقدم للأهداف الثمينة:</strong> تمييز الذهب والمعادن الثمينة.": "<i class=\"fas fa-gem\"></i> <strong>Advanced Target Discrimination:</strong> Gold and precious metals discrimination.",
    "<i class=\"fas fa-chart-area\"></i> <strong>نظام تمثيل مرئي ذكي:</strong> رسومات وبيانات ثلاثية الأبعاد واضحة.": "<i class=\"fas fa-chart-area\"></i> <strong>Smart 3D Display System:</strong> Clear 3D graphics and data display.",
    "<i class=\"fas fa-palette\"></i> <strong>توجيه لوني للأهداف:</strong> الألوان المحددة لنوع المعدن والفراغ.": "<i class=\"fas fa-palette\"></i> <strong>Target Color Coding:</strong> Specific color codes for metal types and voids.",
    "<i class=\"fas fa-brain\"></i> <strong>التعرف الذكي وحفظ الأهداف المخصصة:</strong> تخزين بيانات المسح الميداني.": "<i class=\"fas fa-brain\"></i> <strong>Smart Target Memory &amp; Recognition:</strong> Stores and remembers field scan data.",
    "<i class=\"fas fa-volume-up\"></i> <strong>نظام صوتي متجاوب:</strong> تنبيهات صوتية واضحة ومقترنة بالعمق.": "<i class=\"fas fa-volume-up\"></i> <strong>Responsive Audio System:</strong> Clear audio alerts matched with depth.",
    "<i class=\"fas fa-battery-full\"></i> <strong>نظام ذكي لإدارة الطاقة والشحن:</strong> بطارية تدوم لساعات طويلة من العمل.": "<i class=\"fas fa-battery-full\"></i> <strong>Smart Power &amp; Battery Management:</strong> Long-lasting battery life for long work hours.",
    "<i class=\"fas fa-running\"></i> <strong>احترافية وسهولة في الحركة:</strong> تصميم مريح خفيف الوزن.": "<i class=\"fas fa-running\"></i> <strong>Ergonomic &amp; Lightweight Motion:</strong> Comfortable and lightweight design.",
    "<i class=\"fas fa-globe\"></i> <strong>دعم متعدد للغات:</strong> واجهات عالمية سهلة الاستخدام.": "<i class=\"fas fa-globe\"></i> <strong>Multi-Language Support:</strong> Easy-to-use global interfaces.",
    "<i class=\"fas fa-satellite-dish\"></i> <strong>دمج متعدد للترددات:</strong> تحديد المعادن والكنوز بدقة متناهية.": "<i class=\"fas fa-satellite-dish\"></i> <strong>Multi-Frequency Integration:</strong> Pinpoint accuracy for metals and treasures.",
    "<i class=\"fas fa-laptop-code\"></i> <strong>تحليل متقدم عبر برنامج GS MAGNOVA:</strong> معالجة ثلاثية الأبعاد احترافية.": "<i class=\"fas fa-laptop-code\"></i> <strong>Advanced GS MAGNOVA Software Analysis:</strong> Professional 3D data processing.",
    "<i class=\"fas fa-cube\"></i> <strong>تصوير الجدران وبجميع الاتجاهات:</strong> كشف كامل للمباني والكهوف والجدران.": "<i class=\"fas fa-cube\"></i> <strong>Multi-Directional Wall &amp; Void Scan:</strong> Full detection of walls, cavities, and buildings.",
    "<i class=\"fas fa-file-pdf\" style=\"color:#ff4d4d;\"></i> <strong>دليل الاستخدام:</strong> كراسة التعلم والتشغيل الميداني متوفرة بصيغة PDF للتحميل المباشر.": "<i class=\"fas fa-file-pdf\" style=\"color:#ff4d4d;\"></i> <strong>User Manual:</strong> Learning and field operation guide available in PDF format.",
    "<i class=\"fas fa-wifi\"></i> <strong>الاتصال والسرعة:</strong> كاشف معادن سريع متعدد الترددات لاسلكي بالكامل.": "<i class=\"fas fa-wifi\"></i> <strong>Speed &amp; Connectivity:</strong> Fast multi-frequency fully wireless metal detector.",
    "<i class=\"fas fa-cube\"></i> <strong>ابتكار 4D عالمي:</strong> الجهاز الأول في العالم بهذه التقنية التي تعتمد على رسم 4D (رباعي الأبعاد) للحقل المعدني.": "<i class=\"fas fa-cube\"></i> <strong>World 4D Innovation:</strong> World's first device with 4D magnetic field mapping technology.",
    "<i class=\"fas fa-gem\"></i> <strong>الأداء المتعدد والتطبيق:</strong> كاشف عالي الأداء على الأرض لصيد الذهب والآثار، وعلى الشاطئ للعملات والمجوهرات حتى على الرمال الرطبة.": "<i class=\"fas fa-gem\"></i> <strong>Multi-Performance &amp; Use:</strong> High performance on land for gold &amp; relics, on beach for coins &amp; jewelry even on wet sand.",
    "<i class=\"fas fa-water\"></i> <strong>العمل تحت الماء:</strong> مخصص للصيد والبحث عن الكنوز تحت الماء وفي الشواطئ الرطبة.": "<i class=\"fas fa-water\"></i> <strong>Underwater Operation:</strong> Dedicated for underwater treasure hunting &amp; wet beaches.",
    "<i class=\"fas fa-check-circle\"></i> <strong>العمق الأقصى:</strong> يصل إلى 3 متراً في باطن الأرض.": "<i class=\"fas fa-check-circle\"></i> <strong>Max Depth:</strong> Reaches up to 3 meters underground.",
    "<i class=\"fas fa-wave-square\"></i> <strong>تكنولوجيا الحث النبضي المتقدمة (PI):</strong> تخترق أعتى التربات والمغناطيسية.": "<i class=\"fas fa-wave-square\"></i> <strong>Advanced Pulse Induction Tech (PI):</strong> Penetrates highly mineralized soil &amp; magnetic rocks.",
    "<i class=\"fas fa-shield-alt\"></i> <strong>الضمان:</strong> 2 سنوات ضمان شامل معتمد.": "<i class=\"fas fa-shield-alt\"></i> <strong>Warranty:</strong> 2 Years certified full warranty.",
    "<i class=\"fas fa-check-circle\"></i> <strong>العمق الأقصى:</strong> 6 متراً.": "<i class=\"fas fa-check-circle\"></i> <strong>Max Depth:</strong> 6 Meters.",
    "<i class=\"fas fa-shield-alt\"></i> <strong>الضمان:</strong> 2 سنوات.": "<i class=\"fas fa-shield-alt\"></i> <strong>Warranty:</strong> 2 Years.",
    "<i class=\"fas fa-radar\"></i> <strong>التردد الراداري:</strong> مسح ثلاثي الأبعاد للجدران والأرضيات.": "<i class=\"fas fa-radar\"></i> <strong>Radar Frequency:</strong> 3D scanning for walls and floors.",
    "<i class=\"fas fa-check-circle\"></i> <strong>العمق الأقصى:</strong> 100 متر.": "<i class=\"fas fa-check-circle\"></i> <strong>Max Depth:</strong> 100 Meters.",
    "<i class=\"fas fa-water\"></i> <strong>تحديد مصادر المياه:</strong> عذبة، مالحة، وكبريتية.": "<i class=\"fas fa-water\"></i> <strong>Water Source Mapping:</strong> Fresh, salty, and sulfur water.",
    "<i class=\"fas fa-arrow-down\"></i> <strong>عمق الكشف:</strong> يصل إلى 8 أمتار.": "<i class=\"fas fa-arrow-down\"></i> <strong>Detection Depth:</strong> Reaches up to 8 meters.",
    "<i class=\"fas fa-arrow-down\"></i> <strong>عمق الكشف:</strong> يصل إلى 12 متراً.": "<i class=\"fas fa-arrow-down\"></i> <strong>Detection Depth:</strong> Reaches up to 12 meters.",
    "<i class=\"fas fa-expand-arrows-alt\"></i> <strong>المحتويات:</strong> كاشف الكنوز + جهاز لوحي + برنامج GS_MAGNOVA.": "<i class=\"fas fa-expand-arrows-alt\"></i> <strong>Package Contents:</strong> Treasure detector + Tablet + GS_MAGNOVA app.",
    "<i class=\"fas fa-tools\"></i> <strong>الاستخدام:</strong> البحث عن الكنوز، والكشف عن التجاويف والأنفاق.": "<i class=\"fas fa-tools\"></i> <strong>Use Case:</strong> Treasure hunting, cavity and tunnel detection.",
    "<i class=\"fas fa-tools\"></i> <strong>التطبيق:</strong> البحث عن الكنوز، علم الآثار، وصيد الذهب الطبيعي.": "<i class=\"fas fa-tools\"></i> <strong>Application:</strong> Treasure hunting, archaeology, natural gold prospecting.",
    "<i class=\"fas fa-sliders-h\"></i> <strong>أوضاع التشغيل:</strong> المسح الأرضي ثلاثي الأبعاد، الصوت الحي (مقياس المغناطيسية).": "<i class=\"fas fa-sliders-h\"></i> <strong>Operating Modes:</strong> 3D Ground Scan, Live Audio Magnetometer.",
    "<i class=\"fas fa-sliders-h\"></i> <strong>أوضاع التشغيل:</strong> المسح 3D، Pinpointer، Magnetometer، Mineral Scan.": "<i class=\"fas fa-sliders-h\"></i> <strong>Operating Modes:</strong> 3D Scan, Pinpointer, Magnetometer, Mineral Scan.",
    "<i class=\"fas fa-sliders-h\"></i> <strong>أوضاع التشغيل:</strong> المسح 3D، Pinpointer، Magnetometer، Mineral Scan — كامل النظام.": "<i class=\"fas fa-sliders-h\"></i> <strong>Operating Modes:</strong> 3D Scan, Pinpointer, Magnetometer, Mineral Scan — Complete System.",
    "<i class=\"fas fa-gem\"></i> <strong>الكشف:</strong> صناديق الكنوز، التجاويف، والأنفاق المدفونة.": "<i class=\"fas fa-gem\"></i> <strong>Target Detection:</strong> Treasure boxes, cavities, and buried tunnels.",
    "<i class=\"fas fa-gem\"></i> <strong>الكشف:</strong> معادن الذهب، صناديق الكنوز، المجوهرات والتحف.": "<i class=\"fas fa-gem\"></i> <strong>Target Detection:</strong> Gold metals, treasure boxes, jewelry, and relics.",
    "<i class=\"fas fa-gem\"></i> <strong>الكشف:</strong> معادن الذهب، صناديق الكنوز، المجوهرات والتحف الأثرية.": "<i class=\"fas fa-gem\"></i> <strong>Target Detection:</strong> Gold metals, treasure boxes, jewelry, and ancient artifacts.",
    "<i class=\"fas fa-star\"></i> <strong>المستوى:</strong> نظام احترافي كامل للمهندسين والمحترفين.": "<i class=\"fas fa-star\"></i> <strong>Level:</strong> Complete professional system for engineers &amp; experts.",
    "<i class=\"fas fa-mobile-alt\"></i> <strong>التطبيق:</strong> يعمل مع تطبيق GS_MAGNOVA العالمي.": "<i class=\"fas fa-mobile-alt\"></i> <strong>App:</strong> Works with the global GS_MAGNOVA app.",
    "<i class=\"fas fa-wave-square\"></i> <strong>التقنية:</strong> يحوّل الإشارات الصوتية الصادرة من التربة إلى صورة 3D تفاعلية دقيقة.": "<i class=\"fas fa-wave-square\"></i> <strong>Technology:</strong> Converts soil acoustic signals into precise interactive 3D images.",
    "<i class=\"fas fa-mobile-alt\"></i> <strong>التطبيق:</strong> يعمل بالتكامل الكامل مع تطبيق GS MAGNOVA العالمي.": "<i class=\"fas fa-mobile-alt\"></i> <strong>App:</strong> Operates in full integration with global GS MAGNOVA app.",
    "<i class=\"fas fa-layer-group\"></i> <strong>الطبقات:</strong> تحليل متعدد الطبقات للكشف الدقيق والتمييز بين الأهداف.": "<i class=\"fas fa-layer-group\"></i> <strong>Soil Layers:</strong> Multi-layer analysis for accurate target discrimination.",
    "<i class=\"fas fa-save\"></i> <strong>الحفظ:</strong> تخزين واسترجاع جلسات المسح الميداني بالكامل.": "<i class=\"fas fa-save\"></i> <strong>Memory &amp; Save:</strong> Store and recall full field scanning sessions.",
    "<i class=\"fas fa-wifi\"></i> <strong>الاتصال:</strong> Bluetooth وUSB لربط الجهاز بالتطبيق بسرعة.": "<i class=\"fas fa-wifi\"></i> <strong>Connectivity:</strong> Bluetooth &amp; USB for fast app connection.",
    "<i class=\"fas fa-chart-area\"></i> <strong>التمثيل المرئي:</strong> رسومات ثلاثية الأبعاد واضحة وتفاعلية.": "<i class=\"fas fa-chart-area\"></i> <strong>Visual Display:</strong> Clear and interactive 3D graphics.",
    "<i class=\"fas fa-palette\"></i> <strong>التوجيه اللوني:</strong> ألوان محددة لنوع المعدن والفراغ تحت الأرض.": "<i class=\"fas fa-palette\"></i> <strong>Color Guidance:</strong> Specific color codes for metal types and underground voids."
  },
  sv: {
    // Navigation & Header
    "الكاشفات": "Detektorer",
    "من نحن": "Om Oss",
    "البرامج": "Programvara",
    "تعلم": "Lär Dig",
    "الخدمة والدعم": "Service & Support",
    "الموزعين": "Återförsäljare",
    "اتصل بنا": "Kontakta Oss",
    "كواشف المعادن والماسحات 3D": "Metalldetektorer & 3D-skannrar",

    // Footer & Common
    "روابط سريعة": "Snabblänkar",
    "فئات الأجهزة": "Kategorier",
    "التواصل والمقر": "Kontakt & Plats",
    "معلومات التواصل": "Kontaktinformation",
    "الحث النبضي (PI)": "Pulsinduktion (PI)",
    "ماسحات ضوئية 3D": "3D-skannrar",
    "<i class=\"fas fa-map-marker-alt\" style=\"color:var(--primary-gold);\"></i> <span>المقر: GOLDEN SENSITIVITY AB, BREDGRÄND 15, 753 20 UPPSALA (السويد)</span>": "<i class=\"fas fa-map-marker-alt\" style=\"color:var(--primary-gold);\"></i> <span>Huvudkontor: GOLDEN SENSITIVITY AB, BREDGRÄND 15, 753 20 UPPSALA (Sverige)</span>",
    "المقر: GOLDEN SENSITIVITY AB, BREDGRÄND 15, 753 20 UPPSALA (السويد)": "Huvudkontor: GOLDEN SENSITIVITY AB, BREDGRÄND 15, 753 20 UPPSALA (Sverige)",
    "GOLDEN SENSITIVITY AB<br>BREDGRÄND 15<br>753 20 UPPSALA (السويد)": "GOLDEN SENSITIVITY AB<br>BREDGRÄND 15<br>753 20 UPPSALA (Sverige)",
    "رادارات الأرض GPR": "Markradar (GPR)",
    "كواشف المياه والآبار": "Vatten- & Brunnsdetektorer",
    "تعلم (يوتيوب)": "Lär Dig (YouTube)",
    "الاتصال: +4670 739 06 16": "Ring: +46 70 739 06 16",
    "الواتساب الرسمي": "Officiell WhatsApp",
    "<i class=\"fab fa-whatsapp\"></i> الواتساب الرسمي": "<i class=\"fab fa-whatsapp\"></i> Officiell WhatsApp",
    "شركة سويدية متخصصة في بناء وتطوير أجهزة كشف المعادن والماسحات الجيوفيزيائية ثلاثية الأبعاد. وانظمه الحمايه": "Svenskt företag specialiserat på utveckling av 3D geofysiska metalldetektorer och säkerhetssystem.",
    "شركة سويدية متخصصة في بناء وتطوير أجهزة كشف المعادن والماسحات الجيوفيزيائية ثلاثية الأبعاد. وانظمه الحمايه.": "Svenskt företag specialiserat på utveckling av 3D geofysiska metalldetektorer och säkerhetssystem.",
    "Golden Sens هي شركة سويدية متخصصة في بناء وتطوير أجهزة كشف المعادن والماسحات الجيوفيزيائية ثلاثية الأبعاد. وانظمه الحمايه.": "Golden Sens är ett svenskt företag specialiserat på utveckling av 3D geofysiska metalldetektorer och säkerhetssystem.",
    "© 2026 Golden Sensitivity AB - جميع الحقوق محفوظة لشركة Golden Sensitivity AB السويدية.": "© 2026 Golden Sensitivity AB - Alla rättigheter förbehållna Golden Sensitivity AB Sverige.",

    // Section Headers & Catalog Subtitles
    "الكاتالوج المعتمد": "Officiell Katalog",
    "الكاتالوج المعتمد لعام 2026": "Officiell Katalog 2026",
    "أجهزة الكشف والتصوير 3D": "Detektor- & 3D-bildsystem",
    "أجهزة الكشف الجيوفيزيائية والماسحات 3D": "Geofysiska Detektorer & 3D-skannrar",
    "السجل والوثائق التجارية المعتمدة": "Officiella Registreringsbevis & Dokument",
    "الضمانات والوثائق": "Garantier & Certifikat",

    // Card Categories & Badges
    "كاشفات النبض الكهرومغناطيسي (PI)": "Elektromagnetiska Pulsdetektorer (PI)",
    "كواشف النبض الكهرومغناطيسي (PI)": "Elektromagnetiska Pulsdetektorer (PI)",
    "ماسحات ضوئية 3D متقدمة": "Avancerade 3D-skannrar",
    "ماسحات 3D متقدمة": "Avancerade 3D-skannrar",
    "ماسح ضوئي 3D متقدم": "Avancerad 3D-skanner",
    "ماسح 3D متقدم": "Avancerad 3D-skanner",
    "رادارات اختراق الأرض (GPR)": "Markpenetrerande Radar (GPR)",
    "كواشف المياه الجوفية": "Grundvatten- & Brunnsdetektorsystem",
    "أنظمة كشف المياه والآبار": "Grundvatten- & Brunnsdetektorsystem",
    "أنظمة التسجيل والتحليل": "Loggnings- & Analyssystem",

    "الأكثر طلباً 🌟": "Bästsäljare 🌟",
    "أعماق 12m 🚀": "12m Djup 🚀",
    "مياه وآبار 💧": "Vatten & Brunnar 💧",
    "ماسح 3D": "3D-skanner",
    "الأشهر 🔥": "Mest Populär 🔥",
    "PRO 🏆": "PRO 🏆",
    "مسجّل 3D": "3D-logger",
    "مسجّل 3D 📡": "3D-logger 📡",

    // Card Product Titles & Descriptions
    "جهاز GS9000": "GS9000 Enhet",
    "جهاز GS Iridium 3D": "GS Iridium 3D Enhet",
    "جهاز GPR Radar": "GPR Radar Enhet",
    "جهاز كشف المياه والآبار": "Vatten- & Brunnsdetektor",
    "GS data_logger": "GS Data Logger Enhet",
    "جهاز data_logger": "GS Data Logger Enhet",
    "البحث عن الكنوز والتجاويف والأنفاق — مع تطبيق GS_MAGNOVA": "Skattejakt, Håligheter & Tunnlar — Med GS MAGNOVA-app",
    "البحث عن الكنوز والتجاويف والانفاق — مع تطبيق GS_MAGNOVA": "Skattejakt, Håligheter & Tunnlar — Med GS MAGNOVA-app",
    "الذهب والكنوز والآثار — Magnetometer + Mineral Scan": "Guld, Skatter & Antikviteter — Magnetometer + Mineral Scan",
    "المنظومة الكاملة للمحترفين — جميع أوضاع الكشف": "Komplett Professionellt System — Alla Detektionslägen",
    "يحوّل الإشارات الصوتية إلى صورة 3D مع تطبيق GS MAGNOVA": "Omvandlar Ljudsignaler till 3D-bild med GS MAGNOVA-app",
    "تطبيق مجاني GS MAGNOLITE": "Gratis App GS MAGNOLITE",
    "السعر: 30 يورو": "Pris: 30 €",
    "السعر: مجاني 🎁": "Pris: Gratis 🎁",
    "للتفعيل اضغط هنا": "Klicka här för aktivering",
    "تحميل التطبيق من متجر Google Play": "Ladda ned appen på Google Play Store",
    "تحميل ملف التثبيت (Setup.exe)": "Ladda ner installation (Setup.exe)",
    "طلب تفعيل البرنامج (Visualizer 3D Studio)": "Begär aktiveringskod (Visualizer 3D Studio)",

    // Contact Us Page (contact.html)
    "تواصل مع فريقنا": "Kontakta Vårt Team",
    "نحن هنا للإجابة عن كافة استفساراتك حول أجهزتنا. تواصل معنا عبر أي من قنوات التواصل التالية.": "Vi finns här för att svara på alla dina frågor om våra detektorer.",
    "المقر الرئيسي": "Huvudkontor",
    "GOLDEN SENSITIVITY AB<br>BREDGRÄND 15<br>753 20 UPPSALA (السويد)": "GOLDEN SENSITIVITY AB<br>BREDGRÄND 15<br>753 20 UPPSALA (Sverige)",
    "رقم ضريبة القيمة المضافة (Momsreg.nr / VAT-nr):": "Momsregistreringsnummer (Momsreg.nr / VAT-nr):",
    "رقم الاتصال المباشر": "Direkttelefon",
    "واتساب مباشر": "Direkt WhatsApp",
    "فتح محادثة الواتساب ←": "Öppna WhatsApp-chatt ←",
    "فتح محادثة الواتساب": "Öppna WhatsApp-chatt",
    "البريد الإلكتروني": "E-postadress",
    "قناة اليوتيوب": "YouTube-kanal",
    "مجموعة الفيسبوك الرسمية": "Officiell Facebook-grupp",
    "Golden Sens — انضم للمجموعة ←": "Golden Sens — Gå med i gruppen ←",
    "انضم للمجموعة ←": "Gå med i gruppen ←",
    "قناة التلجرام الرسمية": "Officiell Telegram-kanal",
    "Golden Sens — قناة التلجرام": "Golden Sens — Telegram-kanal",
    "قناة التلجرام": "Telegram-kanal",
    "أرسل لنا رسالة": "Skicka ett meddelande",
    "رقم هاتفك": "Ditt telefonnummer",
    "أدخل رقم هاتفك للرد عليك": "Ange ditt telefonnummer",
    "بريدك الإلكتروني (اختياري)": "Din e-postadress (valfritt)",
    "رسالتك": "Ditt meddelande",
    "اكتب استفسارك أو طلبك هنا...": "Skriv din fråga eller begäran här...",
    "إرسال الرسالة": "Skicka meddelande",
    "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.": "Ditt meddelande har skickats! Vi kontaktar dig snart.",

    // About Us Page (about.html)
    "التعريف بالشركة والاعتماد": "Företagsöversikt & Certifiering",
    "من نحن - شركة Golden Sensitivity AB السويدية": "Om Oss - Golden Sensitivity AB Sverige",
    "من نحن - شركة Golden Sens السويدية": "Om Oss - Golden Sensitivity AB Sverige",
    "المقر الرئيسي والتصنيع": "Huvudkontor & Tillverkning",
    "<i class=\"fas fa-building\"></i> المقر الرئيسي والتصنيع": "<i class=\"fas fa-building\"></i> Huvudkontor &amp; Tillverkning",
    "نبذة عن الشركة": "Företagsprofil",
    "الرؤية المستقبلية": "Framtidsvision",
    "<i class=\"fas fa-eye\"></i> الرؤية المستقبلية": "<i class=\"fas fa-eye\"></i> Framtidsvision",
    "Golden Sensitivity AB هي شركة سويدية متخصصة في بناء وتطوير أجهزة كشف المعادن والماسحات الجيوفيزيائية ثلاثية الأبعاد وأنظمة الحماية.": "Golden Sensitivity AB är ett svenskt företag specialiserat på utveckling av 3D geofysiska metalldetektorer och säkerhetssystem.",
    "الرؤية المستقبلية لشركة Golden Sensitivity AB هي قيادة الابتكار العالمي في أجهزة الحث النبضي والرادارات الأرضية، وتطوير معالجات رقمية فائقة الذكاء قادرة على التغلغل في الطبقات الصخرية العميقة وتسهيل عمليات التنقيب والاستكشاف بدقة متناهية.": "Golden Sensitivity ABs framtidsvision är att leda den globala innovationen inom pulsinduktionsenheter och markradarsystem, samt utveckla supersmarta digitala processorer för djup markpenetration.",
    "المقر الرئيسي والشركة": "Huvudkontor & Företag",
    "(السويد)": "(Sverige)",
    "مقر الشركة (Uppsala)": "Företagets Huvudkontor (Uppsala)",
    "عرض صورة مقر الشركة بالكامل": "Visa Hela Huvudkontorsbilden",
    "شهادة الاعتماد والرسمية لشركة Golden Sens السويدية": "Officiellt Registreringsbevis för Golden Sens Sverige",
    "شهادة الاعتماد والسجل التجاري الرسمي لشركة Golden Sens": "Officiellt Registreringsbevis för Golden Sens Sverige",

    // Learn Page (learn.html)
    "دروس واختبارات الأجهزة الميدانية": "Fältlektioner & Enhetstester",
    "شروحات وفيديوهات التدريب الميداني المعتمدة": "Godkända Fältguider & Utbildningsvideor",
    "قناة Golden Sensitivity الرسمية على اليوتيوب": "Officiell Golden Sensitivity YouTube-kanal",
    "تابع الشروحات الميدانية الحصرية، طرق معايرة الأجهزة، وتجارب الكشف ثلاثي الأبعاد مباشرة خطوة بخطوة.": "Följ exklusiva fältguider, kalibreringsmetoder och 3D-tester steg för steg.",
    "أكاديمية التدريب الميداني": "Fältutbildningsakademi",
    "قائمة الدروس والتجارب الميدانية المرتبة": "Lista över Fältlektioner & Demos",
    "الدرس الأول — المبادئ الأساسية": "Lektion 1 — Grundläggande Principer",
    "طريقة تجميع وتشغيل جهاز حث نبضي": "Montering och Användning av Pulsinduktionsenhet",
    "شرح خطوات تركيبة الأجزاء، ربط طبق البحث، وتشغيل الوحدة الرئيسية لأول مرة بطريقة صحيحة.": "Förklaring av montering, sökspole och första start.",
    "مشاهدة الدرس على يوتيوب ←": "Se Lektionen på YouTube ←",
    "مشاهدة الدرس على يوتيوب": "Se Lektionen på YouTube",
    "الدرس الثاني — المعايرة الميدانية": "Lektion 2 — Fältkalibrering",
    "موازنة التربة وعزل الصخور البازلتية والمعدنية": "Markbalans & Basalt/Mineralisering",
    "طريقة ضبط الحساسية وعزل الإشارات الكاذبة الناتجة عن تمعدن التربة والجبال الصخرية.": "Hur man justerar känslighet och isolerar falska signaler.",
    "الدرس الثالث — قياس الأعماق": "Lektion 3 — Djupmätning",
    "طريقة تحديد عمق وحجم الأهداف والكنوز الدفينة": "Hur man bestämmer djup och storlek på begravda skatter",
    "كيفية حساب العمق بالمتر وقراءة الترددات الصادرة من المعادن الثمينة تحت الأرض.": "Hur man beräknar djup i meter och läser av frekvenser.",
    "الدليل الميداني الرسمي": "Officiell Fältguide",
    "GS_Iridium دليل الاستخدام": "GS Iridium Användarmanual",
    "الكتالوج والكتيب الميداني المعتمد الشامل لخطوات تشغيل ومعايرة جهاز GS Iridium 3D وضبط الإعدادات.": "Officiell fälthandbok för användning och kalibrering av GS Iridium 3D.",
    "تحميل دليل الاستخدام (PDF)": "Ladda ner användarmanual (PDF)",
    "<i class=\"fas fa-download\"></i> تحميل دليل الاستخدام (PDF)": "<i class=\"fas fa-download\"></i> Ladda ner användarmanual (PDF)",

    // Software Page (programs.html)
    "البرمجيات الجيوفيزيائية المعتمدة": "Godkänd Geofysisk Programvara",
    "برامج وتطبيقات Golden Sens على متجر Google Play": "Golden Sens Programvara & Appar på Google Play Store",
    "أنظمة تحليل تصويرية احترافية ثلاثية الأبعاد تمكنك من معالجة بيانات الكشف ورسم الخرائط الحرارية وتحديد نوع المعدن والعمق بدقة عالية.": "Professionella 3D-analyssystem för databehandling och värmekartor.",
    "Google Play Official App": "Officiell App på Google Play",
    "التطبيق المعتمد للمسح المغناطيسي والتصوير الجيوفيزيائي ثلاثي الأبعاد وعرض الخرائط الحرارية المباشرة للأرض والمباني والجدران.": "Godkänd app för magnetisk skanning och 3D geofysisk bildgivning.",
    "تطبيق مجاني GS MAGNOLITE": "Gratis App GS MAGNOLITE",
    "تطبيق المسح والتحليل المجاني السريع عبر البلوتوث لعرض البيانات الجيوفيزيائية الأساسية وتحليل التربة ميدانياً.": "Snabb gratis Bluetooth-app för grundläggande geofysisk data.",

    // Specs Labels & Quantities
    "العمق الأقصى:": "Max djup:",
    "عمق الكشف:": "Detektionsdjup:",
    "الضمان:": "Garanti:",
    "الوضع:": "Läge:",
    "التقنية:": "Teknologi:",
    "الاتصال:": "Anslutning:",
    "المستوى:": "Nivå:",
    "التطبيق:": "App:",
    "المحتويات:": "Innehåll:",
    "3 متراً": "3 Meter",
    "6 متراً": "6 Meter",
    "12 متراً": "12 Meter",
    "100 متر": "100 Meter",
    "12 م": "12 m",
    "8 م": "8 m",
    "2 سنوات": "2 År",

    // Buttons & Badges
    "عرض التفاصيل": "Visa Detaljer",
    "الاستفسار والطلب الفوري عبر الواتساب": "Snabbförfrågan & Beställning via WhatsApp",
    "تحميل GS_Iridium دليل الاستخدام (PDF)": "Ladda ner GS Iridium Användarmanual (PDF)",
    "تحميل التطبيق من متجر Google Play": "Ladda ner appen från Google Play Store",
    "زيارة القناة والاشتراك 🔔": "Besök kanalen & prenumerera 🔔",
    "المواصفات الفنية والتقنية:": "Tekniska Specifikationer:",
    "SWEDISH TECHNOLOGY - GOLDEN SENS": "SVENSK TEKNOLOGI - GOLDEN SENS",
    "مطابقة الجودة الأوروبية": "Europeisk CE-Kvalitetscertifierad",
    "شهادة الجودة العالمية": "Internationell ISO 9001:2015-Certifierad",
    "تكنولوجيا سويدية معتمدة": "Certifierad Svensk Teknologi",
    "اعتماد TÜV Rheinland": "TÜV Rheinland-Godkänd",
    "معيار البيئة الأوروبي": "RoHS Miljöanpassad"
  },
  tr: {
    // Navigation & Header
    "الكاشفات": "Dedektörler",
    "من نحن": "Hakkımızda",
    "البرامج": "Yazılımlar",
    "تعلم": "Öğren",
    "الخدمة والدعم": "Hizmet ve Destek",
    "الموزعين": "Bayilerimiz",
    "اتصل بنا": "İletişim",
    "كواشف المعادن والماسحات 3D": "Metal Dedektörleri ve 3D Taramalar",

    // Footer & Common
    "روابط سريعة": "Hızlı Bağlantılar",
    "فئات الأجهزة": "Cihaz Kategorileri",
    "التواصل والمقر": "İletişim ve Konum",
    "معلومات التواصل": "İletişim Bilgileri",
    "الحث النبضي (PI)": "Darbe İndüksiyonu (PI)",
    "ماسحات ضوئية 3D": "3D Taramalar",
    "<i class=\"fas fa-map-marker-alt\" style=\"color:var(--primary-gold);\"></i> <span>المقر: GOLDEN SENSITIVITY AB, BREDGRÄND 15, 753 20 UPPSALA (السويد)</span>": "<i class=\"fas fa-map-marker-alt\" style=\"color:var(--primary-gold);\"></i> <span>Merkez: GOLDEN SENSITIVITY AB, BREDGRÄND 15, 753 20 UPPSALA (İsveç)</span>",
    "المقر: GOLDEN SENSITIVITY AB, BREDGRÄND 15, 753 20 UPPSALA (السويد)": "Merkez: GOLDEN SENSITIVITY AB, BREDGRÄND 15, 753 20 UPPSALA (İsveç)",
    "GOLDEN SENSITIVITY AB<br>BREDGRÄND 15<br>753 20 UPPSALA (السويد)": "GOLDEN SENSITIVITY AB<br>BREDGRÄND 15<br>753 20 UPPSALA (İsveç)",
    "رادارات الأرض GPR": "GPR Yer Radarları",
    "كواشف المياه والآبار": "Su ve Kuyu Dedektörleri",
    "تعلم (يوتيوب)": "Öğren (YouTube)",
    "الاتصال: +4670 739 06 16": "Ara: +46 70 739 06 16",
    "الواتساب الرسمي": "Resmi WhatsApp",
    "<i class=\"fab fa-whatsapp\"></i> الواتساب الرسمي": "<i class=\"fab fa-whatsapp\"></i> Resmi WhatsApp",
    "شركة سويدية متخصصة في بناء وتطوير أجهزة كشف المعادن والماسحات الجيوفيزيائية ثلاثية الأبعاد. وانظمه الحمايه": "3D jeofiziksel metal dedektörleri ve güvenlik sistemleri geliştiren İsveçli şirket.",
    "شركة سويدية متخصصة في بناء وتطوير أجهزة كشف المعادن والماسحات الجيوفيزيائية ثلاثية الأبعاد. وانظمه الحمايه.": "3D jeofiziksel metal dedektörleri ve güvenlik sistemleri geliştiren İsveçli şirket.",
    "Golden Sens هي شركة سويدية متخصصة في بناء وتطوير أجهزة كشف المعادن والماسحات الجيوفيزيائية ثلاثية الأبعاد. وانظمه الحمايه.": "Golden Sens, 3D jeofiziksel metal dedektörleri ve güvenlik sistemleri geliştirmede uzmanlaşmış İsveçli bir şirkettir.",
    "© 2026 Golden Sensitivity AB - جميع الحقوق محفوظة لشركة Golden Sensitivity AB السويدية.": "© 2026 Golden Sensitivity AB - Tüm hakları Golden Sensitivity AB İsveç'e aittir.",

    // Section Headers & Catalog Subtitles
    "الكاتالوج المعتمد": "Resmi Katalog",
    "الكاتالوج المعتمد لعام 2026": "Resmi 2026 Kataloğu",
    "أجهزة الكشف والتصوير 3D": "3D Tespit ve Görüntüleme Cihazları",
    "أجهزة الكشف الجيوفيزيائية والماسحات 3D": "Jeofiziksel Dedektörler ve 3D Taramalar",
    "السجل والوثائق التجارية المعتمدة": "Onaylı Ticari Belgeler ve Sertifikalar",
    "الضمانات والوثائق": "Garantiler ve Sertifikalar",

    // Card Categories & Badges
    "كاشفات النبض الكهرومغناطيسي (PI)": "Elektromanyetik Darbe Dedektörleri (PI)",
    "كواشف النبض الكهرومغناطيسي (PI)": "Elektromanyetik Darbe Dedektörleri (PI)",
    "ماسحات ضوئية 3D متقدمة": "Gelişmiş 3D Taramalar",
    "ماسحات 3D متقدمة": "Gelişmiş 3D Taramalar",
    "ماسح ضوئي 3D متقدم": "Gelişmiş 3D Tarama",
    "ماسح 3D متقدم": "Gelişmiş 3D Tarama",
    "رادارات اختراق الأرض (GPR)": "Yere Nüfuz Eden Radarlar (GPR)",
    "كواشف المياه الجوفية": "Yeraltı Suyu ve Kuyu Tespit Sistemleri",
    "أنظمة كشف المياه والآبار": "Yeraltı Suyu ve Kuyu Tespit Sistemleri",
    "أنظمة التسجيل والتحليل": "Kayıt ve Analiz Sistemleri",

    "الأكثر طلباً 🌟": "En Çok Satan 🌟",
    "أعماق 12m 🚀": "12m Derinlik 🚀",
    "مياه وآبار 💧": "Su ve Kuyular 💧",
    "ماسح 3D": "3D Tarama",
    "الأشهر 🔥": "En Popüler 🔥",
    "PRO 🏆": "PRO 🏆",
    "مسجّل 3D": "3D Kaydedici",
    "مسجّل 3D 📡": "3D Kaydedici 📡",

    // Card Product Titles & Descriptions
    "جهاز GS9000": "GS9000 Cihazı",
    "جهاز GS Iridium 3D": "GS Iridium 3D Cihazı",
    "جهاز GPR Radar": "GPR Radar Cihazı",
    "جهاز كشف المياه والآبار": "Su ve Kuyu Dedektörü",
    "GS data_logger": "GS Data Logger Cihazı",
    "جهاز data_logger": "GS Data Logger Cihazı",
    "البحث عن الكنوز والتجاويف والأنفاق — مع تطبيق GS_MAGNOVA": "Define, Hobi ve Tünel Tespiti — GS MAGNOVA Uygulaması ile",
    "البحث عن الكنوز والتجاويف والانفاق — مع تطبيق GS_MAGNOVA": "Define, Hobi ve Tünel Tespiti — GS MAGNOVA Uygulaması ile",
    "الذهب والكنوز والآثار — Magnetometer + Mineral Scan": "Altın, Define ve Eserler — Magnetometer + Mineral Scan",
    "المنظومة الكاملة للمحترفين — جميع أوضاع الكشف": "Profesyoneller İçin Tam Sistem — Tüm Tespit Modları",
    "يحوّل الإشارات الصوتية إلى صورة 3D مع تطبيق GS MAGNOVA": "GS MAGNOVA Uygulaması ile Ses Sinyallerini 3D Görüntüye Dönüştürür",

    // Contact Us Page (contact.html)
    "تواصل مع فريقنا": "Ekibimizle İletişime Geçin",
    "نحن هنا للإجابة عن كافة استفساراتك حول أجهزتنا. تواصل معنا عبر أي من قنوات التواصل التالية.": "Cihazlarımız hakkındaki tüm sorularınızı yanıtlamak için buradayız.",
    "المقر الرئيسي": "Genel Merkez",
    "GOLDEN SENSITIVITY AB<br>BREDGRÄND 15<br>753 20 UPPSALA (السويد)": "GOLDEN SENSITIVITY AB<br>BREDGRÄND 15<br>753 20 UPPSALA (İsveç)",
    "رقم ضريبة القيمة المضافة (Momsreg.nr / VAT-nr):": "KDV Kayıt Numarası (Momsreg.nr / VAT-nr):",
    "رقم الاتصال المباشر": "Direkt Telefon",
    "واتساب مباشر": "Direkt WhatsApp",
    "فتح محادثة الواتساب ←": "WhatsApp Sohbeti Aç ←",
    "فتح محادثة الواتساب": "WhatsApp Sohbeti Aç",
    "تطبيق مجاني GS MAGNOLITE": "Ücretsiz Uygulama GS MAGNOLITE",
    "السعر: 30 يورو": "Fiyat: 30 €",
    "السعر: مجاني 🎁": "Fiyat: Ücretsiz 🎁",
    "للتفعيل اضغط هنا": "Etkinleştirmek İçin Buraya Tıklayın",
    "تحميل التطبيق من متجر Google Play": "Google Play Mağazasında Uygulamayı İndir",
    "تحميل ملف التثبيت (Setup.exe)": "Kurulum Dosyasını İndir (Setup.exe)",
    "طلب تفعيل البرنامج (Visualizer 3D Studio)": "Etkinleştirme Anahtarı İsteyin (Visualizer 3D Studio)",
    "البريد الإلكتروني": "E-posta Adresi",
    "قناة اليوتيوب": "YouTube Kanalı",
    "مجموعة الفيسبوك الرسمية": "Resmi Facebook Grubu",
    "Golden Sens — انضم للمجموعة ←": "Golden Sens — Gruba Katıl ←",
    "انضم للمجموعة ←": "Gruba Katıl ←",
    "قناة التلجرام الرسمية": "Resmi Telegram Kanalı",
    "Golden Sens — قناة التلجرام": "Golden Sens — Telegram Kanalı",
    "قناة التلجرام": "Telegram Kanalı",
    "أرسل لنا رسالة": "Bize Mesaj Gönderin",
    "رقم هاتفك": "Telefon Numaranız",
    "أدخل رقم هاتفك للرد عليك": "Telefon numaranızı girin",
    "بريدك الإلكتروني (اختياري)": "E-posta Adresiniz (İsteğe Bağlı)",
    "رسالتك": "Mesajınız",
    "اكتب استفسارك أو طلبك هنا...": "Sorunuzu veya talebinizi buraya yazın...",
    "إرسال الرسالة": "Mesajı Gönder",
    "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.": "Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.",

    // About Us Page (about.html)
    "التعريف بالشركة والاعتماد": "Şirket Genel Bakışı ve Sertifikasyon",
    "من نحن - شركة Golden Sensitivity AB السويدية": "Hakkımızda - Golden Sensitivity AB İsveç",
    "من نحن - شركة Golden Sens السويدية": "Hakkımızda - Golden Sensitivity AB İsveç",
    "المقر الرئيسي والتصنيع": "Genel Merkez ve Üretim",
    "<i class=\"fas fa-building\"></i> المقر الرئيسي والتصنيع": "<i class=\"fas fa-building\"></i> Genel Merkez ve Üretim",
    "نبذة عن الشركة": "Şirket Profili",
    "الرؤية المستقبلية": "Gelecek Vizyonu",
    "<i class=\"fas fa-eye\"></i> الرؤية المستقبلية": "<i class=\"fas fa-eye\"></i> Gelecek Vizyonu",
    "Golden Sensitivity AB هي شركة سويدية متخصصة في بناء وتطوير أجهزة كشف المعادن والماسحات الجيوفيزيائية ثلاثية الأبعاد وأنظمة الحماية.": "Golden Sensitivity AB, 3D jeofiziksel metal dedektörleri ve güvenlik sistemleri geliştirmede uzmanlaşmış İsveçli bir şirkettir.",
    "الرؤية المستقبلية لشركة Golden Sensitivity AB هي قيادة الابتكار العالمي في أجهزة الحث النبضي والرادارات الأرضية، وتطوير معالجات رقمية فائقة الذكاء قادرة على التغلغل في الطبقات الصخرية العميقة وتسهيل عمليات التنقيب والاستكشاف بدقة متناهية.": "Golden Sensitivity AB'nin gelecek vizyonu, darbe indüksiyon cihazlarında ve yer radarlarında küresel yeniliğe liderlik etmektir.",
    "المقر الرئيسي والشركة": "Genel Merkez ve Şirket",
    "(السويد)": "(İsveç)",
    "مقر الشركة (Uppsala)": "Şirket Merkez Binası (Uppsala)",
    "عرض صورة مقر الشركة بالكامل": "Şirket Merkez Resmini Büyüt",
    "شهادة الاعتماد والرسمية لشركة Golden Sens السويدية": "Golden Sens İsveç Resmi Ticaret Kayıt Sertifikası",
    "شهادة الاعتماد والسجل التجاري الرسمي لشركة Golden Sens": "Golden Sens İsveç Resmi Ticaret Kayıt Sertifikası",

    // Learn Page (learn.html)
    "دروس واختبارات الأجهزة الميدانية": "Saha Dersleri ve Cihaz Testleri",
    "شروحات وفيديوهات التدريب الميداني المعتمدة": "Onaylı Saha Rehberleri ve Eğitim Videoları",
    "قناة Golden Sensitivity الرسمية على اليوتيوب": "Resmi Golden Sensitivity YouTube Kanalı",
    "تابع الشروحات الميدانية الحصرية، طرق معايرة الأجهزة، وتجارب الكشف ثلاثي الأبعاد مباشرة خطوة بخطوة.": "Özel saha rehberlerini, kalibrasyon yöntemlerini ve adım adım 3D tespit testlerini izleyin.",
    "أكاديمية التدريب الميداني": "Saha Eğitim Akademisi",
    "قائمة الدروس والتجارب الميدانية المرتبة": "Saha Dersleri ve Gösterim Listesi",
    "الدرس الأول — المبادئ الأساسية": "Ders 1 — Temel İlkeler",
    "طريقة تجميع وتشغيل جهاز حث نبضي": "Darbe İndüksiyon Cihazının Montajı ve Çalıştırılması",
    "شرح خطوات تركيبة الأجزاء، ربط طبق البحث، وتشغيل الوحدة الرئيسية لأول مرة بطريقة صحيحة.": "Montaj adımları, arama başlığı bağlantısı ve ilk çalıştırma açıklaması.",
    "مشاهدة الدرس على يوتيوب ←": "Dersi YouTube'da İzleyin ←",
    "مشاهدة الدرس على يوتيوب": "Dersi YouTube'da İzleyin",
    "الدرس الثاني — المعايرة الميدانية": "Ders 2 — Saha Kalibrasyonu",
    "موازنة التربة وعزل الصخور البازلتية والمعدنية": "Toprak Ayarı ve Bazalt/Mineral İzolasyonu",
    "طريقة ضبط الحساسية وعزل الإشارات الكاذبة الناتجة عن تمعدن التربة والجبال الصخرية.": "Hassasiyetin ayarlanması ve parazit sinyallerin izole edilmesi.",
    "الدرس الثالث — قياس الأعماق": "Ders 3 — Derinlik Ölçümü",
    "طريقة تحديد عمق وحجم الأهداف والكنوز الدفينة": "Gömülü definelerin derinliğini ve boyutunu belirleme yöntemi",
    "كيفية حساب العمق بالمتر وقراءة الترددات الصادرة من المعادن الثمينة تحت الأرض.": "Metre cinsinden derinlik hesabı ve frekans okuma.",
    "الدليل الميداني الرسمي": "Resmi Saha Rehberi",
    "GS_Iridium دليل الاستخدام": "GS Iridium Kullanım Kılavuzu",
    "الكتالوج والكتيب الميداني المعتمد الشامل لخطوات تشغيل ومعايرة جهاز GS Iridium 3D وضبط الإعدادات.": "GS Iridium 3D çalıştırma ve kalibrasyon adımlarını içeren resmi kılavuz.",
    "تحميل دليل الاستخدام (PDF)": "Kullanım Kılavuzunu İndir (PDF)",
    "<i class=\"fas fa-download\"></i> تحميل دليل الاستخدام (PDF)": "<i class=\"fas fa-download\"></i> Kullanım Kılavuzunu İndir (PDF)",

    // Software Page (programs.html)
    "البرمجيات الجيوفيزيائية المعتمدة": "Onaylı Jeofizik Yazılımları",
    "برامج وتطبيقات Golden Sens على متجر Google Play": "Google Play Store'da Golden Sens Yazılım ve Uygulamaları",
    "أنظمة تحليل تصويرية احترافية ثلاثية الأبعاد تمكنك من معالجة بيانات الكشف ورسم الخرائط الحرارية وتحديد نوع المعدن والعمق بدقة عالية.": "Tespit verilerini işleme ve ısı haritaları oluşturma profesyonel 3D analiz sistemleri.",
    "Google Play Official App": "Google Play Resmi Uygulaması",
    "التطبيق المعتمد للمسح المغناطيسي والتصوير الجيوفيزيائي ثلاثي الأبعاد وعرض الخرائط الحرارية المباشرة للأرض والمباني والجدران.": "Manyetik tarama ve 3D jeofiziksel görüntüleme için onaylı uygulama.",
    "تطبيق مجاني GS MAGNOLITE": "Ücretsiz Uygulama GS MAGNOLITE",
    "تطبيق المسح والتحليل المجاني السريع عبر البلوتوث لعرض البيانات الجيوفيزيائية الأساسية وتحليل التربة ميدانياً.": "Temel jeofizik verileri görüntülemek için hızlı ücretsiz Bluetooth uygulaması.",

    // Specs Labels & Quantities
    "العمق الأقصى:": "Maks Derinlik:",
    "عمق الكشف:": "Tespit Derinliği:",
    "الضمان:": "Garanti:",
    "الوضع:": "Mod:",
    "التقنية:": "Teknoloji:",
    "الاتصال:": "Bağlantı:",
    "المستوى:": "Seviye:",
    "التطبيق:": "Uygulama:",
    "المحتويات:": "İçerik:",
    "3 متراً": "3 Metre",
    "6 متراً": "6 Metre",
    "12 متراً": "12 Metre",
    "100 متر": "100 Metre",
    "12 م": "12 m",
    "8 م": "8 m",
    "2 سنوات": "2 Yıl",

    // Buttons & Badges
    "عرض التفاصيل": "Detayları Göster",
    "الاستفسار والطلب الفوري عبر الواتساب": "WhatsApp ile Anında Bilgi ve Sipariş",
    "تحميل GS_Iridium دليل الاستخدام (PDF)": "GS Iridium Kullanım Kılavuzunu İndir (PDF)",
    "تحميل التطبيق من متجر Google Play": "Uygulamayı Google Play Store'dan İndirin",
    "زيارة القناة والاشتراك 🔔": "Kanalı Ziyaret Et & Abone Ol 🔔",
    "المواصفات الفنية والتقنية:": "Teknik Özellikler:",
    "SWEDISH TECHNOLOGY - GOLDEN SENS": "İSVEÇ TEKNOLOJİSİ - GOLDEN SENS",
    "مطابقة الجودة الأوروبية": "Avrupa CE Kalite Standartlarına Uygun",
    "شهادة الجودة العالمية": "Uluslararası ISO 9001:2015 Sertifikalı",
    "تكنولوجيا سويدية معتمدة": "Sertifikalı İsveç Teknolojisi",
    "اعتماد TÜV Rheinland": "TÜV Rheinland Onaylı",
    "معيار البيئة الأوروبي": "RoHS Çevre Standartlarına Uygun"
  }
};

function translateDOM(lang) {
  const map = textReplacements[lang];

  const targetSelectors = [
    'h1', 'h2', 'h3', 'h4', 'h5', 'p', 'label', 'button', 'a', 'span', 'strong',
    '.nav-link', '.product-category', '.product-title', '.spec-mini-item span',
    '.spec-mini-item strong', '.card-badge', '.btn-view-details', '.section-title',
    '.section-subtitle', '.product-body p', '#productDetailTitle', '#productDetailSubtitle',
    '#productSpecsList li', '#whatsappBtn', '#iridiumManualBtn',
    '.footer-brand p', '.footer-title', '.footer-links a', '.lesson-number', '.lesson-title',
    '.lesson-desc', '.btn-download-pdf', '#badgeTag', '.eu-badge-info strong', '.eu-badge-info span',
    '.placeholder-text-box strong', '.footer-bottom p', '.brand-sub'
  ];

  document.querySelectorAll(targetSelectors.join(',')).forEach(el => {
    if (!el.hasAttribute('data-original-html')) {
      el.setAttribute('data-original-html', el.innerHTML.trim());
    }

    if (lang === 'ar') {
      el.innerHTML = el.getAttribute('data-original-html');
      return;
    }

    if (!map) return;

    const origHTML = el.getAttribute('data-original-html');
    const textOnly = el.textContent.trim();
    const icon = el.querySelector('i');

    // 1. Direct exact match on full innerHTML (e.g. full <li> spec item)
    if (map[origHTML]) {
      el.innerHTML = map[origHTML];
      return;
    }

    // 2. Direct match on normalized innerHTML (without &amp;)
    const normalizedHTML = origHTML.replace(/&amp;/g, '&');
    if (map[normalizedHTML]) {
      el.innerHTML = map[normalizedHTML];
      return;
    }

    // 3. Direct exact match on textContent
    if (map[textOnly]) {
      if (icon) {
        el.innerHTML = icon.outerHTML + ' ' + map[textOnly];
      } else {
        el.textContent = map[textOnly];
      }
      return;
    }

    // 4. Do NOT perform partial substring replacements on LI elements to avoid mixed text
    if (el.tagName === 'LI') {
      return;
    }

    // 5. Substring replacement for non-LI container elements (Longer phrases matched first)
    let updatedHTML = origHTML;
    let replaced = false;
    const sortedKeys = Object.keys(map).sort((a, b) => b.length - a.length);
    for (const key of sortedKeys) {
      if (key.length > 2 && updatedHTML.includes(key)) {
        updatedHTML = updatedHTML.split(key).join(map[key]);
        replaced = true;
      }
    }
    if (replaced) {
      el.innerHTML = updatedHTML;
    }
  });

  // Translate input and textarea placeholders
  document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(input => {
    if (!input.hasAttribute('data-original-placeholder')) {
      input.setAttribute('data-original-placeholder', input.getAttribute('placeholder').trim());
    }
    const orig = input.getAttribute('data-original-placeholder');
    if (lang === 'ar') {
      input.setAttribute('placeholder', orig);
    } else if (map && map[orig]) {
      input.setAttribute('placeholder', map[orig]);
    }
  });
}

const langFlagMap = {
  ar: { flag: 'flags/palestine.svg', name: 'العربية (AR)', alt: 'فلسطين' },
  en: { flag: 'flags/uk.svg', name: 'English (EN)', alt: 'بريطانيا' },
  sv: { flag: 'flags/sweden.svg', name: 'Svenska (SV)', alt: 'السويد' },
  tr: { flag: 'flags/turkey.svg', name: 'Türkçe (TR)', alt: 'تركيا' }
};

function updateCustomLangUI(lang) {
  const data = langFlagMap[lang] || langFlagMap.ar;
  document.querySelectorAll('.custom-lang-dropdown').forEach(dropdown => {
    const flagImg = dropdown.querySelector('.lang-dropdown-btn .lang-flag-img');
    const textSpan = dropdown.querySelector('.lang-dropdown-btn .lang-text');
    if (flagImg) {
      flagImg.src = data.flag;
      flagImg.alt = data.alt;
    }
    if (textSpan) {
      textSpan.textContent = data.name;
    }
    dropdown.querySelectorAll('.lang-option').forEach(opt => {
      if (opt.getAttribute('data-lang') === lang) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });
  });
}

function applyLanguage(lang) {
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', lang);

  translateDOM(lang);

  document.querySelectorAll('.language-selector').forEach(selectEl => {
    selectEl.value = lang;
  });

  updateCustomLangUI(lang);

  localStorage.setItem('gs_lang', lang);
}

function initCustomLangDropdown() {
  document.querySelectorAll('.custom-lang-dropdown').forEach(dropdown => {
    const btn = dropdown.querySelector('.lang-dropdown-btn');
    if (!btn) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('open');
      document.querySelectorAll('.custom-lang-dropdown.open').forEach(d => d.classList.remove('open'));
      if (!isOpen) {
        dropdown.classList.add('open');
      }
    });

    dropdown.querySelectorAll('.lang-option').forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = option.getAttribute('data-lang');
        applyLanguage(selectedLang);
        dropdown.classList.remove('open');
      });
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.custom-lang-dropdown.open').forEach(d => {
      d.classList.remove('open');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initCustomLangDropdown();
  const saved = localStorage.getItem('gs_lang') || 'ar';
  applyLanguage(saved);

  document.querySelectorAll('.language-selector').forEach(sel => {
    sel.addEventListener('change', (e) => {
      applyLanguage(e.target.value);
    });
  });

  initViewerControls();
});

/* ----------------------------------------------------
   Interactive 360° Rotate & Zoom Controller Logic
   ---------------------------------------------------- */
function initViewerControls() {
  const img       = document.getElementById('interactiveDeviceImg');
  const stage     = document.getElementById('interactiveStage');
  const zoomSlider = document.getElementById('zoomSlider');

  if (!img || !stage) return;

  let currentRotation = 0;
  let currentZoom     = 1.0;
  let isDragging      = false;
  let startX          = 0;

  function updateTransform() {
    img.style.transform = `scale(${currentZoom}) rotate(${currentRotation}deg)`;
  }

  window.rotateLeft  = () => { currentRotation -= 15; updateTransform(); };
  window.rotateRight = () => { currentRotation += 15; updateTransform(); };
  window.resetView   = () => {
    currentRotation = 0;
    currentZoom = 1.0;
    if (zoomSlider) zoomSlider.value = 100;
    updateTransform();
  };

  if (zoomSlider) {
    zoomSlider.addEventListener('input', (e) => {
      currentZoom = parseFloat(e.target.value) / 100;
      updateTransform();
    });
  }

  stage.addEventListener('mousedown', (e) => { isDragging = true; startX = e.clientX; });
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    if (Math.abs(deltaX) > 5) {
      currentRotation += deltaX > 0 ? 3 : -3;
      startX = e.clientX;
      updateTransform();
    }
  });
  window.addEventListener('mouseup', () => { isDragging = false; });
}
