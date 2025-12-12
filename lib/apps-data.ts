export interface AppData {
    title: string
    metaTitle: string
    metaDescription: string
    excerpt: string
    features: string[]
    whatItIs: string
    whatItCanDo: string[]
    supportedVersions: string
    whatItCannotDo: string[]
    installationSteps: { title: string; description: string }[]
    faq: { question: string; answer: string }[]
    keywords: string[]
    category: string
    lastUpdated: string
}

export const appsData: Record<string, AppData> = {
    'carstream': {
        title: 'CarStream for Android Auto',
        metaTitle: 'CarStream Android Auto - Watch YouTube in Car (No Root Guide)',
        metaDescription: 'Download CarStream APK for Android Auto. The best way to watch YouTube videos on your car display without root. Includes step-by-step installation guide, features, and troubleshooting.',
        excerpt: 'The ultimate YouTube player for Android Auto. Watch your favorite videos directly on your car\'s infotainment system without rooting your phone.',
        category: 'Video Player',
        lastUpdated: '2025-01-15',
        features: [
            'Native YouTube Interface',
            'Video Playback while Driving (Passenger use)',
            'Account Sign-in Support',
            'Search and Bookmarks',
            'No Root Required'
        ],
        whatItIs: 'CarStream (formerly known as YouTube Auto) is a third-party application designed specifically for Android Auto. It acts as a bridge, allowing you to display and control a fully functional YouTube interface directly on your car\'s infotainment screen. Unlike standard Android Auto apps properly vetted by Google, CarStream bypasses the restriction on video playback, enabling entertainment options for passengers.',
        whatItCanDo: [
            'Play any YouTube video on your car screen',
            'Sign in to your Google account to access subscriptions and playlists',
            'Search for videos using the on-screen keyboard',
            'Work on both touch-screen and rotary controller head units',
            'Operate without requiring root access on your phone'
        ],
        supportedVersions: 'CarStream works with most Android devices running Android 6.0 and higher. It is compatible with Android Auto versions from 6.0 up to the latest builds. Note: Some specific OEM skins like on certain Oppo, Realme, or Xiaomi devices might require additional background activity permissions.',
        whatItCannotDo: [
            'Play DRM-protected content from services like Netflix or Hulu (it is strictly for YouTube)',
            'Guarantee 100% stability on every single phone model due to Android Auto\'s varying implementation',
            'Be downloaded directly from the Google Play Store'
        ],
        installationSteps: [
            {
                title: 'Download AAAD',
                description: 'Since CarStream is not on the Play Store, you need the Android Auto Apps Downloader (AAAD). Download the latest APK from the official GitHub releases page.'
            },
            {
                title: 'Install AAAD',
                description: 'Open the AAAD APK file on your phone. You may need to allow "Install from unknown sources" in your browser/file manager settings.'
            },
            {
                title: 'Select CarStream',
                description: 'Open AAAD and you will see a list of apps. Tap on "CarStream" from the list.'
            },
            {
                title: 'Confirm Installation',
                description: 'Select the latest version available and tap "Install". AAAD will download and install the CarStream APK for you.'
            },
            {
                title: 'Launch on Android Auto',
                description: 'Connect your phone to your car. You should now see the CarStream icon in your Android Auto app launcher.'
            }
        ],
        faq: [
            {
                question: 'Is CarStream safe to use?',
                answer: 'Yes, CarStream is open-source and widely used. However, it is not verified by Google Play Protect because it bypasses Android Auto\'s video restrictions. Always use it responsibly and only when parked or for passengers.'
            },
            {
                question: 'Does CarStream require root?',
                answer: 'No, when installed via AAAD, CarStream works on non-rooted devices. This is one of its main advantages over older methods.'
            },
            {
                question: 'Why is CarStream not showing up in Android Auto?',
                answer: 'This can happen if Developer Settings in Android Auto are not enabled. Go to Android Auto settings on your phone > Version (tap 10 times to enable dev mode) > Developer Settings > Check "Unknown Sources". Also, try clearing the cache of the Android Auto app.'
            },
            {
                question: 'Can I watch Netflix on CarStream?',
                answer: 'No, CarStream is specifically built for YouTube. For a more general web browser or video player that might support other sites, consider Fermata Auto.'
            }
        ],
        keywords: ['CarStream', 'YouTube for Android Auto', 'CarStream APK', 'Android Auto Video Player', 'Install CarStream', 'No Root Android Auto']
    },
    'fermata-auto': {
        title: 'Fermata Auto',
        metaTitle: 'Fermata Auto - Video Player & IPTV for Android Auto | Download',
        metaDescription: 'Install Fermata Auto on Android Auto. The complete multimedia player for local videos, IPTV, and YouTube. detailed setup guide and features overview.',
        excerpt: 'A powerful multimedia player for Android Auto. Play local video files, stream IPTV, and browse the web directly from your dashboard.',
        category: 'Multimedia Player',
        lastUpdated: '2025-01-10',
        features: [
            'Play Local Video Files (MP4, MKV, etc.)',
            'IPTV Streaming Support',
            'Built-in Web Browser',
            'YouTube Integration',
            'Folder-based Audio Player'
        ],
        whatItIs: 'Fermata Auto is an open-source, multi-functional media player for Android Auto. It is designed to play your local audio and video files organized in folders, and it also supports network streams and playlists. It is widely considered one of the most versatile media apps for the platform because it combines an audio player, video player, and web browser in one.',
        whatItCanDo: [
            'Play video files stored on your phone\'s internal storage or SD card',
            'Stream live TV channels via M3U playlists (IPTV)',
            'Browse the internet using the built-in web browser',
            'Play YouTube videos via its web interface or plugin',
            'Resume playback from the last position automatically'
        ],
        supportedVersions: 'Fermata Auto allows for broad compatibility, working on Android 6.0+ devices. It runs well on most major Android Auto head units. For full functionality (especially steering wheel controls), a companion app "Fermata Control" is sometimes used.',
        whatItCannotDo: [
            'Decrypt DRM-protected streams from major paid streaming services app-natively (though the web browser can sometimes work depending on the site)',
            'Guarantee perfect playback for extremely high bitrate 4K files on older head units due to hardware limitations'
        ],
        installationSteps: [
            {
                title: 'Get AAAD',
                description: 'Download the AAAD (Android Auto Apps Downloader) tool to simplify the installation process.'
            },
            {
                title: 'Choose Fermata Auto',
                description: 'In AAAD, locate "Fermata Auto" in the list. It is often one of the top recommended apps.'
            },
            {
                title: 'Install the App',
                description: 'Tap to install. You may be prompted to install "Fermata Control" as well, which is recommended for better integration with car buttons.'
            },
            {
                title: 'Setup Permissions',
                description: 'Open Fermata Auto on your phone first. Grant it permission to access your file storage so it can find your media files.'
            },
            {
                title: 'Configure Folders',
                description: 'In the phone app, add the folders where your music and videos are stored. These will then appear on the car screen.'
            }
        ],
        faq: [
            {
                question: 'How do I add videos to Fermata Auto?',
                answer: 'You need to open the Fermata Auto app on your phone, go to the "Folders" tab, and add the directories where your video files are located. They will then sync to the Android Auto interface.'
            },
            {
                question: 'Can I watch live TV?',
                answer: 'Yes, if you have an M3U playlist file or URL for IPTV, you can add it to Fermata Auto to watch live television channels.'
            },
            {
                question: 'Is it free?',
                answer: 'Yes, Fermata Auto is free and open-source software.'
            }
        ],
        keywords: ['Fermata Auto', 'Android Auto Video Player', 'IPTV Android Auto', 'Local Video Player Car', 'Fermata Auto APK']
    },
    'screen2auto': {
        title: 'Screen2Auto',
        metaTitle: 'Screen2Auto APK - Advanced Screen Mirroring for Android Auto',
        metaDescription: 'Mirror your entire phone screen to Android Auto with Screen2Auto. Features touch control, landscape mode, and app shortcuts. Full installation guide.',
        excerpt: 'The most advanced screen mirroring solution for Android Auto. Mirror any app, game, or interface with full touch support and customization.',
        category: 'Screen Mirroring',
        lastUpdated: '2025-01-12',
        features: [
            'Full Screen Mirroring',
            'Touch Capability (easiest with root, possible without)',
            'Landscape/Portrait Rotation',
            'App Launcher Shortcuts',
            'Split Screen Support'
        ],
        whatItIs: 'Screen2Auto is a powerful application that mirrors your Android device\'s screen to your car\'s infotainment display. Unlike basic mirroring apps, Screen2Auto offers deep customization, including the ability to force landscape mode, adjust resolution (DPI), and even restore touch controls on the car screen so you can interact with your phone apps directly from the dashboard.',
        whatItCanDo: [
            'Mirror any application from your phone to the car screen',
            'Force apps to run in landscape mode for better visibility',
            'Allow touch inputs on the car screen to control the phone (requires correct setup/root for full support)',
            'Dim the phone screen to save battery while mirroring',
            'Create a custom launcher for your favorite apps'
        ],
        supportedVersions: 'Requires Android 6.0 or higher. For full touch support, a rooted device is highly recommended. On non-rooted devices, touch support involves complicated workarounds and may not be perfect.',
        whatItCannotDo: [
            'Provide perfect touch control on all non-rooted devices (accessibility service limitations apply)',
            'Bypass black screens in apps that block screen recording (e.g., Netflix, banking apps) due to Android security policies'
        ],
        installationSteps: [
            {
                title: 'Download via AAAD',
                description: 'Launched AAAD on your phone and select "Screen2Auto".'
            },
            {
                title: 'Install and Grant Permissions',
                description: 'Install the app. Upon first launch on your phone, you will need to grant a significant number of permissions (Accessibility, Overlay, Write Settings) for it to function correctly.'
            },
            {
                title: 'Configure Settings',
                description: 'Go through the initial setup wizard in Screen2Auto. Careful configuration is key here—enable "Force Landscape" and "Restore Touch" if available.'
            },
            {
                title: 'Connect to Car',
                description: 'Plug into your car. Launch Screen2Auto from the car display. You may need to press "Start Now" on your phone for the screen capture permission.'
            }
        ],
        faq: [
            {
                question: 'Does touch work without root?',
                answer: 'It can, but it is hit-or-miss. Screen2Auto uses an Accessibility Service hack to simulate touch, but many users find it laggy or unresponsive without root access.'
            },
            {
                question: 'Why is the screen black?',
                answer: 'If you are trying to view a DRM-protected app like Netflix or Amazon Prime, they block screen recording (mirroring). Screen2Auto cannot bypass this restriction easily.'
            }
        ],
        keywords: ['Screen2Auto', 'Android Auto Mirroring', 'Mirror Phone to Car', 'Cast to Android Auto', 'Screen2Auto No Root']
    },
    'aa-mirror-plus': {
        title: 'AA Mirror Plus',
        metaTitle: 'AA Mirror Plus - Simple Screen Mirroring for Android Auto',
        metaDescription: 'Download AA Mirror Plus for Android Auto. A lightweight, simple, and ad-free screen mirroring app. Setup guide and features.',
        excerpt: 'A lightweight and simple screen mirroring alternative. Perfect for users who want a straightforward way to cast their phone screen to the car.',
        category: 'Screen Mirroring',
        lastUpdated: '2024-12-20',
        features: [
            'Simple Interface',
            'Ad-Free Experience',
            'Basic Orientation Controls',
            'Multi-touch Support (if supported by device)',
            'No Root Mandatory'
        ],
        whatItIs: 'AA Mirror Plus is an enhanced version of the original AA Mirror. It focuses on simplicity and ease of use, providing a direct feed of your phone\'s screen to Android Auto. It is often preferred by users who find Screen2Auto too complex or heavy.',
        whatItCanDo: [
            'Mirror your phone screen with minimal latency',
            'Adjust brightness and orientation',
            'Scale the content to fit your car screen',
            'Work without internet connection (offline mirroring)'
        ],
        supportedVersions: 'Compatible with standard Android Auto setups via AAAD. Works on Android 6+.',
        whatItCannotDo: [
            'Offer the extensive customization and launcher features of Screen2Auto',
            'Guarantee touch support on non-rooted devices (often acts as a view-only mirror)'
        ],
        installationSteps: [
            {
                title: 'Install with AAAD',
                description: 'Open AAAD and find "AA Mirror Plus".'
            },
            {
                title: 'Download and Install',
                description: 'Proceed with the download. Allow installation from unknown sources.'
            },
            {
                title: 'Set Up',
                description: 'Open the app on your phone to configure basic settings like screen orientation rules.'
            },
            {
                title: 'Use in Car',
                description: 'Connect to Android Auto and select AA Mirror Plus to start casting.'
            }
        ],
        faq: [
            {
                question: 'What is the difference between AA Mirror and AA Mirror Plus?',
                answer: 'AA Mirror Plus is a maintained fork that offers better stability, bug fixes, and removes some limitations of the original abandoned project.'
            },
            {

                question: 'Can I control the phone from the car screen?',
                answer: 'Usually, no. Unless you have root access, AA Mirror Plus mostly functions as a display mirror, meaning you have to control the apps from your phone screen.'
            }
        ],
        keywords: ['AA Mirror Plus', 'Android Auto Screen Cast', 'Simple Mirroring', 'AA Mirror APK']
    },
    'performance-monitor': {
        title: 'Performance Monitor',
        metaTitle: 'Performance Monitor for Android Auto - Real-Time Vehicle Stats',
        metaDescription: 'Monitor your car\'s performance in real-time with Performance Monitor on Android Auto. View RPM, speed, turbo boost, and more. Installation guide and features.',
        excerpt: 'Turn your Android Auto display into a real-time dashboard. Monitor engine stats, turbo boost, and other vehicle metrics directly on your infotainment screen.',
        category: 'Vehicle Diagnostics',
        lastUpdated: '2024-11-15',
        features: [
            'Real-time Dashboard',
            'Turbo Boost Gauge',
            'RPM and Speed Monitoring',
            'Battery Voltage Display',
            'Customizable Layouts'
        ],
        whatItIs: 'Performance Monitor is a specialized application for Android Auto that allows car enthusiasts to view real-time vehicle telematics. Originally designed for VAG (Volkswagen, Audi, Skoda, Seat) cars to interface with the MIB2 infotainment system, versions have evolved to work with broader OBD2 data sources (often via Torque Pro integration) or specific car APIs, providing a "sport display" feel.',
        whatItCanDo: [
            'Display real-time engine data like Oil Temperature, Coolant Temperature, and Battery Voltage',
            'Show dynamic gauges for Turbo Boost, RPM, and Speed',
            'Visualize G-Force (lateral and linear acceleration)',
            'Output power and torque estimates (depending on vehicle support)'
        ],
        supportedVersions: 'Compatibility varies significantly by car model. The classic "Performance Monitor" is best suited for VAG cars with discover media/pro units. Generic OBD2-based monitors require an OBD2 Bluetooth adapter and a companion app like Torque Pro installed on the phone.',
        whatItCannotDo: [
            'Read diagnostic trouble codes (DTCs) as deeply as a dedicated scan tool',
            'Work on every single car brand natively (often requires specific protocols)',
            'Modify ECU parameters (it is a read-only monitor, not a tuning tool)'
        ],
        installationSteps: [
            {
                title: 'Launch AAAD',
                description: 'Open the Android Auto Apps Downloader on your phone.'
            },
            {
                title: 'Select Performance Monitor',
                description: 'Find "Performance Monitor" in the list of available apps.'
            },
            {
                title: 'Install',
                description: 'Tap to download and install the APK. Ensure unknown sources are allowed.'
            },
            {
                title: 'Setup Connections',
                description: 'If using an OBD2 version, pair your Bluetooth adapter to your phone and configure the data source in the app settings before connecting to the car.'
            },
            {
                title: 'Connect to Car',
                description: 'Plug in your phone and launch the app from the Android Auto app drawer.'
            }
        ],
        faq: [
            {
                question: 'Do I need an OBD2 adapter?',
                answer: 'For most non-VAG cars, yes. The app needs a source for the data, which is usually provided by a Bluetooth OBD2 dongle plugged into your car\'s diagnostic port.'
            },
            {
                question: 'Will this void my warranty?',
                answer: 'No, the app only reads data from your car\'s computer. It does not make any permanent changes or "tune" the engine, so it is safe to use.'
            }
        ],
        keywords: ['Performance Monitor', 'Android Auto Dashboard', 'OBD2 Android Auto', 'Car Diagnostics App', 'Torque Pro Android Auto']
    },
    'aa-passenger': {
        title: 'AA Passenger',
        metaTitle: 'AA Passenger (AA 2nd Seat) - Unlocking Android Auto for Passengers',
        metaDescription: 'Allow passengers to control navigation and music on Android Auto with AA Passenger. Send destinations, view images, and more. Download via AAAD.',
        excerpt: 'Give your passengers control. AA Passenger allows a second device to interact with Android Auto, enabling navigation input and media control from the passenger seat.',
        category: 'Utility',
        lastUpdated: '2025-01-05',
        features: [
            'Send Navigation Destinations',
            'Passenger Music Control',
            'Image Viewer',
            'Wireless Connection to Driver Phone',
            'No Root Required'
        ],
        whatItIs: 'AA Passenger (also known as AA 2nd Seat) is an innovative utility that bridges the gap between the driver\'s phone and a passenger\'s device. It allows a passenger to connect their phone to the driver\'s phone (via Wi-Fi Direct or Hotspot) and "cast" content or commands to the Android Auto session. This solves the common frustration of locked controls while driving.',
        whatItCanDo: [
            'Search for a destination on the passenger phone and send it directly to Google Maps/Waze on Android Auto',
            'Play audio files from the passenger\'s device through the car stereo',
            'Display photos on the car screen (e.g., showing the driver a picture of the destination)',
            'Allow the passenger to act as a co-pilot without distracting the driver'
        ],
        supportedVersions: 'Requires Android 6.0+. The passenger device does not need to be connected to the car via USB, only wirelessly to the driver\'s phone.',
        whatItCannotDo: [
            'Take over the entire Android Auto interface (it works as a comprehensive add-on)',
            'Allow the passenger to answer phone calls on behalf of the driver via the car system (handling is still routed to the driver\'s phone)'
        ],
        installationSteps: [
            {
                title: 'Driver Install',
                description: 'Use AAAD to install "AA Passenger" on the driver\'s phone (the one connected to the car).'
            },
            {
                title: 'Passenger Install',
                description: 'Install the companion app on the passenger\'s phone (often available via direct APK or shared from the driver).'
            },
            {
                title: 'Pair Devices',
                description: 'Open the app on both phones. Connect them using the built-in wireless pairing mechanism.'
            },
            {
                title: 'Start Using',
                description: 'The passenger can now send locations or media to the car screen.'
            }
        ],
        faq: [
            {
                question: 'Does the passenger need AAAD?',
                answer: 'No, AAAD is only needed on the driver\'s phone to install the main app that runs on Android Auto. The passenger just needs the standard Android app.'
            },
            {
                question: 'Can I type while the car is moving?',
                answer: 'Yes! Since the passenger is using their own phone (which is not locked by Android Auto\'s safety restrictions), they can type destinations freely and send them to the car.'
            }
        ],
        keywords: ['AA Passenger', 'AA 2nd Seat', 'Android Auto Passenger Mode', 'Co-pilot Android Auto', 'Unlock Android Auto Typing']
    }
}

