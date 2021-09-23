import dashboardLight from '../../../Assets/LeftNav-Images/Light-Outline/Home.svg'
import liveStatusLight from '../../../Assets/LeftNav-Images/Light-Outline/Activity.svg'
import leaderboardLight from '../../../Assets/LeftNav-Images/Light-Outline/3 User.svg'
import alertLight from '../../../Assets/LeftNav-Images/Light-Outline/Notification.svg'
import machinesLight from '../../../Assets/LeftNav-Images/Light-Outline/Category.svg'
import manageLight from '../../../Assets/LeftNav-Images/Light-Outline/Folder.svg'
import exportsLight from '../../../Assets/LeftNav-Images/Light-Outline/Download.svg'

import dashboardDark from '../../../Assets/LeftNav-Images/Bold/Home.svg'
import liveStatusDark from '../../../Assets/LeftNav-Images/Bold/Activity.svg'
import leaderboardDark from '../../../Assets/LeftNav-Images/Bold/3 User.svg'
import alertDark from '../../../Assets/LeftNav-Images/Bold/Notification.svg'
import machinesDark from '../../../Assets/LeftNav-Images/Bold/Category.svg'
import manageDark from '../../../Assets/LeftNav-Images/Bold/Folder.svg'
import exportsDark from '../../../Assets/LeftNav-Images/Bold/Download.svg'

export const navItems = [
    {
        name:"Dashboard",
        link:"/dashboard",
        imageLight:dashboardLight,
        imageDark:dashboardDark
    },
    {
        name:"Live Status",
        link:"/liveStatus",
        imageLight:liveStatusLight,
        imageDark:liveStatusDark
    },
    {
        name:"Leaderboard",
        link:"/leaderboard",
        imageLight:leaderboardLight,
        imageDark:leaderboardDark
    },
    {
        name:"Alert",
        link:"/alert",
        imageLight:alertLight,
        imageDark:alertDark
    },
    {
        name:"Machines",
        link:"/machines",
        imageLight:machinesLight,
        imageDark:machinesDark
    },
    {
        name:"Manage",
        link:"/manage",
        imageLight:manageLight,
        imageDark:manageDark
    },
    {
        name:"Export",
        link:"/export",
        imageLight:exportsLight,
        imageDark:exportsDark
    },
]