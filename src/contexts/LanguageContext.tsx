import { createContext, useContext, useState, useEffect, ReactElement } from 'react';
import { 
  LanguageContextValue, 
  LanguageProviderProps, 
  Language,
  LanguageCode,
  TranslationKey,
  Translations
} from '../types/contexts/language';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Indian Regional Languages
export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' }
];

// Translations for different languages
export const translations: Translations = {
  en: {
    // Navigation
    amaplayer: 'AmaPlayer',
    home: 'Home',
    search: 'Search',
    add: 'Add',
    activity: 'Activity',
    messages: 'Messages',
    profile: 'Profile',
    
    // Landing Page
    heroTitle: 'AmaPlayer',
    heroSubtitle: 'The Ultimate Sports Community Platform',
    heroDescription: 'Connect with athletes, share your achievements, and showcase your talent to the world.',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    features: 'Features',
    featuresTitle: 'Everything You Need for Sports',

    // Welcome Page
    tagline: 'CONNECT COMPETE AND CONQUER',
    subtitle: "LET'S PLAY TOGETHER AND RISE",
    letsPlay: "LET'S PLAY",
    joinForFree: 'Join for Free',
    athlete: 'Athlete',
    coach: 'Coach',
    organization: 'Organization',
    parent: 'Parent',
    vision: 'Our Vision',
    visionText: 'To create a global platform that connects athletes, coaches, and sports enthusiasts, empowering them to showcase their talent and achieve their dreams.',
    mission: 'Our Mission',
    missionText: 'To provide innovative tools and opportunities for athletes to connect, grow, and succeed in their sporting journey while building a vibrant community.',
    
    // Features
    shareAchievements: 'Share Achievements',
    shareAchievementsDesc: 'Showcase your sports victories and milestones with the community.',
    connectAthletes: 'Connect with Athletes',
    connectAthletesDesc: 'Build your network with fellow athletes, coaches, and sports enthusiasts.',
    
    // Authentication
    login: 'Login',
    signup: 'Sign Up',
    signOut: 'Sign Out',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    fullName: 'Full Name',
    forgotPassword: 'Forgot Password?',
    dontHaveAccount: "Don't have an account?",
    alreadyHaveAccount: 'Already have an account?',
    signInWithGoogle: 'Sign in with Google',
    signInWithApple: 'Sign in with Apple',
    continueAsGuest: 'Continue as Guest',
    
    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    close: 'Close',
    
    // Posts
    createPost: 'Create Post',
    whatsOnYourMind: "What's on your mind?",
    sharePost: 'Share Post',
    addPhoto: 'Add Photo',
    addVideo: 'Add Video',
    postShared: 'Post shared successfully!',
    writeCaption: 'Write a caption...',
    
    // Profile
    followers: 'Followers',
    following: 'Following',
    posts: 'Posts',
    editProfile: 'Edit Profile',
    bio: 'Bio',
    location: 'Location',
    website: 'Website',
    logout: 'Logout',
    personalDetails: 'Personal Details',
    name: 'Name',
    age: 'Age',
    heightCm: 'Height (cm)',
    weightKg: 'Weight (kg)',
    sex: 'Sex',
    male: 'Male',
    female: 'Female',
    certificates: 'Certificates',
    achievements: 'Achievements',
    updatePhoto: 'Update Photo',
    saveProfile: 'Save Profile',

    // Profile Extended
    talentShowcase: 'Talent Showcase',
    coachingPortfolio: 'Coaching Portfolio',
    facilityShowcase: 'Facility Showcase',
    videoShowcase: 'Video Showcase',
    uploadVideo: 'Upload Video',
    uploading: 'Uploading...',
    showAthleticSkills: 'Show your athletic skills and performances',
    shareCoachingTechniques: 'Share your coaching techniques and training methods',
    highlightFacilities: 'Highlight your facilities, events, and programs',
    shareYourVideos: 'Share your videos',
    noPerformanceVideos: 'No performance videos uploaded yet',
    noCoachingVideos: 'No coaching videos uploaded yet',
    noFacilityVideos: 'No facility videos uploaded yet',
    noVideosUploaded: 'No videos uploaded yet',
    cancelUpload: 'Cancel Upload',
    uploaded: 'uploaded',
    postVisibility: 'Post Visibility',
    everyone: 'Everyone',
    friendsOnly: 'Friends Only',
    onlyMe: 'Only Me',
    deletePost: 'Delete Post',
    confirmDelete: 'Are you sure you want to delete this post? This action cannot be undone.',
    postDeleted: 'Post deleted successfully',
    failedToDelete: 'Failed to delete post',
    mustLogin: 'You must be logged in to delete posts',
    maxVideosReached: 'You can only upload a maximum of 7 videos',
    deleteVideosFirst: 'Please delete some videos to upload new ones',
    videoUploadSuccess: 'Video uploaded successfully! Your video will be reviewed by our admin team before it appears on your public profile.',
    videoUploadFailed: 'Failed to upload video. Please try again.',
    uploadCancelled: 'Upload cancelled',

    // Profile Page UI Elements
    loadingProfile: 'Loading profile...',
    guestUser: 'Guest User',
    signUpToUnlock: 'Sign up to unlock full features!',
    whatYouCanDo: 'What you can do as a guest:',
    signUpUnlock: 'Sign up to unlock:',
    viewStories: 'View Stories',
    unfriend: 'Unfriend',
    cancelRequest: 'Cancel Request',
    addFriend: 'Add Friend',
    sportsGames: 'Sports/Games',
    selectSports: 'Select the sports you play (max 5)',
    coachingProfile: 'Coaching Profile',
    completeCoaching: 'Complete your professional coaching information',
    organizationPosition: 'Organization & Position',
    selectOrganizationType: 'Select Organization Type',
    selectPosition: 'Select Position',
    employmentType: 'Employment Type',
    sportsSpecializations: 'Sports & Specializations',
    selectPrimarySport: 'Select Primary Sport',
    specializations: 'Specializations',
    ageGroupsCoached: 'Age Groups Coached',
    addAgeGroup: 'Add Age Group',
    credentialsExperience: 'Credentials & Experience',
    selectLicenseLevel: 'Select License Level',
    certifications: 'Certifications',
    addCertification: 'Add Certification',
    coachingPhilosophy: 'Coaching Philosophy',
    roleAndSports: 'Role & Sports Information',
    role: 'Role',
    sports: 'Sports',
    organization: 'Organization',
    primarySport: 'Primary Sport',
    experience: 'Experience',
    licenseLevel: 'License Level',
    organizationType: 'Organization Type',
    ageGroups: 'Age Groups Coached',
    noCertificates: 'No certificates added yet',
    noAchievements: 'No achievements added yet',
    reason: 'Reason:',
    noReasonProvided: 'No reason provided',
    noPostsYet: 'No posts yet',
    noFollowersYet: 'No followers yet',
    notFollowingAnyone: 'Not following anyone yet',
    uploadedBy: 'Uploaded by:',
    unknownUser: 'Unknown User',
    sampleVideo: 'Sample Video',
    noCommentsYet: 'No comments yet. Be the first to comment!',
    signInToComment: 'Sign in to comment on videos',

    // Comments
    writeComment: 'Write a comment...',
    comments: 'Comments',
    reply: 'Reply',
    like: 'Like',
    
    // Guest Mode
    guestMode: 'Guest Mode',
    signUpToInteract: 'Sign up to like, comment, and post',
    signUpToComment: 'Sign up to add comments',
    
    // Footer
    copyright: '© 2024 AmaPlayer. All rights reserved.',
    
    // Language
    chooseLanguage: 'Choose Language'
  },
  
  hi: {
    // Navigation
    amaplayer: 'अमाप्लेयर',
    home: 'होम',
    search: 'खोजें',
    add: 'जोड़ें',
    activity: 'गतिविधि',
    messages: 'संदेश',
    profile: 'प्रोफाइल',
    
    // Landing Page
    heroTitle: 'अमाप्लेयर',
    heroSubtitle: 'अंतिम खेल समुदाय मंच',
    heroDescription: 'एथलीटों से जुड़ें, अपनी उपलब्धियों को साझा करें, और दुनिया को अपनी प्रतिभा दिखाएं।',
    getStarted: 'शुरू करें',
    learnMore: 'और जानें',
    features: 'सुविधाएं',
    featuresTitle: 'खेल के लिए आपको चाहिए सब कुछ',

    // Welcome Page
    tagline: 'जुड़ें प्रतिस्पर्धा करें और जीतें',
    subtitle: 'आइए मिलकर खेलें और ऊपर उठें',
    letsPlay: 'चलो खेलें',
    joinForFree: 'मुफ्त में शामिल हों',
    athlete: 'एथलीट',
    coach: 'कोच',
    organization: 'संगठन',
    parent: 'अभिभावक',
    vision: 'हमारी दृष्टि',
    visionText: 'एक वैश्विक मंच बनाना जो एथलीटों, कोचों और खेल प्रेमियों को जोड़ता है, उन्हें अपनी प्रतिभा दिखाने और अपने सपनों को प्राप्त करने का अधिकार देता है।',
    mission: 'हमारा मिशन',
    missionText: 'एथलीटों को जुड़ने, बढ़ने और अपनी खेल यात्रा में सफल होने के लिए नवीन उपकरण और अवसर प्रदान करना, साथ ही एक जीवंत समुदाय का निर्माण करना।',
    
    // Features
    shareAchievements: 'उपलब्धियां साझा करें',
    shareAchievementsDesc: 'समुदाय के साथ अपनी खेल जीत और मील के पत्थर दिखाएं।',
    connectAthletes: 'एथलीटों से जुड़ें',
    connectAthletesDesc: 'साथी एथलीटों, कोचों और खेल प्रेमियों के साथ अपना नेटवर्क बनाएं।',
    
    // Authentication
    login: 'लॉगिन',
    signup: 'साइन अप',
    signOut: 'साइन आउट',
    email: 'ईमेल',
    password: 'पासवर्ड',
    confirmPassword: 'पासवर्ड की पुष्टि करें',
    fullName: 'पूरा नाम',
    forgotPassword: 'पासवर्ड भूल गए?',
    dontHaveAccount: 'खाता नहीं है?',
    alreadyHaveAccount: 'पहले से खाता है?',
    signInWithGoogle: 'Google के साथ साइन इन करें',
    signInWithApple: 'Apple के साथ साइन इन करें',
    continueAsGuest: 'मेहमान के रूप में जारी रखें',
    
    // Common
    loading: 'लोड हो रहा है...',
    error: 'त्रुटि',
    success: 'सफलता',
    cancel: 'रद्द करें',
    save: 'सेव करें',
    delete: 'हटाएं',
    edit: 'संपादित करें',
    back: 'वापस',
    next: 'अगला',
    previous: 'पिछला',
    close: 'बंद करें',
    
    // Posts
    createPost: 'पोस्ट बनाएं',
    whatsOnYourMind: 'आपके मन में क्या है?',
    sharePost: 'पोस्ट साझा करें',
    addPhoto: 'फोटो जोड़ें',
    addVideo: 'वीडियो जोड़ें',
    postShared: 'पोस्ट सफलतापूर्वक साझा किया गया!',
    writeCaption: 'कैप्शन लिखें...',
    
    // Profile
    followers: 'फॉलोअर्स',
    following: 'फॉलोइंग',
    posts: 'पोस्ट',
    editProfile: 'प्रोफाइल संपादित करें',
    bio: 'बायो',
    location: 'स्थान',
    website: 'वेबसाइट',
    logout: 'लॉगआउट',
    personalDetails: 'व्यक्तिगत विवरण',
    name: 'नाम',
    age: 'आयु',
    heightCm: 'ऊंचाई (सेमी)',
    weightKg: 'वजन (किग्रा)',
    sex: 'लिंग',
    male: 'पुरुष',
    female: 'महिला',
    certificates: 'प्रमाणपत्र',
    achievements: 'उपलब्धियां',
    updatePhoto: 'फोटो अपडेट करें',
    saveProfile: 'प्रोफाइल सेव करें',

    // Profile Extended
    talentShowcase: 'प्रतिभा प्रदर्शन',
    coachingPortfolio: 'कोचिंग पोर्टफोलियो',
    facilityShowcase: 'सुविधा प्रदर्शन',
    videoShowcase: 'वीडियो प्रदर्शन',
    uploadVideo: 'वीडियो अपलोड करें',
    uploading: 'अपलोड हो रहा है...',
    showAthleticSkills: 'अपने एथलेटिक कौशल और प्रदर्शन दिखाएं',
    shareCoachingTechniques: 'अपनी कोचिंग तकनीक और प्रशिक्षण विधियों को साझा करें',
    highlightFacilities: 'अपनी सुविधाओं, कार्यक्रमों और गतिविधियों को उजागर करें',
    shareYourVideos: 'अपने वीडियो साझा करें',
    noPerformanceVideos: 'अभी तक कोई प्रदर्शन वीडियो अपलोड नहीं किया गया',
    noCoachingVideos: 'अभी तक कोई कोचिंग वीडियो अपलोड नहीं किया गया',
    noFacilityVideos: 'अभी तक कोई सुविधा वीडियो अपलोड नहीं किया गया',
    noVideosUploaded: 'अभी तक कोई वीडियो अपलोड नहीं किया गया',
    cancelUpload: 'अपलोड रद्द करें',
    uploaded: 'अपलोड किया गया',
    postVisibility: 'पोस्ट दृश्यता',
    everyone: 'सभी',
    friendsOnly: 'केवल मित्र',
    onlyMe: 'केवल मैं',
    deletePost: 'पोस्ट हटाएं',
    confirmDelete: 'क्या आप वाकई इस पोस्ट को हटाना चाहते हैं? यह क्रिया पूर्ववत नहीं की जा सकती।',
    postDeleted: 'पोस्ट सफलतापूर्वक हटाया गया',
    failedToDelete: 'पोस्ट हटाने में विफल',
    mustLogin: 'पोस्ट हटाने के लिए आपको लॉग इन होना चाहिए',
    maxVideosReached: 'आप अधिकतम 7 वीडियो ही अपलोड कर सकते हैं',
    deleteVideosFirst: 'नए वीडियो अपलोड करने के लिए कृपया कुछ वीडियो हटाएं',
    videoUploadSuccess: 'वीडियो सफलतापूर्वक अपलोड किया गया! आपका वीडियो आपकी सार्वजनिक प्रोफाइल पर दिखने से पहले हमारी एडमिन टीम द्वारा समीक्षा किया जाएगा।',
    videoUploadFailed: 'वीडियो अपलोड करने में विफल। कृपया पुनः प्रयास करें।',
    uploadCancelled: 'अपलोड रद्द किया गया',

    // Profile Page UI Elements
    loadingProfile: 'प्रोफाइल लोड हो रहा है...',
    guestUser: 'अतिथि उपयोगकर्ता',
    signUpToUnlock: 'पूर्ण सुविधाओं को अनलॉक करने के लिए साइन अप करें!',
    whatYouCanDo: 'अतिथि के रूप में आप क्या कर सकते हैं:',
    signUpUnlock: 'अनलॉक करने के लिए साइन अप करें:',
    viewStories: 'स्टोरीज़ देखें',
    unfriend: 'मित्रता हटाएं',
    cancelRequest: 'अनुरोध रद्द करें',
    addFriend: 'मित्र जोड़ें',
    sportsGames: 'खेल/गेम्स',
    selectSports: 'आप जो खेल खेलते हैं उन्हें चुनें (अधिकतम 5)',
    coachingProfile: 'कोचिंग प्रोफाइल',
    completeCoaching: 'अपनी पेशेवर कोचिंग जानकारी पूरी करें',
    organizationPosition: 'संगठन और पद',
    selectOrganizationType: 'संगठन का प्रकार चुनें',
    selectPosition: 'पद चुनें',
    employmentType: 'रोजगार का प्रकार',
    sportsSpecializations: 'खेल और विशेषज्ञता',
    selectPrimarySport: 'प्राथमिक खेल चुनें',
    specializations: 'विशेषज्ञता',
    ageGroupsCoached: 'प्रशिक्षित आयु समूह',
    addAgeGroup: 'आयु समूह जोड़ें',
    credentialsExperience: 'प्रमाण पत्र और अनुभव',
    selectLicenseLevel: 'लाइसेंस स्तर चुनें',
    certifications: 'प्रमाणपत्र',
    addCertification: 'प्रमाणपत्र जोड़ें',
    coachingPhilosophy: 'कोचिंग दर्शन',
    roleAndSports: 'भूमिका और खेल जानकारी',
    role: 'भूमिका',
    sports: 'खेल',
    organization: 'संगठन',
    primarySport: 'प्राथमिक खेल',
    experience: 'अनुभव',
    licenseLevel: 'लाइसेंस स्तर',
    organizationType: 'संगठन का प्रकार',
    ageGroups: 'प्रशिक्षित आयु समूह',
    noCertificates: 'अभी तक कोई प्रमाणपत्र नहीं जोड़ा गया',
    noAchievements: 'अभी तक कोई उपलब्धि नहीं जोड़ी गई',
    reason: 'कारण:',
    noReasonProvided: 'कोई कारण नहीं दिया गया',
    noPostsYet: 'अभी तक कोई पोस्ट नहीं',
    noFollowersYet: 'अभी तक कोई फॉलोअर नहीं',
    notFollowingAnyone: 'अभी तक किसी को फॉलो नहीं कर रहे',
    uploadedBy: 'द्वारा अपलोड किया गया:',
    unknownUser: 'अज्ञात उपयोगकर्ता',
    sampleVideo: 'नमूना वीडियो',
    noCommentsYet: 'अभी तक कोई टिप्पणी नहीं। पहले टिप्पणी करें!',
    signInToComment: 'वीडियो पर टिप्पणी करने के लिए साइन इन करें',

    // Comments
    writeComment: 'टिप्पणी लिखें...',
    comments: 'टिप्पणियां',
    reply: 'जवाब',
    like: 'पसंद',
    
    // Guest Mode
    guestMode: 'मेहमान मोड',
    signUpToInteract: 'लाइक, कमेंट और पोस्ट करने के लिए साइन अप करें',
    signUpToComment: 'टिप्पणी जोड़ने के लिए साइन अप करें',
    
    // Footer
    copyright: '© 2024 अमाप्लेयर। सभी अधिकार सुरक्षित।',
    
    // Language
    chooseLanguage: 'भाषा चुनें'
  },

  // Punjabi
  pa: {
    amaplayer: 'ਅਮਾਪਲੇਅਰ',
    home: 'ਘਰ',
    search: 'ਖੋਜ',
    add: 'ਜੋੜੋ',
    messages: 'ਸੁਨੇਹੇ',
    profile: 'ਪ੍ਰੋਫਾਈਲ',
    tagline: 'ਜੁੜੋ, ਮੁਕਾਬਲਾ ਕਰੋ ਅਤੇ ਜਿੱਤੋ',
    subtitle: 'ਆਓ ਇਕੱਠੇ ਖੇਡੀਏ ਅਤੇ ਉੱਪਰ ਉੱਠੀਏ',
    letsPlay: 'ਆਓ ਖੇਡੀਏ',
    joinForFree: 'ਮੁਫ਼ਤ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ',
    athlete: 'ਖਿਡਾਰੀ',
    coach: 'ਕੋਚ',
    organization: 'ਸੰਗਠਨ',
    parent: 'ਮਾਤਾ-ਪਿਤਾ',
    vision: 'ਸਾਡੀ ਦ੍ਰਿਸ਼ਟੀ',
    visionText: 'ਇੱਕ ਗਲੋਬਲ ਈਕੋਸਿਸਟਮ ਬਣਾ ਕੇ ਖੇਡ ਉਦਯੋਗ ਵਿੱਚ ਕ੍ਰਾਂਤੀ ਲਿਆਉਣਾ ਜਿੱਥੇ ਹਰ ਐਥਲੀਟ ਨੂੰ ਵਿਸ਼ਵ ਪੱਧਰੀ ਕੋਚਿੰਗ ਤੱਕ ਪਹੁੰਚ ਹੋਵੇ।',
    mission: 'ਸਾਡਾ ਮਿਸ਼ਨ',
    missionText: 'ਦੁਨੀਆ ਦਾ ਸਭ ਤੋਂ ਵਿਆਪਕ ਪਲੇਟਫਾਰਮ ਬਣਾਉਣਾ ਜੋ ਐਥਲੀਟਾਂ, ਕੋਚਾਂ ਅਤੇ ਸੰਗਠਨਾਂ ਨੂੰ ਜੋੜਦਾ ਹੈ।',
    chooseLanguage: 'ਭਾਸ਼ਾ ਚੁਣੋ'
  },

  mr: {
    amaplayer: 'अमाप्लेयर',
    home: 'होम',
    search: 'शोध',
    add: 'जोडा',
    messages: 'संदेश',
    profile: 'प्रोफाइल',
    tagline: 'जोडा, स्पर्धा करा आणि जिंका',
    subtitle: 'चला एकत्र खेळूया आणि उंच उडूया',
    letsPlay: 'चला खेळूया',
    joinForFree: 'मोफत सामील व्हा',
    athlete: 'खेळाडू',
    coach: 'प्रशिक्षक',
    organization: 'संस्था',
    parent: 'पालक',
    vision: 'आमची दृष्टी',
    visionText: 'एक जागतिक इकोसिस्टम तयार करून क्रीडा उद्योगात क्रांती घडवून आणणे जिथे प्रत्येक ॲथलीटला जागतिक दर्जाच्या प्रशिक्षणाची सोय असेल।',
    mission: 'आमचे ध्येय',
    missionText: 'जगातील सर्वात व्यापक प्लॅटफॉर्म तयार करणे जे ॲथलीट, प्रशिक्षक आणि संस्थांना जोडते।',
    chooseLanguage: 'भाषा निवडा'
  },

  bn: {
    amaplayer: 'আমাপ্লেয়ার',
    home: 'হোম',
    search: 'খুঁজুন',
    add: 'যোগ করুন',
    messages: 'বার্তা',
    profile: 'প্রোফাইল',
    tagline: 'সংযুক্ত হোন, প্রতিযোগিতা করুন এবং বিজয়ী হোন',
    subtitle: 'আসুন একসাথে খেলি এবং এগিয়ে যাই',
    letsPlay: 'চলো খেলি',
    joinForFree: 'বিনামূল্যে যোগ দিন',
    athlete: 'খেলোয়াড়',
    coach: 'কোচ',
    organization: 'সংগঠন',
    parent: 'অভিভাবক',
    vision: 'আমাদের ভিশন',
    visionText: 'একটি বিশ্বব্যাপী ইকোসিস্টেম নির্মাণ করে ক্রীড়া শিল্পে বিপ্লব আনা যেখানে প্রতিটি ক্রীড়াবিদের বিশ্বমানের প্রশিক্ষণের সুযোগ রয়েছে।',
    mission: 'আমাদের মিশন',
    missionText: 'বিশ্বের সবচেয়ে ব্যাপক প্ল্যাটফর্ম তৈরি করা যা ক্রীড়াবিদ, কোচ এবং সংগঠনগুলিকে সংযুক্ত করে।',
    chooseLanguage: 'ভাষা বেছে নিন'
  },

  ta: {
    amaplayer: 'அமாப்ளேயர்',
    home: 'வீடு',
    search: 'தேடல்',
    add: 'சேர்',
    messages: 'செய்திகள்',
    profile: 'விவரம்',
    tagline: 'இணைந்து போட்டியிட்டு வெல்லுங்கள்',
    subtitle: 'ஒன்றாக விளையாடி உயர்வோம்',
    letsPlay: 'விளையாடுவோம்',
    joinForFree: 'இலவசமாக சேருங்கள்',
    athlete: 'விளையாட்டு வீரர்',
    coach: 'பயிற்சியாளர்',
    organization: 'அமைப்பு',
    parent: 'பெற்றோர்',
    vision: 'எங்கள் பார்வை',
    visionText: 'ஒவ்வொரு விளையாட்டு வீரருக்கும் உலகத்தரமான பயிற்சி கிடைக்கும் என்று உறுதி செய்வதன் மூலம் விளையாட்டுத் துறையில் புரட்சியை ஏற்படுத்துவதே எங்கள் நோக்கம்.',
    mission: 'எங்கள் பணி',
    missionText: 'விளையாட்டு வீரர்கள், பயிற்சியாளர்கள் மற்றும் அமைப்புகளை இணைக்கும் உலகின் மிகவும் விரிவான தளத்தை உருவாக்குவதே எங்கள் பணி.',
    chooseLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்'
  },

  te: {
    amaplayer: 'అమాప్లేయర్',
    home: 'హోమ్',
    search: 'వెతకండి',
    add: 'జోడించు',
    messages: 'సందేశాలు',
    profile: 'ప్రొఫైల్',
    tagline: 'కనెక్ట్ అవ్వండి, పోటీపడండి మరియు గెలవండి',
    subtitle: 'కలిసి ఆడి ముందుకు సాగండి',
    letsPlay: 'ఆడుకుందాం',
    joinForFree: 'ఉచితంగా చేరండి',
    athlete: 'క్రీడాకారుడు',
    coach: 'కోచ్',
    organization: 'సంస్థ',
    parent: 'తల్లిదండ్రులు',
    vision: 'మా విజన్',
    visionText: 'ప్రతి క్రీడాకారుడికి ప్రపంచ స్థాయి శిక్షణ అందుబాటులో ఉండేలా చూడడం ద్వారా క్రీడా పరిశ్రమలో విప్లవం సాధించడం మా లక్ష్యం.',
    mission: 'మా మిషన్',
    missionText: 'క్రీడాకారులు, కోచ్‌లు మరియు సంస్థలను కనెక్ట్ చేసే ప్రపంచంలోనే అత్యంత సమగ్రమైన ప్లాట్‌ఫారమ్‌ను సృష్టించడం మా లక్ష్యం.',
    chooseLanguage: 'భాష ఎంచుకోండి'
  },

  kn: {
    amaplayer: 'ಅಮಾಪ್ಲೇಯರ್',
    home: 'ಮನೆ',
    search: 'ಹುಡುಕಿ',
    add: 'ಸೇರಿಸು',
    messages: 'ಸಂದೇಶಗಳು',
    profile: 'ಪ್ರೊಫೈಲ್',
    tagline: 'ಸಂಪರ್ಕಿಸಿ, ಸ್ಪರ್ಧಿಸಿ ಮತ್ತು ಗೆಲ್ಲಿ',
    subtitle: 'ಒಟ್ಟಿಗೆ ಆಡೋಣ ಮತ್ತು ಮೇಲೇಳೋಣ',
    letsPlay: 'ಆಡೋಣ',
    joinForFree: 'ಉಚಿತವಾಗಿ ಸೇರಿ',
    athlete: 'ಆಟಗಾರ',
    coach: 'ತರಬೇತುದಾರ',
    organization: 'ಸಂಸ್ಥೆ',
    parent: 'ಪೋಷಕರು',
    vision: 'ನಮ್ಮ ದೃಷ್ಟಿ',
    visionText: 'ಪ್ರತಿ ಕ್ರೀಡಾಪಟುವಿಗೆ ವಿಶ್ವ ದರ್ಜೆಯ ತರಬೇತಿ ಲಭ್ಯವಾಗುವಂತೆ ಮಾಡುವ ಮೂಲಕ ಕ್ರೀಡಾ ಉದ್ಯಮದಲ್ಲಿ ಕ್ರಾಂತಿ ತರುವುದು ನಮ್ಮ ಗುರಿ.',
    mission: 'ನಮ್ಮ ಮಿಷನ್',
    missionText: 'ಕ್ರೀಡಾಪಟುಗಳು, ತರಬೇತುದಾರರು ಮತ್ತು ಸಂಸ್ಥೆಗಳನ್ನು ಸಂಪರ್ಕಿಸುವ ವಿಶ್ವದ ಅತ್ಯಂತ ಸಮಗ್ರ ವೇದಿಕೆಯನ್ನು ರಚಿಸುವುದು.',
    chooseLanguage: 'ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ'
  },

  ml: {
    amaplayer: 'അമാപ്ലേയർ',
    home: 'ഹോം',
    search: 'തിരയുക',
    add: 'ചേർക്കുക',
    messages: 'സന്ദേശങ്ങൾ',
    profile: 'പ്രൊഫൈൽ',
    tagline: 'ബന്ധിപ്പിക്കുക, മത്സരിക്കുക, വിജയിക്കുക',
    subtitle: 'നമുക്ക് ഒന്നിച്ച് കളിച്ച് ഉയരാം',
    letsPlay: 'നമുക്ക് കളിക്കാം',
    joinForFree: 'സൗജന്യമായി ചേരുക',
    athlete: 'കളിക്കാരൻ',
    coach: 'പരിശീലകൻ',
    organization: 'സംഘടന',
    parent: 'രക്ഷാകർത്താവ്',
    vision: 'ഞങ്ങളുടെ ദർശനം',
    visionText: 'ഓരോ കായികതാരത്തിനും ലോകോത്തര പരിശീലനം ലഭ്യമാക്കിക്കൊണ്ട് കായിക വ്യവസായത്തിൽ വിപ്ലവം കൊണ്ടുവരിക.',
    mission: 'ഞങ്ങളുടെ ദൗത്യം',
    missionText: 'കായികതാരങ്ങളെയും പരിശീലകരെയും സംഘടനകളെയും ബന്ധിപ്പിക്കുന്ന ലോകത്തിലെ ഏറ്റവും സമഗ്രമായ പ്ലാറ്റ്ഫോം സൃഷ്ടിക്കുക.',
    chooseLanguage: 'ഭാഷ തിരഞ്ഞെടുക്കുക'
  },

  gu: {
    amaplayer: 'અમાપ્લેયર',
    home: 'હોમ',
    search: 'શોધ',
    add: 'ઉમેરો',
    messages: 'સંદેશા',
    profile: 'પ્રોફાઇલ',
    tagline: 'જોડાઓ, સ્પર્ધા કરો અને જીતો',
    subtitle: 'ચાલો સાથે રમીએ અને ઉંચા થઈએ',
    letsPlay: 'ચાલો રમીએ',
    joinForFree: 'મફતમાં જોડાઓ',
    athlete: 'ખેલાડી',
    coach: 'કોચ',
    organization: 'સંસ્થા',
    parent: 'માતાપિતા',
    vision: 'અમારી દ્રષ્ટિ',
    visionText: 'દરેક ખેલાડીને વિશ્વ સ્તરની કોચિંગ ઉપલબ્ધ કરાવીને રમતગમત ઉદ્યોગમાં ક્રાંતિ લાવવી.',
    mission: 'અમારું મિશન',
    missionText: 'ખેલાડીઓ, કોચ અને સંસ્થાઓને જોડતું વિશ્વનું સૌથી વ્યાપક પ્લેટફોર્મ બનાવવું.',
    chooseLanguage: 'ભાષા પસંદ કરો'
  },

  or: {
    amaplayer: 'ଅମାପ୍ଲେୟାର',
    home: 'ହୋମ',
    search: 'ଖୋଜନ୍ତୁ',
    add: 'ଯୋଗ କରନ୍ତୁ',
    messages: 'ବାର୍ତ୍ତା',
    profile: 'ପ୍ରୋଫାଇଲ',
    tagline: 'ସଂଯୋଗ କରନ୍ତୁ, ପ୍ରତିଯୋଗିତା କରନ୍ତୁ ଏବଂ ଜିତନ୍ତୁ',
    subtitle: 'ଆସନ୍ତୁ ଏକାଠି ଖେଳିବା ଏବଂ ଉଠିବା',
    letsPlay: 'ଆସନ୍ତୁ ଖେଳିବା',
    joinForFree: 'ମାଗଣାରେ ଯୋଗଦାନ କରନ୍ତୁ',
    athlete: 'ଖେଳାଳି',
    coach: 'କୋଚ୍',
    organization: 'ସଂସ୍ଥା',
    parent: 'ପିତାମାତା',
    vision: 'ଆମର ଦୃଷ୍ଟିକୋଣ',
    visionText: 'ପ୍ରତ୍ୟେକ ଖେଳାଳିଙ୍କୁ ବିଶ୍ୱମାନର ପ୍ରଶିକ୍ଷଣ ଯୋଗାଇ କ୍ରୀଡା ଶିଳ୍ପରେ ବିପ୍ଳବ ଆଣିବା।',
    mission: 'ଆମର ମିଶନ',
    missionText: 'ଖେଳାଳି, କୋଚ୍ ଏବଂ ସଂସ୍ଥାଗୁଡ଼ିକୁ ସଂଯୋଗ କରୁଥିବା ବିଶ୍ୱର ସବୁଠାରୁ ବ୍ୟାପକ ପ୍ଲାଟଫର୍ମ ସୃଷ୍ଟି କରିବା।',
    chooseLanguage: 'ଭାଷା ବାଛନ୍ତୁ'
  },

  as: {
    amaplayer: 'আমাপ্লেয়াৰ',
    home: 'ঘৰ',
    search: 'বিচাৰক',
    add: 'যোগ কৰক',
    messages: 'বাৰ্তা',
    profile: 'প্ৰফাইল',
    tagline: 'সংযোগ কৰক, প্ৰতিযোগিতা কৰক আৰু জয় কৰক',
    subtitle: 'আহক একেলগে খেলো আৰু উন্নীত হওঁ',
    letsPlay: 'আহক খেলো',
    joinForFree: 'বিনামূল্যে যোগদান কৰক',
    athlete: 'খেলুৱৈ',
    coach: 'প্ৰশিক্ষক',
    organization: 'সংস্থা',
    parent: 'পিতৃ-মাতৃ',
    vision: 'আমাৰ দৃষ্টি',
    visionText: 'প্ৰতিজন খেলুৱৈক বিশ্বমানৰ প্ৰশিক্ষণ উপলব্ধ কৰাই খেলা উদ্যোগত বিপ্লৱ আনা।',
    mission: 'আমাৰ মিচন',
    missionText: 'খেলুৱৈ, প্ৰশিক্ষক আৰু সংস্থাসমূহক সংযোগ কৰা বিশ্বৰ আটাইতকৈ ব্যাপক প্লেটফৰ্ম সৃষ্টি কৰা।',
    chooseLanguage: 'ভাষা বাছনি কৰক'
  }
};

export function LanguageProvider({ children }: LanguageProviderProps): ReactElement {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && languages.find(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage as LanguageCode);
    }
  }, []);

  const changeLanguage = (languageCode: LanguageCode): void => {
    setCurrentLanguage(languageCode);
    localStorage.setItem('selectedLanguage', languageCode);
  };

  const getCurrentLanguage = (): Language => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  };

  const t = (key: TranslationKey): string => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  const value: LanguageContextValue = {
    currentLanguage,
    changeLanguage,
    getCurrentLanguage,
    t,
    languages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
