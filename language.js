const translations = {
    en: {
        "common.email": "Email",
        "common.code": "[Code]",
        "home.name": "Xinzhe Peng",
        "home.subtitle": "Statistics & Data Science, UC Santa Barbara",
        "home.about.title": "About",
        "home.about.body": "I'm a Statistics and Data Science graduate from <strong>UC Santa Barbara (GPA: 3.55/4.0)</strong>, currently working as a Research Assistant at Shenzhen University of Advanced Technology, focusing on clinical application of Large Language Models.",
        "home.researchInterest.title": "Research Interest",
        "home.researchInterest.body": "My current research interest: <br>1. boosting classical machine learning models through LLM ICL, especially in small-sample tabular learning tasks.<br>2. auto-generation of clinical notes and benchmarking",
        "home.ongoing.title": "Ongoing Research",
        "home.ongoing.body": "Guideline-Grounded LLMs for Scalable SOAP Report Generation develops and evaluates a two-stage retrieval-augmented LLM framework that generates evidence-grounded SOAP reports from structured annual physical examination data in a real-world hospital deployment.",
        "home.publications.title": "Publications",
        "home.publications.mediqa.title": "SUAT-BMI at MEDIQA EVAL 2026: An Ensemble Approach to Language Models as Judges for Automatic Rating of Medical Responses",
        "home.publications.mediqa.venue": "ACL Anthology Clinical Workshop",
        "home.projects.title": "Projects",
        "home.projects.report.title": "AI-Powered Medical Report Generation System(Deployed in Guangzhou Baiyun Hu Hospital )",
        "home.projects.report.tags": "Healthcare AI • Distributed Systems • LLM Application",
        "home.projects.report.summary": "A production-ready clinical documentation service combining large language models with retrieval-augmented generation for evidence-based medical reporting.",
        "home.projects.report.point1": "Built a hybrid inference pipeline with synchronous direct LLM responses for real-time queries, paired with asynchronous RAG-enhanced reports for comprehensive clinical documentation",
        "home.projects.report.point2": "Implemented a scalable job queue with robust task scheduling ensuring reliable report generation at scale with failure recovery and progress tracking",
        "home.projects.report.point3": "Integrated RAG with medical knowledge retrieval to enrich reports with authoritative citations and clinical guideline references",
        "home.projects.ecg.title": "ECG Signal Extraction with U-Net",
        "home.projects.ecg.tags": "Computer Vision • Medical Imaging • Deep Learning",
        "home.projects.ecg.dates": "Nov 2025 – Dec 2025",
        "home.projects.ecg.point1": "Preprocessed ECG images via homography transformation and geometric rectification to align coordinate systems across samples",
        "home.projects.ecg.point2": "Trained a U-Net model for semantic segmentation to accurately extract ECG waveform data",
        "home.projects.ecg.point3": "Optimized with cross-entropy loss; achieved a final SNR score of 16",
        "home.projects.parasite.title": "Parasite Detection with YOLOv8n & ResNet",
        "home.projects.parasite.tags": "Object Detection • Computer Vision • Classification",
        "home.projects.parasite.dates": "Nov 2025 – Dec 2025",
        "home.projects.parasite.point1": "Developed and trained multiple YOLOv8n models to detect 10+ parasite species and impurities",
        "home.projects.parasite.point2": "Integrated a ResNet classifier to distinguish true parasites from non-parasitic impurities in the final pipeline",
        "home.projects.parasite.point3": "Delivered a robust detection system with a test F1-score of 0.87",
        "home.projects.raman.title": "Solution Concentration Prediction via Raman Spectroscopy",
        "home.projects.raman.tags": "Signal Processing • Deep Learning • Regression",
        "home.projects.raman.dates": "Jun 2025 – Jul 2025",
        "home.projects.raman.point1": "Preprocessed multi-wavelength Raman spectral data using linear interpolation, max normalization, and Gaussian normalization",
        "home.projects.raman.point2": "Built a 1D CNN incorporating pooling layers, batch normalization, and neuron dropout for regression",
        "home.projects.raman.point3": "Enhanced model robustness via hyperparameter tuning and L2 regularization",
        "home.projects.raman.point4": "Attained a consistent R² score of 0.71 across training, validation, and test sets",
        "home.competitions.title": "Competitions",
        "home.competitions.mediqa.title": "MEDIQA EVAL-2026 Competition (1st Place)",
        "home.competitions.mediqa.tags": "NLP • Medical AI • LLM Evaluation",
        "home.competitions.mediqa.dates": "Jan 2026 – Feb 2026",
        "home.competitions.mediqa.point1": "Won 1st place out of 42 teams in the MEDIQA EVAL-2026 competition at the ACL Anthology Clinical NLP Workshop (hosted by Microsoft)",
        "home.competitions.mediqa.point2": "Task: Automatically rate LLM-generated medical responses given patient text and images",
        "home.competitions.mediqa.link": "[Official Leaderboard Link]",
        "home.skills.title": "Skills",
        "home.skills.statistics": "Statistical Analysis",
        "home.skills.finetuning": "finetuning LLMs",
        "home.piano.title": "As a Pianist",
        "home.piano.link": "View my repertoire",
        "home.contact.title": "Contact",
        "home.contact.location": "📍 Shenzhen, China",
        "home.contact.education": "🎓 UC Santa Barbara (B.S. Statistics & Data Science)",
        "piano.title": "Piano",
        "piano.back": "← Back to Home",
        "piano.teachers.title": "Teachers",
        "piano.teachers.paul": "<strong>2023 – 2025:</strong> Professor Paul Berkowitz, UC Santa Barbara",
        "piano.teachers.lin": "<strong>2025 – Present:</strong> Dr. Lin (DMA, University of Cincinnati)",
        "piano.current.title": "Current Repertoire",
        "piano.current.bachTitle": "Partita No. 5 in G Major",
        "piano.current.schubertTitle": "Impromptu D. 935 No. 3 in B-flat Major",
        "piano.past.title": "Past Repertoire (2024 – 2025)",
        "piano.past.wtcTitle": "The Well-Tempered Clavier, Book 1",
        "piano.past.wtcDetails": "Johann Sebastian Bach — D Major & C-sharp Major",
        "piano.past.mozartTitle": "Piano Sonata No. 12 in F Major, K. 332",
        "piano.past.haydnTitle": "Piano Sonata No. 20 in C Minor, Hob. XVI:20",
        "piano.past.schumannTitle": "Kinderszenen, Op. 15",
        "piano.past.momentsTitle": "Moments Musicaux, D. 780"
    },
    zh: {
        "common.email": "邮箱",
        "common.code": "[代码]",
        "home.name": "彭欣哲",
        "home.subtitle": "加州大学圣塔芭芭拉分校 统计与数据科学",
        "home.about.title": "关于我",
        "home.about.body": "我毕业于 <strong>加州大学圣塔芭芭拉分校统计与数据科学专业（GPA: 3.55/4.0）</strong>，目前在深圳理工大学担任科研助理，研究方向聚焦于大语言模型的临床应用。",
        "home.researchInterest.title": "研究兴趣",
        "home.researchInterest.body": "我目前的研究兴趣：<br>1. 通过大语言模型的上下文学习增强经典机器学习模型，尤其关注小样本表格学习任务。<br>2. 临床病历自动生成与评测基准。",
        "home.ongoing.title": "进行中的研究",
        "home.ongoing.body": "Guideline-Grounded LLMs for Scalable SOAP Report Generation 项目开发并评估了一个两阶段检索增强大语言模型框架，用于在真实医院部署场景中，基于结构化年度体检数据生成有证据支撑的 SOAP 报告。",
        "home.publications.title": "论文",
        "home.publications.mediqa.title": "SUAT-BMI at MEDIQA EVAL 2026: An Ensemble Approach to Language Models as Judges for Automatic Rating of Medical Responses",
        "home.publications.mediqa.venue": "ACL Anthology Clinical Workshop",
        "home.projects.title": "项目",
        "home.projects.report.title": "白云湖社区医院AI 医疗SOAP报告生成系统核心开发者(已在广州白云湖社区医院部署)",
        "home.projects.report.tags": "医疗 AI • 分布式系统 • 大语言模型应用",
        "home.projects.report.summary": "一个面向生产环境的临床文档服务，将大语言模型(Deepseek-V4)与检索增强生成结合，用于生成基于证据的医疗报告。",
        "home.projects.report.point1": "构建混合推理流程：实时查询使用同步直接大语言模型响应，综合临床文档使用异步 RAG 增强报告",
        "home.projects.report.point2": "实现可扩展任务队列与稳健调度机制，支持大规模可靠报告生成、失败恢复和进度跟踪",
        "home.projects.report.point3": "将 RAG 与医学知识检索集成，为报告补充权威引用和临床指南依据",
        "home.projects.ecg.title": "基于 U-Net 的心电信号提取",
        "home.projects.ecg.tags": "计算机视觉 • 医学影像 • 深度学习",
        "home.projects.ecg.dates": "2025 年 11 月 – 2025 年 12 月",
        "home.projects.ecg.point1": "通过单应性变换和几何校正预处理心电图图像，使不同样本的坐标系统对齐",
        "home.projects.ecg.point2": "训练 U-Net 语义分割模型，准确提取心电波形数据",
        "home.projects.ecg.point3": "使用交叉熵损失优化，最终 SNR 得分达到 16",
        "home.projects.parasite.title": "基于 YOLOv8n 与 ResNet 的寄生虫检测",
        "home.projects.parasite.tags": "目标检测 • 计算机视觉 • 分类",
        "home.projects.parasite.dates": "2025 年 11 月 – 2025 年 12 月",
        "home.projects.parasite.point1": "开发并训练多个 YOLOv8n 模型，用于检测 10 余种寄生虫及杂质",
        "home.projects.parasite.point2": "集成 ResNet 分类器，在最终流程中区分真实寄生虫与非寄生杂质",
        "home.projects.parasite.point3": "交付稳定检测系统，测试集 F1-score 达到 0.87",
        "home.projects.raman.title": "基于拉曼光谱的溶液浓度预测",
        "home.projects.raman.tags": "信号处理 • 深度学习 • 回归",
        "home.projects.raman.dates": "2025 年 6 月 – 2025 年 7 月",
        "home.projects.raman.point1": "使用线性插值、最大值归一化和高斯归一化预处理多波长拉曼光谱数据",
        "home.projects.raman.point2": "构建包含池化层、批归一化和神经元 dropout 的一维 CNN 回归模型",
        "home.projects.raman.point3": "通过超参数调优和 L2 正则化增强模型稳健性",
        "home.projects.raman.point4": "在训练集、验证集和测试集上取得稳定的 R² = 0.71",
        "home.competitions.title": "竞赛",
        "home.competitions.mediqa.title": "MEDIQA EVAL-2026 竞赛（第一名）",
        "home.competitions.mediqa.tags": "自然语言处理 • 医疗 AI • 大语言模型评测",
        "home.competitions.mediqa.dates": "2026 年 1 月 – 2026 年 2 月",
        "home.competitions.mediqa.point1": "在 MEDIQA EVAL-2026 竞赛中获得 42 支队伍第一名，该竞赛由 Microsoft 主办并隶属于 ACL Anthology Clinical NLP Workshop",
        "home.competitions.mediqa.point2": "任务：根据患者文本和图像自动评价大语言模型生成的医疗回复",
        "home.competitions.mediqa.link": "[官方排行榜链接]",
        "home.skills.title": "技能",
        "home.skills.statistics": "统计分析",
        "home.skills.finetuning": "大语言模型微调",
        "home.piano.title": "钢琴",
        "home.piano.link": "查看我的曲目",
        "home.contact.title": "联系方式",
        "home.contact.location": "📍 中国深圳",
        "home.contact.education": "🎓 加州大学圣塔芭芭拉分校（统计与数据科学理学学士）",
        "piano.title": "钢琴",
        "piano.back": "← 返回主页",
        "piano.teachers.title": "老师",
        "piano.teachers.paul": "<strong>2023 – 2025：</strong>Paul Berkowitz 教授，加州大学圣塔芭芭拉分校",
        "piano.teachers.lin": "<strong>2025 – 至今：</strong>林博士（辛辛那提大学 DMA）",
        "piano.current.title": "当前曲目",
        "piano.current.bachTitle": "G 大调第五帕蒂塔",
        "piano.current.schubertTitle": "降 B 大调即兴曲 D. 935 No. 3",
        "piano.past.title": "过往曲目（2024 – 2025）",
        "piano.past.wtcTitle": "平均律钢琴曲集第一册",
        "piano.past.wtcDetails": "约翰·塞巴斯蒂安·巴赫 — D 大调与升 C 大调",
        "piano.past.mozartTitle": "F 大调第十二钢琴奏鸣曲，K. 332",
        "piano.past.haydnTitle": "C 小调第二十钢琴奏鸣曲，Hob. XVI:20",
        "piano.past.schumannTitle": "童年情景，Op. 15",
        "piano.past.momentsTitle": "音乐瞬间，D. 780"
    }
};

const languageNames = {
    en: "English",
    zh: "中文"
};

function applyLanguage(language) {
    const dictionary = translations[language] || translations.en;

    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
        const key = element.dataset.i18nHtml;
        if (dictionary[key]) {
            element.innerHTML = dictionary[key];
        }
    });

    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
        const nextLanguage = language === "zh" ? "en" : "zh";
        button.textContent = languageNames[nextLanguage];
        button.setAttribute("aria-label", `Switch to ${languageNames[nextLanguage]}`);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    const initialLanguage = savedLanguage === "zh" ? "zh" : "en";

    applyLanguage(initialLanguage);

    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
        button.addEventListener("click", () => {
            const currentLanguage = document.documentElement.lang === "zh-CN" ? "zh" : "en";
            const nextLanguage = currentLanguage === "zh" ? "en" : "zh";
            localStorage.setItem("preferredLanguage", nextLanguage);
            applyLanguage(nextLanguage);
        });
    });
});
