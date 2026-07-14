const levels = [
  {
    level: "A1.1",
    title: "Bases de communication",
    summary: "Alphabet, salutations, presentation, nombres et premieres phrases.",
    modules: ["Hallo und Tschuss", "Verbes reguliers", "Articles der/die/das"]
  },
  {
    level: "A1.2",
    title: "Vie quotidienne",
    summary: "Famille, achats, horaires, directions et conversations simples.",
    modules: ["Akkusativ debut", "Questions W", "Dialogues courts"]
  },
  {
    level: "A2.1",
    title: "Autonomie pratique",
    summary: "Voyage, logement, rendez-vous, sante et messages courts.",
    modules: ["Perfekt", "Dativ debut", "Prepositions utiles"]
  },
  {
    level: "A2.2",
    title: "Situations variees",
    summary: "Raconter, comparer, donner son avis et comprendre des annonces.",
    modules: ["Nebensatze", "Comparatif", "Ecoute guidee"]
  },
  {
    level: "B1.1",
    title: "Expression personnelle",
    summary: "Argumenter simplement, parler du travail, etudes et projets.",
    modules: ["Konjunktiv II", "Connecteurs", "Emails formels"]
  },
  {
    level: "B1.2",
    title: "Consolidation B1",
    summary: "Discussions, textes plus longs, opinions et preparation certification.",
    modules: ["Passiv debut", "Lecture B1", "Oral structure"]
  },
  {
    level: "B2.1",
    title: "Allemand avance",
    summary: "Debats, articles, precision grammaticale et vocabulaire professionnel.",
    modules: ["Nominalisation", "Discours argumente", "Medias"]
  },
  {
    level: "B2.2",
    title: "Preparation B2",
    summary: "Examens, presentations, comprehension complexe et production fluide.",
    modules: ["Redemittel", "Simulation Goethe", "Essais structures"]
  }
];

const defaultClassRooms = [
  ["A1.1", "Classe A1.1 - Debutants", "A11-2026", "Meriem Hoffmann", "Lundi / Mercredi 18:00", "Alphabet, presentation, salutations"],
  ["A1.2", "Classe A1.2 - Vie quotidienne", "A12-2026", "Jonas Weber", "Mardi / Jeudi 18:00", "Achats, famille, directions"],
  ["A2.1", "Classe A2.1 - Autonomie", "A21-2026", "Nadia Fischer", "Samedi 10:00", "Voyage, rendez-vous, sante"],
  ["A2.2", "Classe A2.2 - Consolidation", "A22-2026", "Karim Braun", "Dimanche 10:00", "Perfekt, comparaison, annonces"],
  ["B1.1", "Classe B1.1 - Expression", "B11-2026", "Sara Becker", "Lundi / Mercredi 20:00", "Travail, etudes, opinions"],
  ["B1.2", "Classe B1.2 - Certification", "B12-2026", "Thomas Klein", "Mardi / Jeudi 20:00", "Preparation examen B1"],
  ["B2.1", "Classe B2.1 - Professionnel", "B21-2026", "Leila Wagner", "Samedi 14:00", "Debat, medias, allemand professionnel"],
  ["B2.2", "Classe B2.2 - Examen", "B22-2026", "Martin Schulte", "Dimanche 14:00", "Preparation Goethe B2"]
].map(([level, title, code, teacher, schedule, goal]) => ({ level, title, code, teacher, schedule, goal }));

let classRooms = JSON.parse(localStorage.getItem("profSlimClassRooms") || "null") || defaultClassRooms;
let unlockedClassCode = sessionStorage.getItem("profSlimUnlockedClass") || "";

const defaultCourses = [
  {
    level: "A1.1",
    title: "Premiers pas en allemand",
    lessons: "12 lecons",
    teacher: "Meriem Hoffmann",
    description: "Alphabet, salutations, presentation et premiers dialogues.",
    pdfs: [{ label: "PDF A1.1 - Grammaire de base", url: "#enregistrement" }],
    videos: [{ label: "YouTube A1.1 - Debutant", url: "https://www.youtube.com/results?search_query=allemand+A1.1+debutant" }]
  },
  {
    level: "A1.2",
    title: "Conversation quotidienne",
    lessons: "10 lecons",
    teacher: "Jonas Weber",
    description: "Famille, achats, horaires, directions et situations simples.",
    pdfs: [{ label: "PDF A1.2 - Vocabulaire quotidien", url: "#enregistrement" }],
    videos: [{ label: "YouTube A1.2 - Dialogues", url: "https://www.youtube.com/results?search_query=allemand+A1.2+dialogues" }]
  },
  {
    level: "A2.1",
    title: "Allemand pour voyager",
    lessons: "14 lecons",
    teacher: "Nadia Fischer",
    description: "Voyage, logement, rendez-vous, sante et messages courts.",
    pdfs: [{ label: "PDF A2.1 - Situations pratiques", url: "#enregistrement" }],
    videos: [{ label: "YouTube A2.1 - Voyage", url: "https://www.youtube.com/results?search_query=allemand+A2.1+voyage" }]
  },
  {
    level: "A2.2",
    title: "Grammaire active A2",
    lessons: "11 lecons",
    teacher: "Karim Braun",
    description: "Perfekt, Nebensatze, comparatif et comprehension d'annonces.",
    pdfs: [{ label: "PDF A2.2 - Grammaire active", url: "#enregistrement" }],
    videos: [{ label: "YouTube A2.2 - Grammaire", url: "https://www.youtube.com/results?search_query=allemand+A2.2+grammaire" }]
  },
  {
    level: "B1.1",
    title: "Parler du travail et des etudes",
    lessons: "13 lecons",
    teacher: "Sara Becker",
    description: "Exprimer son opinion, parler du travail, des etudes et des projets.",
    pdfs: [{ label: "PDF B1.1 - Expression orale", url: "#enregistrement" }],
    videos: [{ label: "YouTube B1.1 - Conversation", url: "https://www.youtube.com/results?search_query=allemand+B1.1+conversation" }]
  },
  {
    level: "B1.2",
    title: "Preparation B1",
    lessons: "16 lecons",
    teacher: "Thomas Klein",
    description: "Preparation certification B1, lecture, oral et emails formels.",
    pdfs: [{ label: "PDF B1.2 - Preparation examen", url: "#enregistrement" }],
    videos: [{ label: "YouTube B1 - Preparation Goethe", url: "https://www.youtube.com/results?search_query=preparation+goethe+B1+allemand" }]
  },
  {
    level: "B2.1",
    title: "Allemand professionnel",
    lessons: "15 lecons",
    teacher: "Leila Wagner",
    description: "Debats, medias, argumentation et vocabulaire professionnel.",
    pdfs: [{ label: "PDF B2.1 - Allemand professionnel", url: "#enregistrement" }],
    videos: [{ label: "YouTube B2.1 - Beruf Deutsch", url: "https://www.youtube.com/results?search_query=allemand+B2.1+professionnel" }]
  },
  {
    level: "B2.2",
    title: "Preparation examen B2",
    lessons: "18 lecons",
    teacher: "Martin Schulte",
    description: "Simulation examen, Schreiben, Sprechen et comprehension complexe.",
    pdfs: [{ label: "PDF B2.2 - Preparation B2", url: "#enregistrement" }],
    videos: [{ label: "YouTube B2 - Preparation examen", url: "https://www.youtube.com/results?search_query=preparation+goethe+B2+allemand" }]
  }
];

const courses = JSON.parse(localStorage.getItem("profSlimCourses") || "null") || defaultCourses;

const defaultExercises = [
  {
    title: "Deutsch B1 Reading - Aufgabenblatt",
    level: "B1.1",
    teacher: "Prof. Slim",
    deadline: "Cette semaine",
    instruction: "Lire le texte et repondre aux questions de comprehension.",
    file: "assets/library/deutsch-b1-reading-aufgabenblatt.pdf",
    type: "PDF",
    category: "Exercice"
  },
  {
    title: "Deutsch B1 Reading - Aufgabenblatt 1",
    level: "B1.2",
    teacher: "Prof. Slim",
    deadline: "Prochaine seance",
    instruction: "Faire les exercices de lecture et preparer les reponses.",
    file: "assets/library/deutsch-b1-reading-aufgabenblatt-1.pdf",
    type: "PDF",
    category: "Exercice"
  },
  {
    title: "Deutsch B1 Reading - Losungsschlussel",
    level: "B1.1",
    teacher: "Prof. Slim",
    deadline: "Correction",
    instruction: "Utiliser le corrige apres avoir termine l'exercice.",
    file: "assets/library/deutsch-b1-reading-losungsschlussel.pdf",
    type: "PDF",
    category: "Astuce"
  },
  {
    title: "Deutsch B1 Reading - Losungsschlussel 1",
    level: "B1.2",
    teacher: "Prof. Slim",
    deadline: "Correction",
    instruction: "Comparer vos reponses avec la version corrigee.",
    file: "assets/library/deutsch-b1-reading-losungsschlussel-1.pdf",
    type: "PDF",
    category: "Astuce"
  }
];

const exercises = JSON.parse(localStorage.getItem("profSlimExercises") || "null") || defaultExercises;

const pageTitle = document.querySelector("#pageTitle");
const pageLinks = document.querySelectorAll("[data-page-link]");
const pages = document.querySelectorAll(".page");
const menuButton = document.querySelector("#menuButton");
const loginRole = document.querySelector("#loginRole");
const sessionRoleLabel = document.querySelector("#sessionRoleLabel");
const platformModeLabel = document.querySelector("#platformModeLabel");
const levelGrid = document.querySelector("#levelGrid");
const courseGrid = document.querySelector("#courseGrid");
const courseFilter = document.querySelector("#courseFilter");
const activeLevelLabel = document.querySelector("#activeLevelLabel");
const logoutButton = document.querySelector("#logoutButton");
const languageSelects = document.querySelectorAll("[data-language-select]");
const classCodeForm = document.querySelector("#classCodeForm");
const classCodeInput = document.querySelector("#classCodeInput");
const classCodeStatus = document.querySelector("#classCodeStatus");
const activeClassTitle = document.querySelector("#activeClassTitle");
const activeClassDetails = document.querySelector("#activeClassDetails");
const classWorkspace = document.querySelector("#classWorkspace");
const workspaceTitle = document.querySelector("#workspaceTitle");
const workspaceCode = document.querySelector("#workspaceCode");
const classExerciseList = document.querySelector("#classExerciseList");
const classCourseList = document.querySelector("#classCourseList");
const classExamList = document.querySelector("#classExamList");
const studentFollowup = document.querySelector("#studentFollowup");
const adminClassForm = document.querySelector("#adminClassForm");
const adminClassCount = document.querySelector("#adminClassCount");
const adminClassStatus = document.querySelector("#adminClassStatus");
const adminClassList = document.querySelector("#adminClassList");
const exerciseGrid = document.querySelector("#exerciseGrid");
const exerciseCountLabel = document.querySelector("#exerciseCountLabel");
const adminExerciseForm = document.querySelector("#adminExerciseForm");
const adminExerciseStatus = document.querySelector("#adminExerciseStatus");
const profileForm = document.querySelector("#profileForm");
const profileName = document.querySelector("#profileName");
const profileSummary = document.querySelector("#profileSummary");
const profileFullName = document.querySelector("#profileFullName");
const profileEmail = document.querySelector("#profileEmail");
const profileRole = document.querySelector("#profileRole");
const profileLevel = document.querySelector("#profileLevel");
const profileStatus = document.querySelector("#profileStatus");
const profileAccessList = document.querySelector("#profileAccessList");
const authPages = ["login", "inscription"];
const defaultStudentPage = "accueil";
const defaultAdminPage = "admin";
const defaultTeacherPage = "enregistrement";
let isAuthenticated = sessionStorage.getItem("profSlimAuthenticated") === "true";
let currentRole = sessionStorage.getItem("profSlimRole") || "student";
let currentLanguage = localStorage.getItem("profSlimLanguage") || "fr";
let profiles = JSON.parse(localStorage.getItem("profSlimProfiles") || "null") || {};
let latestTestResult = JSON.parse(sessionStorage.getItem("profSlimLatestTest") || "null");

const i18n = {
  fr: {
    navHome: "Accueil",
    navCourses: "Cours",
    navClasses: "Classes",
    navTest: "Test niveau",
    navLibrary: "Bibliothek",
    navExercises: "Exercices",
    navRegisterCourse: "Enregistrer cours",
    navAdmin: "Admin",
    navProfile: "Profil",
    languageLabel: "Langue",
    logout: "Se deconnecter",
    studentSpace: "Espace etudiant",
    adminSpace: "Espace admin",
    teacherSpace: "Espace professeur",
    allPermissions: "Autorisations completes",
    courseManagement: "Gestion cours",
    studentMode: "PROF. SLIM Deutsch Zentrum",
    adminMode: "Administration PROF. SLIM",
    teacherMode: "Espace professeur PROF. SLIM",
    profileEyebrow: "Profil",
    profileDetailsEyebrow: "Compte",
    profileDetailsTitle: "Informations du profil",
    profileFullName: "Nom complet",
    profileRole: "Role",
    profileLevel: "Niveau",
    profileLanguage: "Langue de l'interface",
    profileSave: "Enregistrer le profil",
    profileAccessEyebrow: "Acces",
    profileAccessTitle: "Interface active",
    profileSaved: "Profil enregistre.",
    profileSummaryStudent: "Espace etudiant pour cours, classes, exercices et suivi personnel.",
    profileSummaryAdmin: "Espace administrateur independant pour gerer cours, classes, exercices et utilisateurs.",
    profileSummaryTeacher: "Espace professeur pour publier cours et exercices.",
    profileAdminAccessUsers: "Gestion separee des utilisateurs et statistiques.",
    profileAdminAccessCourses: "Creation de cours hors interface etudiant.",
    profileAdminAccessPrefs: "Preferences et langue administrateur.",
    profileTeacherAccessCourses: "Publication des cours et ressources.",
    profileTeacherAccessPrefs: "Preferences et langue professeur.",
    profileTeacherAccessExercises: "Exercices visibles cote etudiant apres publication.",
    profileStudentAccessCourses: "Parcours de niveau et ressources.",
    profileStudentAccessClasses: "Acces par code donne par l'admin.",
    profileStudentAccessExercises: "Travail donne par le professeur.",
    roleStudent: "Etudiant",
    roleAdmin: "Admin",
    roleTeacher: "Professeur",
    page_accueil: "Apprendre l'allemand avec parcours clair",
    page_cours: "Catalogue des cours",
    page_classes: "Classes de A1 jusqu'a B2",
    page_test: "Test de niveau allemand",
    page_bibliothek: "Bibliothek et ressources",
    page_exercices: "Exercices par competence",
    page_enregistrement: "Enregistrement de cours",
    page_admin: "Tableau de bord administrateur",
    page_profil: "Profil"
  },
  en: {
    navHome: "Home",
    navCourses: "Courses",
    navClasses: "Classes",
    navTest: "Level test",
    navLibrary: "Library",
    navExercises: "Exercises",
    navRegisterCourse: "Add course",
    navAdmin: "Admin",
    navProfile: "Profile",
    languageLabel: "Language",
    logout: "Log out",
    studentSpace: "Student area",
    adminSpace: "Admin area",
    teacherSpace: "Teacher area",
    allPermissions: "Full permissions",
    courseManagement: "Course management",
    studentMode: "PROF. SLIM Deutsch Zentrum",
    adminMode: "PROF. SLIM Administration",
    teacherMode: "PROF. SLIM Teacher area",
    profileEyebrow: "Profile",
    profileDetailsEyebrow: "Account",
    profileDetailsTitle: "Profile information",
    profileFullName: "Full name",
    profileRole: "Role",
    profileLevel: "Level",
    profileLanguage: "Interface language",
    profileSave: "Save profile",
    profileAccessEyebrow: "Access",
    profileAccessTitle: "Active interface",
    profileSaved: "Profile saved.",
    profileSummaryStudent: "Student area for courses, classes, exercises and personal progress.",
    profileSummaryAdmin: "Independent admin area for courses, classes, exercises and users.",
    profileSummaryTeacher: "Teacher area for publishing courses and exercises.",
    profileAdminAccessUsers: "Separate user and statistics management.",
    profileAdminAccessCourses: "Course creation outside the student interface.",
    profileAdminAccessPrefs: "Admin preferences and language.",
    profileTeacherAccessCourses: "Publish courses and resources.",
    profileTeacherAccessPrefs: "Teacher preferences and language.",
    profileTeacherAccessExercises: "Exercises become visible to students after publishing.",
    profileStudentAccessCourses: "Level paths and resources.",
    profileStudentAccessClasses: "Access with a code given by the admin.",
    profileStudentAccessExercises: "Work assigned by the teacher.",
    roleStudent: "Student",
    roleAdmin: "Admin",
    roleTeacher: "Teacher",
    page_accueil: "Learn German with a clear path",
    page_cours: "Course catalog",
    page_classes: "Classes from A1 to B2",
    page_test: "German level test",
    page_bibliothek: "Library and resources",
    page_exercices: "Skill exercises",
    page_enregistrement: "Course registration",
    page_admin: "Administrator dashboard",
    page_profil: "Profile"
  },
  de: {
    navHome: "Start",
    navCourses: "Kurse",
    navClasses: "Klassen",
    navTest: "Einstufungstest",
    navLibrary: "Bibliothek",
    navExercises: "Ubungen",
    navRegisterCourse: "Kurs anlegen",
    navAdmin: "Admin",
    navProfile: "Profil",
    languageLabel: "Sprache",
    logout: "Abmelden",
    studentSpace: "Lernbereich",
    adminSpace: "Adminbereich",
    teacherSpace: "Lehrerbereich",
    allPermissions: "Alle Berechtigungen",
    courseManagement: "Kursverwaltung",
    studentMode: "PROF. SLIM Deutsch Zentrum",
    adminMode: "PROF. SLIM Administration",
    teacherMode: "PROF. SLIM Lehrerbereich",
    profileEyebrow: "Profil",
    profileDetailsEyebrow: "Konto",
    profileDetailsTitle: "Profilinformationen",
    profileFullName: "Vollstandiger Name",
    profileRole: "Rolle",
    profileLevel: "Niveau",
    profileLanguage: "Oberflachensprache",
    profileSave: "Profil speichern",
    profileAccessEyebrow: "Zugriff",
    profileAccessTitle: "Aktive Oberflache",
    profileSaved: "Profil gespeichert.",
    profileSummaryStudent: "Lernbereich fur Kurse, Klassen, Ubungen und personlichen Fortschritt.",
    profileSummaryAdmin: "Unabhangiger Adminbereich fur Kurse, Klassen, Ubungen und Benutzer.",
    profileSummaryTeacher: "Lehrerbereich zum Veroffentlichen von Kursen und Ubungen.",
    profileAdminAccessUsers: "Getrennte Verwaltung von Benutzern und Statistiken.",
    profileAdminAccessCourses: "Kurserstellung ausserhalb der Lernoberflache.",
    profileAdminAccessPrefs: "Admin-Einstellungen und Sprache.",
    profileTeacherAccessCourses: "Kurse und Ressourcen veroffentlichen.",
    profileTeacherAccessPrefs: "Lehrer-Einstellungen und Sprache.",
    profileTeacherAccessExercises: "Ubungen werden nach der Veroffentlichung fur Lernende sichtbar.",
    profileStudentAccessCourses: "Lernwege und Ressourcen nach Niveau.",
    profileStudentAccessClasses: "Zugriff mit einem Code vom Admin.",
    profileStudentAccessExercises: "Aufgaben vom Lehrer.",
    roleStudent: "Student",
    roleAdmin: "Admin",
    roleTeacher: "Lehrer",
    page_accueil: "Deutsch lernen mit klarem Lernweg",
    page_cours: "Kurskatalog",
    page_classes: "Klassen von A1 bis B2",
    page_test: "Deutsch-Einstufungstest",
    page_bibliothek: "Bibliothek und Ressourcen",
    page_exercices: "Ubungen nach Kompetenz",
    page_enregistrement: "Kursregistrierung",
    page_admin: "Admin-Dashboard",
    page_profil: "Profil"
  }
};

Object.assign(i18n.fr, {
  homeEyebrow: "Deutsch lernen",
  homeHeroTitle: "La plateforme officielle PROF. SLIM pour cours, tests, livres et classes.",
  homeHeroText: "Organisez l'apprentissage de A1.1 a B2.2 avec des parcours, exercices, ressources et suivi personnel dans une seule interface.",
  homeHeroCourses: "Voir les cours",
  homeHeroTest: "Passer le test",
  metricClasses: "Classes A1.1 - B2.2",
  metricLessons: "Lecons guidees",
  metricExercises: "Exercices pratiques",
  metricTests: "Tests de niveau",
  homePathEyebrow: "Parcours",
  homePathTitle: "Structure proposee",
  homePathLink: "Voir les classes",
  featureLoginTitle: "Login et inscription",
  featureLoginText: "Formulaires propres pour acceder rapidement a votre espace.",
  featureCoursesTitle: "Cours par niveau",
  featureCoursesText: "Chaque niveau contient grammaire, vocabulaire, audio, lecture et production ecrite.",
  featureLibraryTitle: "Bibliothek",
  featureLibraryText: "Livres, fiches PDF, audio, listes de mots et ressources culturelles.",
  featureFollowTitle: "Suivi personnel",
  featureFollowText: "Progression, exercices, examens et ressources de votre classe.",
  loginEyebrow: "Connexion securisee",
  loginTitle: "Bienvenue sur PROF. SLIM",
  loginText: "Votre plateforme intelligente pour apprendre l'allemand de A1 a B2.",
  emailLabel: "Email",
  passwordLabel: "Mot de passe",
  roleLabel: "Role",
  forgotPassword: "Mot de passe oublie ?",
  createAccountLink: "Creer un compte",
  loginButton: "Se connecter",
  loginHeroEyebrow: "German learning SaaS",
  loginHeroTitle: "Apprenez, progressez et suivez chaque niveau avec precision.",
  loginHeroText: "Un espace moderne pour gerer les cours, tests, bibliothek, exercices et classes de A1.1 a B2.2.",
  signupEyebrow: "Nouveau compte",
  signupTitle: "Inscription",
  signupText: "Inscrivez-vous d'abord, puis la plateforme complete sera ouverte.",
  fullNameLabel: "Nom complet",
  phoneLabel: "Telephone",
  desiredLevelLabel: "Niveau souhaite",
  createPasswordLabel: "Mot de passe",
  profileTypeLabel: "Profil",
  createAccountButton: "Creer le compte",
  alreadyRegistered: "Deja inscrit ?",
  coursesEyebrow: "Cours",
  coursesTitle: "Programmes d'allemand",
  allLevels: "Tous les niveaux",
  classesTitle: "Acces aux classes par code admin",
  classCodeEyebrow: "Code de classe",
  classCodeTitle: "Entrez le code donne par l'admin",
  classCodeText: "Chaque classe A1.1 jusqu'a B2.2 est ouverte uniquement avec son code d'acces.",
  codeLabel: "Code",
  openClass: "Ouvrir la classe",
  activeClass: "Classe active",
  noOpenClass: "Aucune classe ouverte",
  activeClassHelp: "Utilisez un code cree par l'admin pour afficher les informations de la classe.",
  studentWorkspace: "Espace etudiant",
  classWorkspaceTitle: "Votre espace de classe",
  validCode: "Code valide",
  courseLinks: "Liens de cours",
  exams: "Examens",
  personalFollow: "Suivi personnel",
  seeAll: "Voir tout",
  resources: "Ressources",
  placementEyebrow: "Placement",
  testTitle: "Test de niveau complet",
  testText: "Evaluation PROF. SLIM en grammaire, vocabulaire, lecture, simulation audio, ecriture et oral.",
  audioTitle: "Audio B1 - Horen",
  audioText: "Ecoutez l'audio, puis repondez aux questions 21 a 25.",
  audioFallback: "Votre navigateur ne supporte pas le lecteur audio.",
  yourAnswer: "Votre reponse",
  seeResult: "Voir resultat",
  result: "Resultat",
  waiting: "En attente",
  quizAdviceStart: "Repondez aux 25 questions automatiques pour afficher le niveau conseille.",
  autoScore: "Score automatique",
  writingSpeakingCorrection: "Les parties Schreiben et Sprechen ajoutent 5 points a corriger par le professeur.",
  writingScore: "Ecriture: 2 points",
  oralScore: "Oral: 3 points",
  totalScore: "Total possible: 30 points",
  libraryTitle: "Bibliotheque PDF",
  libraryText: "Fichiers installes dans la plateforme avec acces pour ouvrir ou telecharger.",
  libraryDesc1: "Fiche d'exercices de lecture B1 pour entrainement et evaluation.",
  libraryDesc2: "Deuxieme version du fichier d'exercices de lecture B1.",
  libraryDesc3: "Corrige et solution key pour les exercices de lecture B1.",
  libraryDesc4: "Version supplementaire du corrige pour les exercices B1 Reading.",
  open: "Ouvrir",
  download: "Telecharger",
  practiceEyebrow: "Pratique",
  exercisesTitle: "Exercices donnes par le professeur",
  exercisesText: "Les exercices publies par le prof apparaissent ici avec acces pour ouvrir ou telecharger.",
  workToDo: "Travail a faire",
  creationEyebrow: "Creation",
  registerCourseTitle: "Page d'enregistrement de cours",
  registerCourseText: "Ajoutez un cours avec son niveau, son enseignant et ses ressources.",
  courseTitleLabel: "Titre du cours",
  teacherLabel: "Enseignant",
  durationLabel: "Duree",
  coursePdfLabel: "PDF du cours",
  youtubeLabel: "Lien YouTube",
  descriptionLabel: "Description",
  save: "Enregistrer",
  adminTitle: "Page d'admin",
  students: "Etudiants",
  teachers: "Enseignants",
  coursesMetric: "Cours",
  classesMetric: "Classes",
  newThisMonth: "47 nouveaux ce mois",
  activeClasses: "8 classes actives",
  publishedCatalog: "Catalogue publie",
  activeCodes: "Codes actifs",
  passedThisWeek: "Passes cette semaine",
  classManagement: "Gestion classes",
  createClassCode: "Creer un code de classe",
  adminClassText: "L'admin ecrit un code unique. Les etudiants utilisent ce code dans la page Classes pour entrer.",
  classCodeLabel: "Code classe",
  scheduleLabel: "Horaire",
  goalLabel: "Objectif",
  saveCode: "Enregistrer le code",
  exerciseManagement: "Gestion exercices",
  publishExercise: "Publier un exercice",
  adminExerciseText: "Le professeur ajoute un exercice avec son fichier PDF ou lien. Les etudiants peuvent ensuite le telecharger.",
  titleLabel: "Titre",
  typeLabel: "Type",
  deadlineLabel: "Date limite",
  uploadPdfLabel: "Ajouter PDF depuis l'ordinateur",
  fileLinkLabel: "Fichier PDF ou lien",
  instructionLabel: "Consigne",
  publishExerciseButton: "Publier l'exercice",
  userLabel: "Utilisateur",
  actionLabel: "Action",
  view: "Voir",
  pdfsLabel: "PDFs",
  noPdf: "Aucun PDF importe",
  noYoutube: "Aucun lien YouTube",
  progressivePath: "Parcours progressif avec videos, fiches, exercices corriges et mini test final.",
  noExerciseClass: "Aucun exercice publie pour cette classe pour le moment.",
  noCourseClass: "Aucun cours lie a ce niveau pour le moment.",
  takeExam: "Passer examen",
  lastResult: "Dernier resultat",
  noTestDone: "Aucun test termine",
  enterCodeExercises: "Entrez un code de classe pour afficher les exercices.",
  enterCodeCourses: "Entrez un code de classe pour afficher les liens de cours.",
  enterCodeExams: "Entrez un code de classe pour afficher les examens.",
  noFollowup: "Aucun suivi disponible sans classe active.",
  recommendedLevel: "niveau conseille",
  currentLevel: "Niveau actuel",
  availableExercises: "Exercices disponibles",
  launchedCourses: "Cours lances",
  exerciseSingular: "exercice",
  exercisePlural: "exercices",
  lessonsWord: "lecons",
  openVerb: "Ouverte",
  requiredCode: "Code requis",
  teacherFallback: "Professeur",
  scheduleFallback: "Horaire",
  roleStudentOption: "Etudiant",
  roleTeacherOption: "Professeur",
  roleAdminOption: "Admin",
  emailPlaceholder: "nom@email.com",
  passwordPlaceholder: "Votre mot de passe",
  namePlaceholder: "Votre nom"
  ,
  loginSuccess: "Connexion demo reussie.",
  signupSuccess: "Compte demo cree avec succes."
});

Object.assign(i18n.en, {
  homeEyebrow: "Learn German",
  homeHeroTitle: "The official PROF. SLIM platform for courses, tests, books and classes.",
  homeHeroText: "Organize learning from A1.1 to B2.2 with paths, exercises, resources and personal tracking in one interface.",
  homeHeroCourses: "View courses",
  homeHeroTest: "Take the test",
  metricClasses: "A1.1 - B2.2 classes",
  metricLessons: "Guided lessons",
  metricExercises: "Practice exercises",
  metricTests: "Level tests",
  homePathEyebrow: "Path",
  homePathTitle: "Suggested structure",
  homePathLink: "View classes",
  featureLoginTitle: "Login and registration",
  featureLoginText: "Clean forms to quickly access your area.",
  featureCoursesTitle: "Courses by level",
  featureCoursesText: "Each level includes grammar, vocabulary, audio, reading and writing.",
  featureLibraryTitle: "Library",
  featureLibraryText: "Books, PDF sheets, audio, word lists and cultural resources.",
  featureFollowTitle: "Personal tracking",
  featureFollowText: "Progress, exercises, exams and resources for your class.",
  loginEyebrow: "Secure login",
  loginTitle: "Welcome to PROF. SLIM",
  loginText: "Your smart platform for learning German from A1 to B2.",
  emailLabel: "Email",
  passwordLabel: "Password",
  roleLabel: "Role",
  forgotPassword: "Forgot password?",
  createAccountLink: "Create account",
  loginButton: "Log in",
  loginHeroEyebrow: "German learning SaaS",
  loginHeroTitle: "Learn, progress and track each level precisely.",
  loginHeroText: "A modern space to manage courses, tests, library, exercises and classes from A1.1 to B2.2.",
  signupEyebrow: "New account",
  signupTitle: "Registration",
  signupText: "Register first, then the full platform will open.",
  fullNameLabel: "Full name",
  phoneLabel: "Phone",
  desiredLevelLabel: "Desired level",
  createPasswordLabel: "Password",
  profileTypeLabel: "Profile",
  createAccountButton: "Create account",
  alreadyRegistered: "Already registered?",
  coursesEyebrow: "Courses",
  coursesTitle: "German programs",
  allLevels: "All levels",
  classesTitle: "Class access with admin code",
  classCodeEyebrow: "Class code",
  classCodeTitle: "Enter the code given by the admin",
  classCodeText: "Each class from A1.1 to B2.2 opens only with its access code.",
  codeLabel: "Code",
  openClass: "Open class",
  activeClass: "Active class",
  noOpenClass: "No class open",
  activeClassHelp: "Use a code created by the admin to show class information.",
  studentWorkspace: "Student area",
  classWorkspaceTitle: "Your class workspace",
  validCode: "Valid code",
  courseLinks: "Course links",
  exams: "Exams",
  personalFollow: "Personal tracking",
  seeAll: "See all",
  resources: "Resources",
  placementEyebrow: "Placement",
  testTitle: "Complete level test",
  testText: "PROF. SLIM assessment in grammar, vocabulary, reading, audio simulation, writing and speaking.",
  audioTitle: "B1 audio - Listening",
  audioText: "Listen to the audio, then answer questions 21 to 25.",
  audioFallback: "Your browser does not support the audio player.",
  yourAnswer: "Your answer",
  seeResult: "See result",
  result: "Result",
  waiting: "Waiting",
  quizAdviceStart: "Answer the 25 automatic questions to show the recommended level.",
  autoScore: "Automatic score",
  writingSpeakingCorrection: "The Schreiben and Sprechen parts add 5 points to be corrected by the teacher.",
  writingScore: "Writing: 2 points",
  oralScore: "Speaking: 3 points",
  totalScore: "Total possible: 30 points",
  libraryTitle: "PDF library",
  libraryText: "Files installed in the platform with access to open or download.",
  libraryDesc1: "B1 reading exercise sheet for practice and assessment.",
  libraryDesc2: "Second version of the B1 reading exercise file.",
  libraryDesc3: "Answer key for the B1 reading exercises.",
  libraryDesc4: "Additional correction version for the B1 Reading exercises.",
  open: "Open",
  download: "Download",
  practiceEyebrow: "Practice",
  exercisesTitle: "Exercises assigned by the teacher",
  exercisesText: "Exercises published by the teacher appear here with access to open or download.",
  workToDo: "Work to do",
  creationEyebrow: "Creation",
  registerCourseTitle: "Course registration page",
  registerCourseText: "Add a course with its level, teacher and resources.",
  courseTitleLabel: "Course title",
  teacherLabel: "Teacher",
  durationLabel: "Duration",
  coursePdfLabel: "Course PDF",
  youtubeLabel: "YouTube link",
  descriptionLabel: "Description",
  save: "Save",
  adminTitle: "Admin page",
  students: "Students",
  teachers: "Teachers",
  coursesMetric: "Courses",
  classesMetric: "Classes",
  newThisMonth: "47 new this month",
  activeClasses: "8 active classes",
  publishedCatalog: "Published catalog",
  activeCodes: "Active codes",
  passedThisWeek: "Passed this week",
  classManagement: "Class management",
  createClassCode: "Create a class code",
  adminClassText: "The admin writes a unique code. Students use it on the Classes page to enter.",
  classCodeLabel: "Class code",
  scheduleLabel: "Schedule",
  goalLabel: "Goal",
  saveCode: "Save code",
  exerciseManagement: "Exercise management",
  publishExercise: "Publish an exercise",
  adminExerciseText: "The teacher adds an exercise with a PDF file or link. Students can then download it.",
  titleLabel: "Title",
  typeLabel: "Type",
  deadlineLabel: "Deadline",
  uploadPdfLabel: "Add PDF from computer",
  fileLinkLabel: "PDF file or link",
  instructionLabel: "Instruction",
  publishExerciseButton: "Publish exercise",
  userLabel: "User",
  actionLabel: "Action",
  view: "View",
  pdfsLabel: "PDFs",
  noPdf: "No PDF imported",
  noYoutube: "No YouTube link",
  progressivePath: "Progressive path with videos, sheets, corrected exercises and a final mini test.",
  noExerciseClass: "No exercise has been published for this class yet.",
  noCourseClass: "No course is linked to this level yet.",
  takeExam: "Take exam",
  lastResult: "Latest result",
  noTestDone: "No test completed",
  enterCodeExercises: "Enter a class code to show exercises.",
  enterCodeCourses: "Enter a class code to show course links.",
  enterCodeExams: "Enter a class code to show exams.",
  noFollowup: "No tracking available without an active class.",
  recommendedLevel: "recommended level",
  currentLevel: "Current level",
  availableExercises: "Available exercises",
  launchedCourses: "Started courses",
  exerciseSingular: "exercise",
  exercisePlural: "exercises",
  lessonsWord: "lessons",
  openVerb: "Open",
  requiredCode: "Code required",
  teacherFallback: "Teacher",
  scheduleFallback: "Schedule",
  roleStudentOption: "Student",
  roleTeacherOption: "Teacher",
  roleAdminOption: "Admin",
  emailPlaceholder: "name@email.com",
  passwordPlaceholder: "Your password",
  namePlaceholder: "Your name"
  ,
  loginSuccess: "Demo login successful.",
  signupSuccess: "Demo account created successfully."
});

Object.assign(i18n.de, {
  homeEyebrow: "Deutsch lernen",
  homeHeroTitle: "Die offizielle PROF. SLIM Plattform fur Kurse, Tests, Bucher und Klassen.",
  homeHeroText: "Organisieren Sie das Lernen von A1.1 bis B2.2 mit Lernwegen, Ubungen, Ressourcen und personlicher Begleitung in einer Oberflache.",
  homeHeroCourses: "Kurse ansehen",
  homeHeroTest: "Test machen",
  metricClasses: "Klassen A1.1 - B2.2",
  metricLessons: "Gefuhrte Lektionen",
  metricExercises: "Praktische Ubungen",
  metricTests: "Einstufungstests",
  homePathEyebrow: "Lernweg",
  homePathTitle: "Vorgeschlagene Struktur",
  homePathLink: "Klassen ansehen",
  featureLoginTitle: "Login und Anmeldung",
  featureLoginText: "Klare Formulare fur schnellen Zugriff auf Ihren Bereich.",
  featureCoursesTitle: "Kurse nach Niveau",
  featureCoursesText: "Jedes Niveau enthalt Grammatik, Wortschatz, Audio, Lesen und Schreiben.",
  featureLibraryTitle: "Bibliothek",
  featureLibraryText: "Bucher, PDF-Blatter, Audio, Wortlisten und kulturelle Ressourcen.",
  featureFollowTitle: "Personliche Begleitung",
  featureFollowText: "Fortschritt, Ubungen, Prufungen und Ressourcen Ihrer Klasse.",
  loginEyebrow: "Sicherer Login",
  loginTitle: "Willkommen bei PROF. SLIM",
  loginText: "Ihre intelligente Plattform zum Deutschlernen von A1 bis B2.",
  emailLabel: "E-Mail",
  passwordLabel: "Passwort",
  roleLabel: "Rolle",
  forgotPassword: "Passwort vergessen?",
  createAccountLink: "Konto erstellen",
  loginButton: "Einloggen",
  loginHeroEyebrow: "German learning SaaS",
  loginHeroTitle: "Lernen, Fortschritte machen und jedes Niveau genau verfolgen.",
  loginHeroText: "Ein moderner Bereich fur Kurse, Tests, Bibliothek, Ubungen und Klassen von A1.1 bis B2.2.",
  signupEyebrow: "Neues Konto",
  signupTitle: "Anmeldung",
  signupText: "Registrieren Sie sich zuerst, dann wird die komplette Plattform geoffnet.",
  fullNameLabel: "Vollstandiger Name",
  phoneLabel: "Telefon",
  desiredLevelLabel: "Gewunschtes Niveau",
  createPasswordLabel: "Passwort",
  profileTypeLabel: "Profil",
  createAccountButton: "Konto erstellen",
  alreadyRegistered: "Schon registriert?",
  coursesEyebrow: "Kurse",
  coursesTitle: "Deutschprogramme",
  allLevels: "Alle Niveaus",
  classesTitle: "Klassenzugang mit Admin-Code",
  classCodeEyebrow: "Klassencode",
  classCodeTitle: "Geben Sie den Code vom Admin ein",
  classCodeText: "Jede Klasse von A1.1 bis B2.2 wird nur mit ihrem Zugangscode geoffnet.",
  codeLabel: "Code",
  openClass: "Klasse offnen",
  activeClass: "Aktive Klasse",
  noOpenClass: "Keine Klasse geoffnet",
  activeClassHelp: "Nutzen Sie einen vom Admin erstellten Code, um die Klasseninformationen anzuzeigen.",
  studentWorkspace: "Lernbereich",
  classWorkspaceTitle: "Ihr Klassenbereich",
  validCode: "Gultiger Code",
  courseLinks: "Kurslinks",
  exams: "Prufungen",
  personalFollow: "Personliche Begleitung",
  seeAll: "Alles ansehen",
  resources: "Ressourcen",
  placementEyebrow: "Einstufung",
  testTitle: "Vollstandiger Einstufungstest",
  testText: "PROF. SLIM Bewertung in Grammatik, Wortschatz, Lesen, Audio-Simulation, Schreiben und Sprechen.",
  audioTitle: "B1 Audio - Horen",
  audioText: "Horen Sie das Audio und beantworten Sie dann die Fragen 21 bis 25.",
  audioFallback: "Ihr Browser unterstutzt den Audioplayer nicht.",
  yourAnswer: "Ihre Antwort",
  seeResult: "Ergebnis anzeigen",
  result: "Ergebnis",
  waiting: "Wartet",
  quizAdviceStart: "Beantworten Sie die 25 automatischen Fragen, um das empfohlene Niveau anzuzeigen.",
  autoScore: "Automatische Punktzahl",
  writingSpeakingCorrection: "Die Teile Schreiben und Sprechen ergeben 5 Punkte, die vom Lehrer korrigiert werden.",
  writingScore: "Schreiben: 2 Punkte",
  oralScore: "Sprechen: 3 Punkte",
  totalScore: "Moglich gesamt: 30 Punkte",
  libraryTitle: "PDF-Bibliothek",
  libraryText: "Dateien in der Plattform mit Zugriff zum Offnen oder Herunterladen.",
  libraryDesc1: "B1-Leseubungsblatt fur Training und Bewertung.",
  libraryDesc2: "Zweite Version der B1-Leseubungen.",
  libraryDesc3: "Losungsschlussel fur die B1-Leseubungen.",
  libraryDesc4: "Zusatzliche Korrekturversion fur die B1-Reading-Ubungen.",
  open: "Offnen",
  download: "Herunterladen",
  practiceEyebrow: "Ubung",
  exercisesTitle: "Ubungen vom Lehrer",
  exercisesText: "Vom Lehrer veroffentlichte Ubungen erscheinen hier zum Offnen oder Herunterladen.",
  workToDo: "Zu erledigen",
  creationEyebrow: "Erstellung",
  registerCourseTitle: "Kursregistrierung",
  registerCourseText: "Fugen Sie einen Kurs mit Niveau, Lehrer und Ressourcen hinzu.",
  courseTitleLabel: "Kurstitel",
  teacherLabel: "Lehrer",
  durationLabel: "Dauer",
  coursePdfLabel: "Kurs-PDF",
  youtubeLabel: "YouTube-Link",
  descriptionLabel: "Beschreibung",
  save: "Speichern",
  adminTitle: "Admin-Seite",
  students: "Lernende",
  teachers: "Lehrer",
  coursesMetric: "Kurse",
  classesMetric: "Klassen",
  newThisMonth: "47 neu diesen Monat",
  activeClasses: "8 aktive Klassen",
  publishedCatalog: "Veroffentlichter Katalog",
  activeCodes: "Aktive Codes",
  passedThisWeek: "Diese Woche absolviert",
  classManagement: "Klassenverwaltung",
  createClassCode: "Klassencode erstellen",
  adminClassText: "Der Admin schreibt einen eindeutigen Code. Lernende nutzen ihn auf der Klassenseite.",
  classCodeLabel: "Klassencode",
  scheduleLabel: "Zeitplan",
  goalLabel: "Ziel",
  saveCode: "Code speichern",
  exerciseManagement: "Ubungsverwaltung",
  publishExercise: "Ubung veroffentlichen",
  adminExerciseText: "Der Lehrer fugt eine Ubung mit PDF-Datei oder Link hinzu. Lernende konnen sie danach herunterladen.",
  titleLabel: "Titel",
  typeLabel: "Typ",
  deadlineLabel: "Frist",
  uploadPdfLabel: "PDF vom Computer hinzufugen",
  fileLinkLabel: "PDF-Datei oder Link",
  instructionLabel: "Anweisung",
  publishExerciseButton: "Ubung veroffentlichen",
  userLabel: "Benutzer",
  actionLabel: "Aktion",
  view: "Ansehen",
  pdfsLabel: "PDFs",
  noPdf: "Kein PDF importiert",
  noYoutube: "Kein YouTube-Link",
  progressivePath: "Progressiver Lernweg mit Videos, Blattern, korrigierten Ubungen und Abschlusstest.",
  noExerciseClass: "Fur diese Klasse wurde noch keine Ubung veroffentlicht.",
  noCourseClass: "Mit diesem Niveau ist noch kein Kurs verknupft.",
  takeExam: "Prufung machen",
  lastResult: "Letztes Ergebnis",
  noTestDone: "Kein Test abgeschlossen",
  enterCodeExercises: "Geben Sie einen Klassencode ein, um Ubungen anzuzeigen.",
  enterCodeCourses: "Geben Sie einen Klassencode ein, um Kurslinks anzuzeigen.",
  enterCodeExams: "Geben Sie einen Klassencode ein, um Prufungen anzuzeigen.",
  noFollowup: "Ohne aktive Klasse ist keine Begleitung verfugbar.",
  recommendedLevel: "empfohlenes Niveau",
  currentLevel: "Aktuelles Niveau",
  availableExercises: "Verfugbare Ubungen",
  launchedCourses: "Gestartete Kurse",
  exerciseSingular: "Ubung",
  exercisePlural: "Ubungen",
  lessonsWord: "Lektionen",
  openVerb: "Geoffnet",
  requiredCode: "Code erforderlich",
  teacherFallback: "Lehrer",
  scheduleFallback: "Zeitplan",
  roleStudentOption: "Student",
  roleTeacherOption: "Lehrer",
  roleAdminOption: "Admin",
  emailPlaceholder: "name@email.com",
  passwordPlaceholder: "Ihr Passwort",
  namePlaceholder: "Ihr Name"
  ,
  loginSuccess: "Demo-Login erfolgreich.",
  signupSuccess: "Demo-Konto erfolgreich erstellt."
});

const localizedDefaults = {
  en: {
    courseTitles: {
      "A1.1": "First steps in German",
      "A1.2": "Daily conversation",
      "A2.1": "German for travel",
      "A2.2": "Active A2 grammar",
      "B1.1": "Work and studies",
      "B1.2": "B1 preparation",
      "B2.1": "Professional German",
      "B2.2": "B2 exam preparation"
    },
    courseDescriptions: {
      "A1.1": "Alphabet, greetings, introductions and first dialogues.",
      "A1.2": "Family, shopping, schedules, directions and simple situations.",
      "A2.1": "Travel, housing, appointments, health and short messages.",
      "A2.2": "Perfect tense, subordinate clauses, comparison and announcements.",
      "B1.1": "Express opinions and talk about work, studies and projects.",
      "B1.2": "B1 certification preparation, reading, speaking and formal emails.",
      "B2.1": "Debates, media, argumentation and professional vocabulary.",
      "B2.2": "Exam simulation, writing, speaking and complex comprehension."
    },
    classTitles: {
      "A1.1": "Class A1.1 - Beginners",
      "A1.2": "Class A1.2 - Daily life",
      "A2.1": "Class A2.1 - Practical autonomy",
      "A2.2": "Class A2.2 - Consolidation",
      "B1.1": "Class B1.1 - Expression",
      "B1.2": "Class B1.2 - Certification",
      "B2.1": "Class B2.1 - Professional",
      "B2.2": "Class B2.2 - Exam"
    },
    classGoals: {
      "A1.1": "Alphabet, introductions, greetings",
      "A1.2": "Shopping, family, directions",
      "A2.1": "Travel, appointments, health",
      "A2.2": "Perfect tense, comparison, announcements",
      "B1.1": "Work, studies, opinions",
      "B1.2": "B1 exam preparation",
      "B2.1": "Debate, media, professional German",
      "B2.2": "Goethe B2 preparation"
    },
    modules: {
      "A1.1": ["Hallo und Tschuss", "Regular verbs", "Articles der/die/das"],
      "A1.2": ["Accusative basics", "W questions", "Short dialogues"],
      "A2.1": ["Perfect tense", "Dative basics", "Useful prepositions"],
      "A2.2": ["Subordinate clauses", "Comparative", "Guided listening"],
      "B1.1": ["Konjunktiv II", "Connectors", "Formal emails"],
      "B1.2": ["Passive basics", "B1 reading", "Structured speaking"],
      "B2.1": ["Nominalization", "Argumentative speech", "Media"],
      "B2.2": ["Redemittel", "Goethe simulation", "Structured essays"]
    }
  },
  de: {
    courseTitles: {
      "A1.1": "Erste Schritte auf Deutsch",
      "A1.2": "Alltagsgesprache",
      "A2.1": "Deutsch fur Reisen",
      "A2.2": "Aktive Grammatik A2",
      "B1.1": "Arbeit und Studium",
      "B1.2": "Vorbereitung B1",
      "B2.1": "Berufsdeutsch",
      "B2.2": "Vorbereitung B2-Prufung"
    },
    courseDescriptions: {
      "A1.1": "Alphabet, Begrussungen, Vorstellung und erste Dialoge.",
      "A1.2": "Familie, Einkaufen, Uhrzeiten, Wegbeschreibungen und einfache Situationen.",
      "A2.1": "Reisen, Wohnen, Termine, Gesundheit und kurze Nachrichten.",
      "A2.2": "Perfekt, Nebensatze, Vergleich und Verstehen von Ansagen.",
      "B1.1": "Meinungen ausdrucken und uber Arbeit, Studium und Projekte sprechen.",
      "B1.2": "B1-Zertifikatsvorbereitung, Lesen, Sprechen und formelle E-Mails.",
      "B2.1": "Debatten, Medien, Argumentation und beruflicher Wortschatz.",
      "B2.2": "Prufungssimulation, Schreiben, Sprechen und komplexes Verstehen."
    },
    classTitles: {
      "A1.1": "Klasse A1.1 - Anfanger",
      "A1.2": "Klasse A1.2 - Alltag",
      "A2.1": "Klasse A2.1 - Praktische Selbststandigkeit",
      "A2.2": "Klasse A2.2 - Festigung",
      "B1.1": "Klasse B1.1 - Ausdruck",
      "B1.2": "Klasse B1.2 - Zertifikat",
      "B2.1": "Klasse B2.1 - Beruflich",
      "B2.2": "Klasse B2.2 - Prufung"
    },
    classGoals: {
      "A1.1": "Alphabet, Vorstellung, Begrussungen",
      "A1.2": "Einkaufen, Familie, Wegbeschreibungen",
      "A2.1": "Reisen, Termine, Gesundheit",
      "A2.2": "Perfekt, Vergleich, Ansagen",
      "B1.1": "Arbeit, Studium, Meinungen",
      "B1.2": "Vorbereitung auf die B1-Prufung",
      "B2.1": "Debatte, Medien, Berufsdeutsch",
      "B2.2": "Vorbereitung Goethe B2"
    },
    modules: {
      "A1.1": ["Hallo und Tschuss", "Regelmassige Verben", "Artikel der/die/das"],
      "A1.2": ["Akkusativ Anfang", "W-Fragen", "Kurze Dialoge"],
      "A2.1": ["Perfekt", "Dativ Anfang", "Nutzliche Prapositionen"],
      "A2.2": ["Nebensatze", "Komparativ", "Geleitetes Horen"],
      "B1.1": ["Konjunktiv II", "Konnektoren", "Formelle E-Mails"],
      "B1.2": ["Passiv Anfang", "Lesen B1", "Strukturiertes Sprechen"],
      "B2.1": ["Nominalisierung", "Argumentierender Vortrag", "Medien"],
      "B2.2": ["Redemittel", "Goethe-Simulation", "Strukturierte Aufsatze"]
    }
  }
};

function normalizeCode(code) {
  return code.trim().toUpperCase().replace(/\s+/g, "-");
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function saveClassRooms() {
  localStorage.setItem("profSlimClassRooms", JSON.stringify(classRooms));
}

function saveCourses() {
  localStorage.setItem("profSlimCourses", JSON.stringify(courses));
}

function saveExercises() {
  localStorage.setItem("profSlimExercises", JSON.stringify(exercises));
}

function t(key) {
  return i18n[currentLanguage]?.[key] || i18n.fr[key] || key;
}

function getRoleLabel(role = currentRole) {
  if (role === "admin") return t("roleAdmin");
  if (role === "teacher") return t("roleTeacher");
  return t("roleStudent");
}

function getCurrentProfile() {
  return profiles[currentRole] || {
    fullName: "",
    email: "",
    level: "A1.1"
  };
}

function saveProfiles() {
  localStorage.setItem("profSlimProfiles", JSON.stringify(profiles));
}

function setLanguage(language) {
  currentLanguage = i18n[language] ? language : "fr";
  localStorage.setItem("profSlimLanguage", currentLanguage);
  document.documentElement.lang = currentLanguage;

  languageSelects.forEach((select) => {
    select.value = currentLanguage;
  });

  document.querySelectorAll("[data-i18n]").forEach((item) => {
    item.textContent = t(item.dataset.i18n);
  });

  renderLevels();
  renderCourses(courseFilter?.value || "all");
  renderExercises();
  applyBodyTranslations();
  updateRoleInterface();
  pageTitle.textContent = getPageTitle(document.querySelector(".page.is-visible"));
  renderProfile();
}

function getPageTitle(page) {
  if (!page) return t("page_accueil");
  return t(`page_${page.id}`) || page.dataset.title || "";
}

function localizedCourseText(course, field) {
  const translations = localizedDefaults[currentLanguage]?.[field];
  return translations?.[course.level] || course[field === "courseTitles" ? "title" : "description"];
}

function localizedClassText(classRoom, field) {
  const translations = localizedDefaults[currentLanguage]?.[field];
  return translations?.[classRoom.level] || classRoom[field === "classTitles" ? "title" : "goal"];
}

function localizedModules(level) {
  return localizedDefaults[currentLanguage]?.modules?.[level] || levels.find((item) => item.level === level)?.modules || [];
}

function localizedLessons(value) {
  const count = String(value || "").match(/\d+/)?.[0];
  return count ? `${count} ${t("lessonsWord")}` : value;
}

function setText(selector, key) {
  const element = document.querySelector(selector);
  if (element) element.textContent = t(key);
}

function setAllText(selector, key) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = t(key);
  });
}

function setLabelText(selector, key) {
  const label = document.querySelector(selector);
  if (!label) return;

  const textNode = Array.from(label.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
  if (textNode) {
    textNode.textContent = `${t(key)}\n              `;
  }
}

function setLeadingText(selector, key) {
  const element = document.querySelector(selector);
  if (!element) return;

  const textNode = Array.from(element.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
  if (textNode) textNode.textContent = `${t(key)} `;
}

function setPlaceholder(selector, key) {
  const element = document.querySelector(selector);
  if (element) element.placeholder = t(key);
}

function setOptionText(selector, index, key) {
  const option = document.querySelector(selector)?.options[index];
  if (option) option.textContent = t(key);
}

function applyBodyTranslations() {
  document.title = `${t("studentMode")} - ${t("page_accueil")}`;

  [
    ["#accueil .hero-copy > .eyebrow", "homeEyebrow"],
    ["#accueil .hero-copy h2", "homeHeroTitle"],
    ["#accueil .hero-copy > p:not(.eyebrow)", "homeHeroText"],
    ["#accueil .hero-actions .primary-action", "homeHeroCourses"],
    ["#accueil .hero-actions .secondary-action", "homeHeroTest"],
    ["#accueil .metrics-grid article:nth-child(1) span", "metricClasses"],
    ["#accueil .metrics-grid article:nth-child(2) span", "metricLessons"],
    ["#accueil .metrics-grid article:nth-child(3) span", "metricExercises"],
    ["#accueil .metrics-grid article:nth-child(4) span", "metricTests"],
    ["#accueil .section-heading .eyebrow", "homePathEyebrow"],
    ["#accueil .section-heading h2", "homePathTitle"],
    ["#accueil .section-heading .text-link", "homePathLink"],
    ["#accueil .feature-grid article:nth-child(1) h3", "featureLoginTitle"],
    ["#accueil .feature-grid article:nth-child(1) p", "featureLoginText"],
    ["#accueil .feature-grid article:nth-child(2) h3", "featureCoursesTitle"],
    ["#accueil .feature-grid article:nth-child(2) p", "featureCoursesText"],
    ["#accueil .feature-grid article:nth-child(3) h3", "featureLibraryTitle"],
    ["#accueil .feature-grid article:nth-child(3) p", "featureLibraryText"],
    ["#accueil .feature-grid article:nth-child(4) h3", "featureFollowTitle"],
    ["#accueil .feature-grid article:nth-child(4) p", "featureFollowText"],
    ["#login .login-card .eyebrow:not([data-i18n])", "loginEyebrow"],
    ["#login .login-card h2", "loginTitle"],
    ["#login .login-card div:nth-of-type(2) p:not(.eyebrow)", "loginText"],
    ["#login .login-options a:nth-child(1)", "forgotPassword"],
    ["#login .login-options a:nth-child(2)", "createAccountLink"],
    ["#login .login-submit", "loginButton"],
    ["#login .login-hero-copy .eyebrow", "loginHeroEyebrow"],
    ["#login .login-hero-copy h3", "loginHeroTitle"],
    ["#login .login-hero-copy p:not(.eyebrow)", "loginHeroText"],
    ["#inscription .eyebrow", "signupEyebrow"],
    ["#inscription h2", "signupTitle"],
    ["#inscription .auth-card > div:nth-child(2) p:not(.eyebrow)", "signupText"],
    ["#inscription button[type='submit']", "createAccountButton"],
    ["#cours .eyebrow", "coursesEyebrow"],
    ["#cours h2", "coursesTitle"],
    ["#classes .section-heading .eyebrow", "navClasses"],
    ["#classes .section-heading h2", "classesTitle"],
    ["#classes .class-access-panel .eyebrow", "classCodeEyebrow"],
    ["#classes .class-access-panel h3", "classCodeTitle"],
    ["#classes .class-access-panel p:not(.eyebrow)", "classCodeText"],
    ["#classCodeForm button", "openClass"],
    ["#activeClassPanel > span", "activeClass"],
    ["#classWorkspace .workspace-header .eyebrow", "studentWorkspace"],
    ["#workspaceCode", "validCode"],
    ["#classWorkspace .workspace-panel:nth-child(1) .panel-title span", "navExercises"],
    ["#classWorkspace .workspace-panel:nth-child(1) .panel-title a", "seeAll"],
    ["#classWorkspace .workspace-panel:nth-child(2) .panel-title span", "courseLinks"],
    ["#classWorkspace .workspace-panel:nth-child(2) .panel-title a", "navCourses"],
    ["#classWorkspace .workspace-panel:nth-child(3) .panel-title span", "exams"],
    ["#classWorkspace .workspace-panel:nth-child(3) .panel-title a", "navTest"],
    ["#classWorkspace .workspace-panel:nth-child(4) .panel-title span", "personalFollow"],
    ["#classWorkspace .workspace-panel:nth-child(4) .panel-title a", "resources"],
    ["#test .test-panel > .eyebrow", "placementEyebrow"],
    ["#test .test-panel > h2", "testTitle"],
    ["#test .test-panel > p", "testText"],
    [".audio-test-card strong", "audioTitle"],
    [".audio-test-card p", "audioText"],
    ["#levelQuiz button[type='submit']", "seeResult"],
    [".result-panel > span", "result"],
    ["#bibliothek .eyebrow", "navLibrary"],
    ["#bibliothek h2", "libraryTitle"],
    ["#bibliothek .section-heading p:not(.eyebrow)", "libraryText"],
    ["#bibliothek .library-card:nth-child(1) p", "libraryDesc1"],
    ["#bibliothek .library-card:nth-child(2) p", "libraryDesc2"],
    ["#bibliothek .library-card:nth-child(3) p", "libraryDesc3"],
    ["#bibliothek .library-card:nth-child(4) p", "libraryDesc4"],
    ["#exercices .eyebrow", "practiceEyebrow"],
    ["#exercices h2", "exercisesTitle"],
    ["#exercices .section-heading p:not(.eyebrow)", "exercisesText"],
    [".exercise-toolbar .badge", "workToDo"],
    ["#enregistrement .eyebrow", "creationEyebrow"],
    ["#enregistrement h2", "registerCourseTitle"],
    ["#enregistrement .auth-card > div p:not(.eyebrow)", "registerCourseText"],
    ["#courseForm button[type='submit']", "save"],
    ["#admin .section-heading .eyebrow", "navAdmin"],
    ["#admin .section-heading h2", "adminTitle"],
    ["#admin .admin-grid article:nth-child(1) span", "students"],
    ["#admin .admin-grid article:nth-child(1) p", "newThisMonth"],
    ["#admin .admin-grid article:nth-child(2) span", "teachers"],
    ["#admin .admin-grid article:nth-child(2) p", "activeClasses"],
    ["#admin .admin-grid article:nth-child(3) span", "coursesMetric"],
    ["#admin .admin-grid article:nth-child(3) p", "publishedCatalog"],
    ["#admin .admin-grid article:nth-child(4) span", "classesMetric"],
    ["#admin .admin-grid article:nth-child(4) p", "activeCodes"],
    ["#admin .admin-grid article:nth-child(5) span", "navTest"],
    ["#admin .admin-grid article:nth-child(5) p", "passedThisWeek"],
    ["#admin .admin-class-manager:nth-of-type(1) .eyebrow", "classManagement"],
    ["#admin .admin-class-manager:nth-of-type(1) h3", "createClassCode"],
    ["#admin .admin-class-manager:nth-of-type(1) > div p:not(.eyebrow)", "adminClassText"],
    ["#adminClassForm button", "saveCode"],
    ["#admin .admin-class-manager:nth-of-type(2) .eyebrow", "exerciseManagement"],
    ["#admin .admin-class-manager:nth-of-type(2) h3", "publishExercise"],
    ["#admin .admin-class-manager:nth-of-type(2) > div p:not(.eyebrow)", "adminExerciseText"],
    ["#adminExerciseForm button", "publishExerciseButton"]
  ].forEach(([selector, key]) => setText(selector, key));

  if (!getActiveClass()) {
    setText("#activeClassTitle", "noOpenClass");
    setText("#activeClassDetails", "activeClassHelp");
    setText("#workspaceTitle", "classWorkspaceTitle");
    setText("#workspaceCode", "requiredCode");
  }

  [
    ["#login .login-form label:nth-of-type(1)", "emailLabel"],
    ["#login .login-form label:nth-of-type(2)", "passwordLabel"],
    ["#login .login-form label:nth-of-type(3)", "roleLabel"],
    ["#inscription label:nth-of-type(1)", "fullNameLabel"],
    ["#inscription label:nth-of-type(2)", "emailLabel"],
    ["#inscription label:nth-of-type(3)", "phoneLabel"],
    ["#inscription label:nth-of-type(4)", "desiredLevelLabel"],
    ["#inscription label:nth-of-type(5)", "createPasswordLabel"],
    ["#inscription label:nth-of-type(6)", "profileTypeLabel"],
    ["#classCodeForm label", "codeLabel"],
    ["#courseForm label:nth-of-type(1)", "courseTitleLabel"],
    ["#courseForm label:nth-of-type(2)", "profileLevel"],
    ["#courseForm label:nth-of-type(3)", "teacherLabel"],
    ["#courseForm label:nth-of-type(4)", "durationLabel"],
    ["#courseForm label:nth-of-type(5)", "coursePdfLabel"],
    ["#courseForm label:nth-of-type(6)", "youtubeLabel"],
    ["#courseForm label:nth-of-type(7)", "descriptionLabel"],
    ["#adminClassForm label:nth-of-type(1)", "profileLevel"],
    ["#adminClassForm label:nth-of-type(2)", "classCodeLabel"],
    ["#adminClassForm label:nth-of-type(3)", "teacherLabel"],
    ["#adminClassForm label:nth-of-type(4)", "scheduleLabel"],
    ["#adminClassForm label:nth-of-type(5)", "goalLabel"],
    ["#adminExerciseForm label:nth-of-type(1)", "titleLabel"],
    ["#adminExerciseForm label:nth-of-type(2)", "typeLabel"],
    ["#adminExerciseForm label:nth-of-type(3)", "profileLevel"],
    ["#adminExerciseForm label:nth-of-type(4)", "teacherLabel"],
    ["#adminExerciseForm label:nth-of-type(5)", "deadlineLabel"],
    ["#adminExerciseForm label:nth-of-type(6)", "uploadPdfLabel"],
    ["#adminExerciseForm label:nth-of-type(7)", "fileLinkLabel"],
    ["#adminExerciseForm label:nth-of-type(8)", "instructionLabel"]
  ].forEach(([selector, key]) => setLabelText(selector, key));

  setText("#courseFilter option[value='all']", "allLevels");
  setLabelText(".writing-answer", "yourAnswer");
  setAllText(".library-actions .pdf-link", "open");
  setAllText(".library-actions .download-link", "download");
  setAllText(".admin-table button", "view");
  setText(".table-head span:nth-child(1)", "userLabel");
  setText(".table-head span:nth-child(2)", "roleLabel");
  setText(".table-head span:nth-child(3)", "profileLevel");
  setText(".table-head span:nth-child(4)", "actionLabel");
  setText(".score-list p:nth-child(2)", "writingScore");
  setText(".score-list p:nth-child(3)", "oralScore");
  setText(".score-list p:nth-child(4)", "totalScore");

  if (!latestTestResult) {
    setText("#quizResult", "waiting");
    setText("#quizAdvice", "quizAdviceStart");
  }

  setOptionText("#loginRole", 0, "roleStudentOption");
  setOptionText("#loginRole", 1, "roleTeacherOption");
  setOptionText("#loginRole", 2, "roleAdminOption");
  setOptionText("#inscription form label:nth-of-type(6) select", 0, "roleStudentOption");
  setOptionText("#inscription form label:nth-of-type(6) select", 1, "roleTeacherOption");
  setLeadingText("#inscription .auth-switch", "alreadyRegistered");
  setText("#inscription .auth-switch a", "loginButton");

  setPlaceholder("#login input[type='email']", "emailPlaceholder");
  setPlaceholder("#login input[type='password']", "passwordPlaceholder");
  setPlaceholder("#inscription input[type='text']", "namePlaceholder");
  setPlaceholder("#profileFullName", "namePlaceholder");
  setPlaceholder("#profileEmail", "emailPlaceholder");
}

function getProfileAccessItems() {
  if (currentRole === "admin") {
    return [
      ["Admin", t("page_admin"), t("profileAdminAccessUsers")],
      [t("navRegisterCourse"), t("page_enregistrement"), t("profileAdminAccessCourses")],
      [t("navProfile"), t("page_profil"), t("profileAdminAccessPrefs")]
    ];
  }

  if (currentRole === "teacher") {
    return [
      [t("navRegisterCourse"), t("page_enregistrement"), t("profileTeacherAccessCourses")],
      [t("navProfile"), t("page_profil"), t("profileTeacherAccessPrefs")],
      [t("navExercises"), t("profileAccessTitle"), t("profileTeacherAccessExercises")]
    ];
  }

  return [
    [t("navCourses"), t("page_cours"), t("profileStudentAccessCourses")],
    [t("navClasses"), t("page_classes"), t("profileStudentAccessClasses")],
    [t("navExercises"), t("page_exercices"), t("profileStudentAccessExercises")]
  ];
}

function renderProfile() {
  if (!profileForm) return;

  const activeProfile = getCurrentProfile();
  const defaultName = currentRole === "admin"
    ? "Admin PROF. SLIM"
    : currentRole === "teacher"
      ? "Professeur PROF. SLIM"
      : "Etudiant PROF. SLIM";
  const summaryKey = currentRole === "admin"
    ? "profileSummaryAdmin"
    : currentRole === "teacher"
      ? "profileSummaryTeacher"
      : "profileSummaryStudent";

  profileFullName.value = activeProfile.fullName || defaultName;
  profileEmail.value = activeProfile.email || "";
  profileRole.value = getRoleLabel();
  profileLevel.value = activeProfile.level || "A1.1";
  profileName.textContent = activeProfile.fullName || defaultName;
  profileSummary.textContent = t(summaryKey);
  profileAccessList.innerHTML = getProfileAccessItems().map(([label, title, description]) => `
    <article>
      <strong>${escapeHTML(label)}</strong>
      <span>${escapeHTML(title)}</span>
      <p>${escapeHTML(description)}</p>
    </article>
  `).join("");
}

function readPDFUpload(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve("");
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(new Error("Lecture du PDF impossible.")));
    reader.readAsDataURL(file);
  });
}

function normalizeRole(value) {
  const role = String(value || "").toLowerCase();

  if (role.includes("admin")) return "admin";
  if (role.includes("prof") || role.includes("teacher")) return "teacher";
  return "student";
}

function getDefaultPageForRole(role = currentRole) {
  if (role === "admin") return defaultAdminPage;
  if (role === "teacher") return defaultTeacherPage;
  return defaultStudentPage;
}

function canAccessPage(pageId) {
  const target = document.querySelector(`#${pageId}`);
  const roles = target?.dataset.roles;

  if (!roles || authPages.includes(pageId)) return true;
  return roles.split(" ").includes(currentRole);
}

function updateRoleInterface() {
  document.body.dataset.role = currentRole;
  pageLinks.forEach((link) => {
    const roles = link.dataset.roles;
    const isAllowed = !roles || roles.split(" ").includes(currentRole);
    link.hidden = isAuthenticated && !isAllowed;
  });

  if (currentRole === "admin") {
    sessionRoleLabel.textContent = t("adminSpace");
    activeLevelLabel.textContent = t("allPermissions");
    platformModeLabel.textContent = t("adminMode");
  } else if (currentRole === "teacher") {
    sessionRoleLabel.textContent = t("teacherSpace");
    activeLevelLabel.textContent = t("courseManagement");
    platformModeLabel.textContent = t("teacherMode");
  } else {
    sessionRoleLabel.textContent = t("studentSpace");
    if (!getActiveClass()) {
      const profileLevelValue = latestTestResult?.recommendation || getCurrentProfile().level || "A1.1";
      activeLevelLabel.textContent = `${t("profileLevel")} ${profileLevelValue}`;
    }
    platformModeLabel.textContent = t("studentMode");
  }

  renderProfile();
}

function getActiveClass() {
  return classRooms.find((item) => normalizeCode(item.code) === unlockedClassCode);
}

function renderLevels() {
  const activeClass = getActiveClass();

  if (activeClass) {
    activeClassTitle.textContent = localizedClassText(activeClass, "classTitles");
    activeClassDetails.textContent = `${activeClass.teacher} - ${activeClass.schedule} - ${localizedClassText(activeClass, "classGoals")}`;
  }

  levelGrid.innerHTML = classRooms.map((item) => {
    const isOpen = normalizeCode(item.code) === unlockedClassCode;
    const modules = localizedModules(item.level);

    return `
    <article class="level-card class-card ${isOpen ? "is-open" : ""}">
      <div class="class-card-top">
        <strong>${item.level}</strong>
        <span class="badge ${isOpen ? "open" : ""}">${isOpen ? t("openVerb") : t("requiredCode")}</span>
      </div>
      <h3>${localizedClassText(item, "classTitles")}</h3>
      <p>${localizedClassText(item, "classGoals")}</p>
      <dl class="class-meta">
        <div>
          <dt>${t("teacherFallback")}</dt>
          <dd>${item.teacher}</dd>
        </div>
        <div>
          <dt>${t("scheduleFallback")}</dt>
          <dd>${item.schedule}</dd>
        </div>
      </dl>
      <ul class="module-list">
        ${modules.map((module) => `<li>${module}</li>`).join("")}
      </ul>
    </article>
  `;
  }).join("");

  adminClassCount.textContent = classRooms.length;
  adminClassList.innerHTML = classRooms.map((item) => `
    <article>
      <span class="badge level">${item.level}</span>
      <strong>${item.code}</strong>
      <p>${item.teacher} - ${item.schedule}</p>
    </article>
  `).join("");
  renderClassWorkspace();
}

function renderClassWorkspace() {
  const activeClass = getActiveClass();

  if (!activeClass) {
    classWorkspace.classList.remove("is-visible");
    workspaceTitle.textContent = t("classWorkspaceTitle");
    workspaceCode.textContent = t("requiredCode");
    classExerciseList.innerHTML = `<p>${t("enterCodeExercises")}</p>`;
    classCourseList.innerHTML = `<p>${t("enterCodeCourses")}</p>`;
    classExamList.innerHTML = `<p>${t("enterCodeExams")}</p>`;
    studentFollowup.innerHTML = `<p>${t("noFollowup")}</p>`;
    return;
  }

  const sameLevelExercises = exercises.filter((exercise) => exercise.level === activeClass.level);
  const sameLevelCourses = courses.filter((course) => course.level === activeClass.level);
  const testLabel = latestTestResult
    ? `${latestTestResult.score}/25 - ${t("recommendedLevel")} ${latestTestResult.recommendation}`
    : t("noTestDone");

  classWorkspace.classList.add("is-visible");
  workspaceTitle.textContent = localizedClassText(activeClass, "classTitles");
  workspaceCode.textContent = activeClass.code;

  classExerciseList.innerHTML = sameLevelExercises.length
    ? sameLevelExercises.map((exercise) => `
      <div class="workspace-item">
        <strong>${escapeHTML(exercise.title)}</strong>
        <span>${escapeHTML(exercise.category || "Exercice")} - ${escapeHTML(exercise.deadline)}</span>
        <div class="workspace-actions">
          <a href="${escapeHTML(exercise.file)}" target="_blank" rel="noopener">${t("open")}</a>
          <a href="${escapeHTML(exercise.file)}" download>${t("download")}</a>
        </div>
      </div>
    `).join("")
    : `<p>${t("noExerciseClass")}</p>`;

  classCourseList.innerHTML = sameLevelCourses.length
    ? sameLevelCourses.map((course) => {
      const firstPdf = course.pdfs?.[0];
      const firstVideo = course.videos?.[0];
      return `
        <div class="workspace-item">
          <strong>${escapeHTML(localizedCourseText(course, "courseTitles"))}</strong>
          <span>${escapeHTML(course.teacher)} - ${escapeHTML(localizedLessons(course.lessons))}</span>
          <div class="workspace-actions">
            ${firstPdf ? `<a href="${escapeHTML(firstPdf.url)}" target="_blank" rel="noopener">PDF</a>` : ""}
            ${firstVideo ? `<a href="${escapeHTML(firstVideo.url)}" target="_blank" rel="noopener">YouTube</a>` : ""}
          </div>
        </div>
      `;
    }).join("")
    : `<p>${t("noCourseClass")}</p>`;

  classExamList.innerHTML = `
    <div class="workspace-item">
      <strong>${t("page_test")} PROF. SLIM</strong>
      <span>${escapeHTML(activeClass.level)} - QCM, Schreiben, Sprechen</span>
      <div class="workspace-actions">
        <a href="#test" data-page-link="test">${t("takeExam")}</a>
      </div>
    </div>
    <div class="workspace-item">
      <strong>${t("lastResult")}</strong>
      <span>${escapeHTML(testLabel)}</span>
    </div>
  `;

  studentFollowup.innerHTML = `
    <div class="followup-stat">
      <strong>${escapeHTML(activeClass.level)}</strong>
      <span>${t("currentLevel")}</span>
    </div>
    <div class="followup-stat">
      <strong>${sameLevelExercises.length}</strong>
      <span>${t("availableExercises")}</span>
    </div>
    <div class="followup-stat">
      <strong>${sameLevelCourses.length}</strong>
      <span>${t("launchedCourses")}</span>
    </div>
    <ul class="module-list">
      ${localizedModules(activeClass.level).map((module) => `<li>${escapeHTML(module)}</li>`).join("")}
    </ul>
  `;
}

function openClassByCode(code) {
  const normalizedCode = normalizeCode(code);
  const foundClass = classRooms.find((item) => normalizeCode(item.code) === normalizedCode);

  if (!foundClass) {
    classCodeStatus.textContent = "Code incorrect ou classe introuvable.";
    activeClassTitle.textContent = "Aucune classe ouverte";
    activeClassDetails.textContent = "Verifiez le code donne par l'admin puis essayez encore.";
    unlockedClassCode = "";
    sessionStorage.removeItem("profSlimUnlockedClass");
    renderLevels();
    renderClassWorkspace();
    return;
  }

  unlockedClassCode = normalizedCode;
  sessionStorage.setItem("profSlimUnlockedClass", normalizedCode);
  classCodeStatus.textContent = `Classe ${foundClass.level} ouverte avec succes.`;
  activeClassTitle.textContent = localizedClassText(foundClass, "classTitles");
  activeClassDetails.textContent = `${foundClass.teacher} - ${foundClass.schedule} - ${localizedClassText(foundClass, "classGoals")}`;
  activeLevelLabel.textContent = `${t("profileLevel")} ${foundClass.level}`;
  renderLevels();
  renderClassWorkspace();
}

function renderCourses(filter = "all") {
  const visibleCourses = filter === "all"
    ? courses
    : courses.filter((course) => course.level === filter);

  document.querySelector("#adminCourseCount").textContent = courses.length;

  courseGrid.innerHTML = visibleCourses.map((course) => {
    const pdfLinks = (course.pdfs || []).map((pdf) => `
      <a class="resource-link pdf-link" href="${escapeHTML(pdf.url)}" target="_blank" rel="noopener">${escapeHTML(pdf.label)}</a>
    `).join("");
    const videoLinks = (course.videos || []).map((video) => `
      <a class="resource-link video-link" href="${escapeHTML(video.url)}" target="_blank" rel="noopener">${escapeHTML(video.label)}</a>
    `).join("");

    return `
    <article class="course-card">
      <div>
        <span class="badge level">${escapeHTML(course.level)}</span>
        <h3>${escapeHTML(localizedCourseText(course, "courseTitles"))}</h3>
        <p>${escapeHTML(localizedCourseText(course, "courseDescriptions") || t("progressivePath"))}</p>
      </div>
      <div class="course-resources">
        <div>
          <strong>${t("pdfsLabel")}</strong>
          ${pdfLinks || `<span>${t("noPdf")}</span>`}
        </div>
        <div>
          <strong>YouTube</strong>
          ${videoLinks || `<span>${t("noYoutube")}</span>`}
        </div>
      </div>
      <div class="course-meta">
        <span class="badge">${escapeHTML(localizedLessons(course.lessons))}</span>
        <span class="badge">${escapeHTML(course.teacher)}</span>
      </div>
    </article>
  `;
  }).join("");
}

function renderExercises() {
  exerciseCountLabel.textContent = `${exercises.length} ${t(exercises.length > 1 ? "exercisePlural" : "exerciseSingular")}`;
  exerciseGrid.innerHTML = exercises.map((exercise) => `
    <article class="exercise-card">
      <div class="exercise-card-head">
        <span class="badge level">${escapeHTML(exercise.level)}</span>
        <span>${escapeHTML(exercise.category || "Exercice")} - ${escapeHTML(exercise.type || "PDF")}</span>
      </div>
      <h3>${escapeHTML(exercise.title)}</h3>
      <p>${escapeHTML(exercise.instruction)}</p>
      <dl class="class-meta">
        <div>
          <dt>${t("teacherLabel")}</dt>
          <dd>${escapeHTML(exercise.teacher)}</dd>
        </div>
        <div>
          <dt>${t("deadlineLabel")}</dt>
          <dd>${escapeHTML(exercise.deadline)}</dd>
        </div>
      </dl>
      <div class="library-actions">
        <a class="resource-link pdf-link" href="${escapeHTML(exercise.file)}" target="_blank" rel="noopener">${t("open")}</a>
        <a class="resource-link download-link" href="${escapeHTML(exercise.file)}" download>${t("download")}</a>
      </div>
    </article>
  `).join("");
}

function setPage(pageId) {
  if (!isAuthenticated && !authPages.includes(pageId)) {
    window.location.hash = "login";
    pageId = "login";
  }

  if (isAuthenticated && authPages.includes(pageId)) {
    const defaultPage = getDefaultPageForRole();
    window.location.hash = defaultPage;
    pageId = defaultPage;
  }

  if (isAuthenticated && !canAccessPage(pageId)) {
    const defaultPage = getDefaultPageForRole();
    window.location.hash = defaultPage;
    pageId = defaultPage;
  }

  const fallback = document.querySelector("#accueil");
  const target = document.querySelector(`#${pageId}`) || fallback;

  pages.forEach((page) => page.classList.toggle("is-visible", page === target));
  pageLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.pageLink === target.id);
  });

  pageTitle.textContent = getPageTitle(target);
  document.body.classList.remove("menu-open");
  applyBodyTranslations();
  updateRoleInterface();
}

function setAuthenticated(value, role = currentRole) {
  isAuthenticated = value;
  currentRole = normalizeRole(role);
  document.body.classList.toggle("is-authenticated", value);
  sessionStorage.setItem("profSlimAuthenticated", String(value));
  sessionStorage.setItem("profSlimRole", currentRole);
  updateRoleInterface();
}

function getCurrentPage() {
  return window.location.hash.replace("#", "") || "accueil";
}

pageLinks.forEach((link) => {
  link.addEventListener("click", () => setPage(link.dataset.pageLink));
});

window.addEventListener("hashchange", () => setPage(getCurrentPage()));

menuButton.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

logoutButton.addEventListener("click", () => {
  sessionStorage.removeItem("profSlimRole");
  setAuthenticated(false, "student");
  window.location.hash = "login";
  setPage("login");
});

courseFilter.addEventListener("change", (event) => {
  renderCourses(event.target.value);
});

languageSelects.forEach((select) => {
  select.addEventListener("change", (event) => {
    setLanguage(event.target.value);
  });
});

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  profiles[currentRole] = {
    fullName: profileFullName.value.trim() || profileName.textContent,
    email: profileEmail.value.trim(),
    level: profileLevel.value
  };
  saveProfiles();
  activeLevelLabel.textContent = `${t("profileLevel")} ${profiles[currentRole].level}`;
  profileStatus.textContent = t("profileSaved");
  renderProfile();
});

classCodeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  openClassByCode(classCodeInput.value);
});

document.querySelector("#signupLevel").addEventListener("change", (event) => {
  activeLevelLabel.textContent = `${t("profileLevel")} ${event.target.value}`;
});

document.querySelector("#levelQuiz").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const score = Array.from({ length: 25 }, (_, index) => `q${index + 1}`).reduce((total, key) => {
    return total + Number(form.get(key) || 0);
  }, 0);

  const result = document.querySelector("#quizResult");
  const advice = document.querySelector("#quizAdvice");
  let recommendation = "A1.1";

  if (score >= 23) {
    recommendation = "B2.1";
  } else if (score >= 19) {
    recommendation = "B1.2";
  } else if (score >= 15) {
    recommendation = "B1.1";
  } else if (score >= 10) {
    recommendation = "A2.1";
  } else if (score >= 6) {
    recommendation = "A1.2";
  }

  result.textContent = recommendation;
  advice.textContent = `${t("autoScore")}: ${score}/25. ${t("recommendedLevel")}: ${recommendation}. ${t("writingSpeakingCorrection")}`;
  activeLevelLabel.textContent = `${t("profileLevel")} ${recommendation}`;
  latestTestResult = { score, recommendation };
  sessionStorage.setItem("profSlimLatestTest", JSON.stringify(latestTestResult));
  renderClassWorkspace();
});

document.querySelectorAll(".demo-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    const selectedRole = form.closest("#login") ? normalizeRole(loginRole.value || loginRole.selectedOptions[0]?.textContent) : "student";
    const defaultPage = getDefaultPageForRole(selectedRole);

    status.textContent = form.closest("#login") ? t("loginSuccess") : t("signupSuccess");
    setAuthenticated(true, selectedRole);
    window.location.hash = defaultPage;
    setPage(defaultPage);
  });
});

document.querySelector("#courseForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#newCourseTitle").value.trim();
  const level = document.querySelector("#newCourseLevel").value;
  const teacher = document.querySelector("#newCourseTeacher").value.trim() || "Equipe pedagogique";
  const duration = document.querySelector("#newCourseDuration").value.trim() || "Nouveau";
  const pdfUrl = document.querySelector("#newCoursePdf").value.trim();
  const youtubeUrl = document.querySelector("#newCourseYoutube").value.trim();
  const description = document.querySelector("#newCourseDescription").value.trim();

  if (!title) return;

  courses.unshift({
    level,
    title,
    lessons: duration,
    teacher,
    description: description || "Cours ajoute par l'admin avec ressources importees.",
    pdfs: pdfUrl ? [{ label: `PDF ${level} - ${title}`, url: pdfUrl }] : [],
    videos: youtubeUrl ? [{ label: `YouTube ${level} - ${title}`, url: youtubeUrl }] : []
  });
  saveCourses();
  document.querySelector("#adminCourseCount").textContent = courses.length;
  renderCourses(courseFilter.value);
  renderClassWorkspace();
  event.currentTarget.reset();
  window.location.hash = "cours";
  setPage("cours");
});

adminClassForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const level = document.querySelector("#adminClassLevel").value;
  const code = normalizeCode(document.querySelector("#adminClassCode").value);
  const teacher = document.querySelector("#adminClassTeacher").value.trim() || "Professeur PROF. SLIM";
  const schedule = document.querySelector("#adminClassSchedule").value.trim() || "Horaire a confirmer";
  const goal = document.querySelector("#adminClassGoal").value.trim() || "Objectif pedagogique a definir";
  const existingIndex = classRooms.findIndex((item) => normalizeCode(item.code) === code);
  const newClass = {
    level,
    title: `Classe ${level} - PROF. SLIM`,
    code,
    teacher,
    schedule,
    goal
  };

  if (existingIndex >= 0) {
    classRooms[existingIndex] = newClass;
    adminClassStatus.textContent = `Code ${code} mis a jour.`;
  } else {
    classRooms.unshift(newClass);
    adminClassStatus.textContent = `Code ${code} enregistre pour ${level}.`;
  }

  saveClassRooms();
  renderLevels();
  event.currentTarget.reset();
});

adminExerciseForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = document.querySelector("#adminExerciseTitle").value.trim();
  const category = document.querySelector("#adminExerciseCategory").value;
  const level = document.querySelector("#adminExerciseLevel").value;
  const teacher = document.querySelector("#adminExerciseTeacher").value.trim() || "Prof. Slim";
  const deadline = document.querySelector("#adminExerciseDeadline").value.trim() || "A confirmer";
  const uploadedFile = document.querySelector("#adminExerciseUpload").files[0];
  const typedFile = document.querySelector("#adminExerciseFile").value.trim();
  const file = uploadedFile ? await readPDFUpload(uploadedFile) : typedFile || "#exercices";
  const instruction = document.querySelector("#adminExerciseInstruction").value.trim() || "Faire l'exercice donne par le professeur.";

  if (!title) return;

  exercises.unshift({
    title,
    level,
    teacher,
    deadline,
    instruction,
    file,
    type: uploadedFile || file.toLowerCase().includes(".pdf") ? "PDF" : "Lien",
    category
  });
  try {
    saveExercises();
  } catch (error) {
    exercises.shift();
    adminExerciseStatus.textContent = "PDF trop grand pour la sauvegarde locale. Utilisez plutot un chemin ou un lien PDF.";
    return;
  }
  renderExercises();
  renderClassWorkspace();
  adminExerciseStatus.textContent = `${category} publie pour ${level}.`;
  event.currentTarget.reset();
});

renderLevels();
renderCourses();
renderExercises();
setAuthenticated(isAuthenticated);
setPage(isAuthenticated ? getCurrentPage() : "login");
setLanguage(currentLanguage);
