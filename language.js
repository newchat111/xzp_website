const translations = {
    en: {
        "home.name": "Xinzhe Peng",
        "home.bio.title": "Bio",
        "home.bio.intro": "I received my bachelor’s degree in Statistics and Data Science from UC Santa Barbara in 2025. My research interests are in biomedical LLMs and interpretable machine learning in small-data regimes.",
        "home.bio.current": "My recent work in biomedical LLMs is about automatic ratings with LLM-as-a-judge, studying the correlation between human expert ratings and LLM ratings. For interpretable machine learning, I am working on transferring the knowledge of LLMs to decision trees with self-optimization, and the manuscript is ready to be submitted.",
        "home.bio.future": "In the future, I am planning to work on the training and the benchmarking of biomedical LLMs and also on further studying how LLMs can modify the weights of small models by transferring their prior knowledge.",
        "home.piano.link": "See repertoire",
        "home.personal.title": "Personal Information",
        "home.personal.education": "Bachelor of Science, University of California, Santa Barbara (2022–2025)",
        "home.personal.major": "Statistics and Data Science · GPA 3.55/4.0",
        "home.personal.languages": "English (TOEFL 108) · Chinese (native)",
        "home.experience.title": "Experience",
        "home.experience.role": "Research Assistant · Shenzhen University of Advanced Technology",
        "home.experience.dates": "Nov 2025 – Present",
        "home.experience.report.title": "AI-Powered Medical SOAP Report Generation System (patent pending)",
        "home.experience.report.details": "Python, FastAPI, FAISS · Deployed at Baiyun Hu Hospital, Guangzhou, China",
        "home.experience.projectDates": "Nov 2025 – Sep 2026",
        "home.experience.report.point1": "A production-ready clinical documentation service combining large language models with retrieval-augmented generation for evidence-based medical reporting.",
        "home.experience.report.point2": "Built a hybrid inference pipeline with DeepSeek V4 Flash API calls and asynchronous RAG-enhanced reporting for clinical guideline retrieval. A public server receives requests, and a private server handles compute-intensive tasks such as RAG.",
        "home.experience.report.point3": "Implemented a scalable job queue with robust task scheduling to ensure reliable report generation at scale.",
        "home.experience.report.point4": "The system serves more than 10,000 patients.",
        "home.experience.vitallm.details": "Hugging Face",
        "home.experience.vitallm.point1": "Developed a training recipe for LLMs for automated SOAP generation, including continued pretraining (CPT), data augmentation, and supervised fine-tuning (SFT).",
        "home.experience.vitallm.point2": "Developed an LLM-as-a-judge benchmark for automated evaluation of SOAP generation, with metrics including factual accuracy, consistency, and writing style.",
        "home.research.title": "Research",
        "home.research.interests": "Research interests include biomedical LLMs, evaluation of biomedical LLMs, and small-sample machine learning.",
        "home.research.mediqa.title": "SUAT-BMI at MEDIQA-EVAL 2026: An Ensemble Approach to Language Models as Judges for Automatic Rating of Medical Responses",
        "home.research.mediqa.venue": "<cite>Proceedings of the 8th Workshop on Clinical Natural Language Processing (Clinical NLP) @ LREC 2026</cite>, pp. 12–18, Palma, Mallorca, Spain. ELRA Language Resources Association.",
        "home.mediqa.dates": "Jan 2026 – Feb 2026",
        "home.research.mediqa.link": "Paper on ACL Anthology <cite>Clinical NLP Workshop</cite>",
        "home.research.metafit.title": "MetaFit: LLM-Guided Interpretable Decision-Tree Induction for Small-Sample Biomedical Tabular Prediction",
        "home.research.metafit.status": "Ongoing research · First author",
        "home.research.projectDates": "Jan 2026 – Sep 2026",
        "home.research.soap.title": "Guideline-Grounded LLMs for Scalable SOAP Report Generation from Annual Physical Examination Data: A Real-World Hospital Deployment in China",
        "home.research.soap.status": "Ongoing research",
        "home.competitions.title": "Competition",
        "home.competitions.mediqa.title": "MEDIQA EVAL-2026 Competition (1st Place)",
        "home.competitions.mediqa.tags": "NLP · Medical AI · LLM Evaluation",
        "home.competitions.mediqa.point1": "Placed first out of 42 teams in the MEDIQA EVAL-2026 competition at the Clinical NLP Workshop, hosted by Microsoft.",
        "home.competitions.mediqa.point2": "The task was to automatically rate LLM-generated medical responses given patient text and images.",
        "home.competitions.mediqa.link": "Official results",
        "home.competitions.mediqa.code": "Code availability:",
        "home.projects.title": "Projects",
        "home.projects.ecg.title": "ECG Signal Extraction with U-Net",
        "home.projects.ecg.tags": "Computer Vision · Medical Imaging · Deep Learning",
        "home.projects.ecg.dates": "Nov 2025 – Dec 2025",
        "home.projects.ecg.point1": "Preprocessed ECG images via homography transformation and geometric rectification to align coordinate systems across samples",
        "home.projects.ecg.point2": "Trained a U-Net model for semantic segmentation to accurately extract ECG waveform data",
        "home.projects.ecg.point3": "Optimized with cross-entropy loss; achieved a final SNR score of 16",
        "home.projects.parasite.title": "Parasite Detection with YOLOv8n & ResNet",
        "home.projects.parasite.tags": "Object Detection · Computer Vision · Classification",
        "home.projects.parasite.dates": "Nov 2025 – Dec 2025",
        "home.projects.parasite.point1": "Developed and trained multiple YOLOv8n models to detect 10+ parasite species and impurities",
        "home.projects.parasite.point2": "Integrated a ResNet classifier to distinguish true parasites from non-parasitic impurities in the final pipeline",
        "home.projects.parasite.point3": "Delivered a robust detection system with a test F1-score of 0.87",
        "home.projects.raman.title": "Solution Concentration Prediction via Raman Spectroscopy",
        "home.projects.raman.tags": "Signal Processing · Deep Learning · Regression",
        "home.projects.raman.dates": "Jun 2025 – Jul 2025",
        "home.projects.raman.point1": "Preprocessed multi-wavelength Raman spectral data using linear interpolation, max normalization, and Gaussian normalization",
        "home.projects.raman.point2": "Built a 1D CNN incorporating pooling layers, batch normalization, and dropout for regression",
        "home.projects.raman.point3": "Enhanced model robustness via hyperparameter tuning and L2 regularization",
        "home.projects.raman.point4": "Attained an R² score of 0.71 on the test set",
        "home.skills.title": "Skills",
        "home.skills.coding": "Coding",
        "home.skills.llm": "Large language models",
        "home.skills.cpt": "Continued pretraining (CPT)",
        "home.skills.sft": "Supervised fine-tuning (SFT)",
        "piano.title": "Piano",
        "piano.back": "Back to Home",
        "piano.teachers.title": "Teachers",
        "piano.teachers.paul": "<strong>2023 – 2025:</strong> Professor Paul Berkowitz, UC Santa Barbara",
        "piano.teachers.lin": "<strong>2025 – Present:</strong> Dr. Lin (DMA, University of Cincinnati)",
        "piano.current.title": "Current Repertoire",
        "piano.current.beethovenTitle": "Piano Sonata, Op. 31, No. 3",
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
        "home.name": "彭欣哲",
        "home.bio.title": "个人简介",
        "home.bio.intro": "我于 2025 年获得加州大学圣塔芭芭拉分校统计与数据科学专业的学士学位。我的研究方向包括生物医学大语言模型和小样本场景下的可解释机器学习。",
        "home.bio.current": "在生物医学大语言模型方面，我近期的研究使用大语言模型作为评审，对医疗回复进行自动评分，并考察模型评分与人类专家评分之间的相关性。在可解释机器学习方面，我研究如何通过自优化将大语言模型的知识迁移到决策树中。相关论文已准备投稿。",
        "home.bio.future": "未来，我计划开展生物医学大语言模型的训练与基准评测，并进一步研究如何利用大语言模型的先验知识指导较小模型的权重更新。",
        "home.piano.link": "查看曲目",
        "home.personal.title": "个人信息",
        "home.personal.education": "加州大学圣塔芭芭拉分校，理学学士（2022–2025 年）",
        "home.personal.major": "统计与数据科学 · GPA 3.55/4.0",
        "home.personal.languages": "英语（托福 108 分） · 中文（母语）",
        "home.experience.title": "工作经历",
        "home.experience.role": "科研助理 · 深圳理工大学",
        "home.experience.dates": "2025 年 11 月 – 至今",
        "home.experience.report.title": "AI 医疗 SOAP 报告生成系统（专利申请中）",
        "home.experience.report.details": "Python、FastAPI、FAISS · 已在中国广州白云湖社区医院部署",
        "home.experience.projectDates": "2025 年 11 月 – 2026 年 9 月",
        "home.experience.report.point1": "面向实际临床应用的文档服务，结合大语言模型和检索增强生成，提供基于证据的医疗报告。",
        "home.experience.report.point2": "构建混合推理流程，调用 DeepSeek V4 Flash API，并通过异步 RAG 检索临床指南以生成报告。公网服务器接收请求，私有服务器处理 RAG 等计算密集型任务。",
        "home.experience.report.point3": "实现可扩展的任务队列和稳定的任务调度，保障大规模报告生成的可靠性。",
        "home.experience.report.point4": "该系统服务超过 10,000 名患者。",
        "home.experience.vitallm.details": "Hugging Face",
        "home.experience.vitallm.point1": "开发用于自动生成 SOAP 报告的大语言模型训练流程，包括持续预训练（CPT）、数据增强和监督微调（SFT）。",
        "home.experience.vitallm.point2": "开发以大语言模型为评审的 SOAP 报告自动评测基准，涵盖事实准确性、一致性和写作风格等指标。",
        "home.research.title": "研究",
        "home.research.interests": "研究方向包括生物医学大语言模型、生物医学大语言模型评测和小样本机器学习。",
        "home.research.mediqa.title": "SUAT-BMI at MEDIQA-EVAL 2026: An Ensemble Approach to Language Models as Judges for Automatic Rating of Medical Responses",
        "home.research.mediqa.venue": "<cite>第八届临床自然语言处理研讨会论文集（Clinical NLP，LREC 2026）</cite>，第 12–18 页，西班牙马略卡岛帕尔马。ELRA 语言资源协会。",
        "home.mediqa.dates": "2026 年 1 月 – 2026 年 2 月",
        "home.research.mediqa.link": "ACL Anthology <cite>Clinical NLP Workshop</cite> 论文",
        "home.research.metafit.title": "MetaFit：大语言模型引导的可解释决策树归纳，用于小样本生物医学表格数据预测",
        "home.research.metafit.status": "进行中的研究 · 第一作者",
        "home.research.projectDates": "2026 年 1 月 – 2026 年 9 月",
        "home.research.soap.title": "基于临床指南的大语言模型用于年度体检 SOAP 报告的规模化生成：中国医院真实场景部署",
        "home.research.soap.status": "进行中的研究",
        "home.competitions.title": "竞赛",
        "home.competitions.mediqa.title": "MEDIQA EVAL-2026 竞赛（第一名）",
        "home.competitions.mediqa.tags": "自然语言处理 · 医疗 AI · 大语言模型评测",
        "home.competitions.mediqa.point1": "在 Clinical NLP 研讨会的 MEDIQA EVAL-2026 竞赛中获得 42 支队伍中的第一名，竞赛由微软主办。",
        "home.competitions.mediqa.point2": "竞赛任务是根据患者文本和图像，自动评价大语言模型生成的医疗回复。",
        "home.competitions.mediqa.link": "官方结果",
        "home.competitions.mediqa.code": "代码地址：",
        "home.projects.title": "项目",
        "home.projects.ecg.title": "基于 U-Net 的心电信号提取",
        "home.projects.ecg.tags": "计算机视觉 · 医学影像 · 深度学习",
        "home.projects.ecg.dates": "2025 年 11 月 – 2025 年 12 月",
        "home.projects.ecg.point1": "通过单应性变换和几何校正预处理心电图图像，使不同样本的坐标系统对齐",
        "home.projects.ecg.point2": "训练 U-Net 语义分割模型，准确提取心电波形数据",
        "home.projects.ecg.point3": "使用交叉熵损失优化，最终 SNR 得分达到 16",
        "home.projects.parasite.title": "基于 YOLOv8n 与 ResNet 的寄生虫检测",
        "home.projects.parasite.tags": "目标检测 · 计算机视觉 · 分类",
        "home.projects.parasite.dates": "2025 年 11 月 – 2025 年 12 月",
        "home.projects.parasite.point1": "开发并训练多个 YOLOv8n 模型，用于检测 10 余种寄生虫及杂质",
        "home.projects.parasite.point2": "集成 ResNet 分类器，在最终流程中区分真实寄生虫与非寄生杂质",
        "home.projects.parasite.point3": "交付稳定检测系统，测试集 F1-score 达到 0.87",
        "home.projects.raman.title": "基于拉曼光谱的溶液浓度预测",
        "home.projects.raman.tags": "信号处理 · 深度学习 · 回归",
        "home.projects.raman.dates": "2025 年 6 月 – 2025 年 7 月",
        "home.projects.raman.point1": "使用线性插值、最大值归一化和高斯归一化预处理多波长拉曼光谱数据",
        "home.projects.raman.point2": "构建包含池化层、批归一化和 dropout 的一维 CNN 回归模型",
        "home.projects.raman.point3": "通过超参数调优和 L2 正则化增强模型稳健性",
        "home.projects.raman.point4": "测试集 R² 达到 0.71",
        "home.skills.title": "技能",
        "home.skills.coding": "编程",
        "home.skills.llm": "大语言模型",
        "home.skills.cpt": "持续预训练（CPT）",
        "home.skills.sft": "监督微调（SFT）",
        "piano.title": "钢琴",
        "piano.back": "返回主页",
        "piano.teachers.title": "老师",
        "piano.teachers.paul": "<strong>2023 – 2025：</strong>Paul Berkowitz 教授，加州大学圣塔芭芭拉分校",
        "piano.teachers.lin": "<strong>2025 – 至今：</strong>林博士（辛辛那提大学 DMA）",
        "piano.current.title": "当前曲目",
        "piano.current.beethovenTitle": "钢琴奏鸣曲，Op. 31, No. 3",
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
