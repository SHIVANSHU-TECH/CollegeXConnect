"use client";

import { useState } from "react";
import { RefreshCw } from 'lucide-react';
const NotesFetcher = () => {
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [notesLink, setNotesLink] = useState("");
  const [youtubeLink, setYoutubeLink] = useState('');
  const [showYoutubeIframe, setShowYoutubeIframe] = useState(false)
  const [titleName, setTitleName] = useState('Notes');


  const branches = [
    "CSE",
    "CST",
    "CS",
    "CSE_DS", // sem 6 se different hai
    "CSE_AI", // sem 6 se different hai
    "IT",
    "ITE",
    "AIDS",
    "AIML",
    "EE",
    "ECE",
    "EEE",
    "MAE",
    "ME",
    "CE",
    "ICE",
    "Chemical Engineering",
    "IIT",
    "Energy Engineering",
    "Automation and Robotics",
  ];
  const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  const subjects = {
    CSE: {
      1: {
        "Applied Chemistry": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`
        },
        "Applied Mathematics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`
        },
        "Applied Physics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`
        },
        "Communication Skils": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`
        },
        "Electrical Science": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`
        },
        "Environmental Studies": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`
        },
        "Manufacturing Process": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`
        },
        "Programming in C": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`
        },
        "Applied Physics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`
        },
        "Engeenering Mechanics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`
        },
        "Human values and Ethics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`
        },
        "Indian Consitution": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`
        }
      },
      3: {
        "Computational Methods": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qrPKOzf49SgXjGwryc30-lKx9pryLAas&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=im2NGAf_mv8yd3cF&amp;list=PLEHGYFbPuuMGfyIXGx8V-Xhi0HRSjT8Ak&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qrPKOzf49SgXjGwryc30-lKx9pryLAas&allowdl=no`
        },
        "Data Stuructures": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1keYobeUkV58zcCGAFdk3TWiaesc4eo19&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1keYobeUkV58zcCGAFdk3TWiaesc4eo19&allowdl=no`
        },
        "Digital Logics and Computer Design": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Vv3LH4Jj41UpR1DAwG5_90r-aEOWrF0S&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=wSfbx3YO3f_YiVeC&amp;list=PLmXKhU9FNesSfX1PVt4VGm-wbIKfemUWK&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Vv3LH4Jj41UpR1DAwG5_90r-aEOWrF0S&allowdl=no`
        },
        "Discrete Matthematics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1jV_jTBQIOY7ytlwS3z_AdlmeqA8nfjpD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1jV_jTBQIOY7ytlwS3z_AdlmeqA8nfjpD&allowdl=no`
        },
        "Indian knowledge System": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1O4SFInrF2ulHi80xzRD4EhgvU9qkwGd0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gNo4MMY0vWgwGKw9&amp;list=PL9MeEziOdUu7B41H23_Dl2tJjP25adLq1&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1O4SFInrF2ulHi80xzRD4EhgvU9qkwGd0&allowdl=no`
        },
        "Object Oriented Programming": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1y2HrMCAS7z7Y5Jslj2htSyeXmuEKI9NK&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=rc0-IDmCjUtFOscH&amp;list=PLz8TdOA7NTzSe5HdXz_nAk9kmOJLDi5ZB&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1y2HrMCAS7z7Y5Jslj2htSyeXmuEKI9NK&allowdl=no`
        }
      },
      4: {
        "Circuit and Systems": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1QSq2NRYXB7m8ixUmpi9vUGsjQckl4WxX&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Gejj_pBsGH-bVxV9&amp;list=PLSMKKUFl3GMCNkTqZf9vLQbOUOLgX6EdY&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1QSq2NRYXB7m8ixUmpi9vUGsjQckl4WxX&allowdl=no`
        },
        "Database Management System": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ae5qyVnNNfj8xwK6jjtL36tIaOEY3Caj&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ae5qyVnNNfj8xwK6jjtL36tIaOEY3Caj&allowdl=no`
        },
        "Probability Stats and linear programming": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XFmhHxsjmRHV0zzPepFE1DVE3rrogQ_g&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WbHibtxnoGs5BnV8&amp;list=PLxCzCOWd7aiFjZP4z1_3Kr3m3J5wu5Q8V&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XFmhHxsjmRHV0zzPepFE1DVE3rrogQ_g&allowdl=no`
        },
        "Programming in Java": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1uiJXmyaEwyLrZJVqzEBBG2tXK7m5N3fQ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=cTOH8sIXsYIHyfDj&amp;list=PL5Rc9H5eTGY5MJYZix569VHzzV1raWWsd&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1uiJXmyaEwyLrZJVqzEBBG2tXK7m5N3fQ&allowdl=no`
        },
        "Technical Writing": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WV5KwoKHDqsZIhCJHZH7kH3etUWbwLvy&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=nj3BFjVRj4UWStsQ&amp;list=PLbCAq4ggAQuErAqle6UgpHnwvrJYcQ_Bc&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WV5KwoKHDqsZIhCJHZH7kH3etUWbwLvy&allowdl=no`
        },
        "Theory of Computation": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1tsdWI3KNOrF71KNbtCWhOTGwXWneFczu&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=tI9zYQYjKx5NohHL&amp;list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1tsdWI3KNOrF71KNbtCWhOTGwXWneFczu&allowdl=no`
        }
      },
      5: {
        "Compiler Design": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19QreW3bV3xNiPC14NVk4dJr5JpEPHH59&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=6Z1AelqpjSBI3iBE&amp;list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19QreW3bV3xNiPC14NVk4dJr5JpEPHH59&allowdl=no`
        },
        "Computer Networks": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1L8hCo9iZt2mBFV-XiHnDgFtW3ii0G4IB&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=EhNGoD-RyxT1cXcA&amp;list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1L8hCo9iZt2mBFV-XiHnDgFtW3ii0G4IB&allowdl=no`
        },
        "Design and Analysis of Algorithm": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nrq4Y4xoBP1unBuZXBKoqVaigQVKFkgo&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=m2nb5DbJyN1ScNHb&amp;list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nrq4Y4xoBP1unBuZXBKoqVaigQVKFkgo&allowdl=no`
        },
        "Economics for Engineer": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1J9Yef3_LM7Uj5pap5fXpHdxAg0VbYhJz&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CJLF1OuTlBWgUVcn&amp;list=PLAggmvP4R7cZxqRyaxyQfjogPrvsbdfXY&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1J9Yef3_LM7Uj5pap5fXpHdxAg0VbYhJz&allowdl=no`
        },
        "Operating System": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YEa7fbbX5jqmxZYnS3jlwB9CiaB6HSp-&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Vj-507j3UMnr4UOp&amp;list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YEa7fbbX5jqmxZYnS3jlwB9CiaB6HSp-&allowdl=no`
        },
        "Software Engineering": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1zVmbnt2NJiPITxAkI5b2dW89djpWccLt&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=5xK8UXjtys5XKe5-&amp;list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1zVmbnt2NJiPITxAkI5b2dW89djpWccLt&allowdl=no`
        }
      },
      6: {
        "Advanced Computer Networks ": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nknCFJUGAZhLgskbgRLjJ92purekylYd&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=BWDIHj6Hzt5cJMDM&amp;list=PL_ACaauDUVgTUy8fbBt1MnXR-8Feglflz&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nknCFJUGAZhLgskbgRLjJ92purekylYd&allowdl=no`
        },
        "Advanced Java Programming": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1AbveJXH8tjr82WVjzLxegpUc7W73QzzI&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=mVYG8XUYgAstY9ox&amp;list=PLdBwVRHjcI__HBqxd51g3j3GJSRaocWZ7&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1AbveJXH8tjr82WVjzLxegpUc7W73QzzI&allowdl=no`
        },
        "Artificial Intelligence": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1sMbS5z0yKTjbyIjyUqu4bM2hF19bNdn7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=zTklJPJX_5lXi7XX&amp;list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1sMbS5z0yKTjbyIjyUqu4bM2hF19bNdn7&allowdl=no`
        },

        "Software Project Management": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wMBT9QtsjRYsgGF2bc99icWxE-bHzV99&allowdl=no`,
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wMBT9QtsjRYsgGF2bc99icWxE-bHzV99&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=SOW3AamDox5NZqVT&amp;list=PLh11ucJN276KHr_DR1Ok-EWYfSwtaQXND&rel=0'
        },
        "Web Technologies": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1f9Jk36XIcFAhPii17QS2je7r3IXy8q9G&allowdl=no`,
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1f9Jk36XIcFAhPii17QS2je7r3IXy8q9G&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=4shALtyBalUia6HT&amp;list=PLUwI7zx-CMG1_kNkWrryGnXRdw59_hgBO&rel=0'
        },
        "Wireless Communication and Networks": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qejHdencAoQmCKISAfTpVy4O-UQ-Yqf1&allowdl=no`,
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qejHdencAoQmCKISAfTpVy4O-UQ-Yqf1&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=4QEEjBUecnJ8-ErU&amp;list=PLzUKfMcBC0HTp9qvTR_cEbYNhYzNes7BG&rel=0'
        }
      },
      7: {
        "Data Structures": {
          driveUrl: "https://drive.google.com/drive/folders/1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH?usp=drive_link",
          pyqLink: "https://drive.google.com/drive/folders/1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH?usp=drive_link",
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        DBMS: {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH&allowdl=no`,
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Discrete Mathematics": {
          driveUrl: "https://drive.google.com/file/d/your-cse-discrete-math-link/view",
          pyqLink: "https://drive.google.com/file/d/your-cse-discrete-math-link/view",
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        }
      },
      8: {
        "Data Structures": {
          driveUrl: "https://drive.google.com/drive/folders/1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH?usp=drive_link",
          pyqLink: "https://drive.google.com/drive/folders/1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH?usp=drive_link",
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        DBMS: {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH&allowdl=no`,
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Discrete Mathematics": {
          driveUrl: "https://drive.google.com/file/d/your-cse-discrete-math-link/view",
          pyqLink: "https://drive.google.com/file/d/your-cse-discrete-math-link/view",
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        }
      }
    },
    CST: {
      1: {
        "Applied Chemistry": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`
        },
        "Applied Mathematics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`
        },
        "Applied Physics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`
        },
        "Communication Skills": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`
        },
        "Electrical Science": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`
        },
        "Environmental Studies": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`
        },
        "Manufacturing Process": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`
        },
        "Programming in C": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`
        },
        "Applied Physics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`
        },
        "Engineering Mechanics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`
        },
        "Human Values and Ethics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI1CM1&amp;list=PLNkYd9D3WPlFHA68F39Kzb_SkjA-RX5lDJglGAr9kvG&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`
        },
        "Technical Communication": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1oGH5EhzctlgTklL4WZ_Uot0CBcMT1PSl&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Z2TP2DafFPkRAjJ5&amp;list=PLoQRmoHtJjM8PePoaD3BBl_hE8BSdzoTT&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1oGH5EhzctlgTklL4WZ_Uot0CBcMT1PSl&allowdl=no`
        },
        "Engineering Drawing": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1EmcRxqDJqRU-UbhVFkAjSwofLIFNimRg&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Rucph9yDYtB8h2Gn&amp;list=PL9RcWoqXmzaIrjo4zZySbAbznSC8M0Xhr&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1EmcRxqDJqRU-UbhVFkAjSwofLIFNimRg&allowdl=no`
        },
        "Programming in C++": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=10YfPrZAA0L0eiyAThUTYHegECu9AnQ9A&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=06zV4NiqsbUh2-pS&amp;list=PLN4VQJyrNgluh7McDQgdklMVjKMl8Qlg6&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=10YfPrZAA0L0eiyAThUTYHegECu9AnQ9A&allowdl=no`
        }
      },
      3: {
        "Applied Mathematics-3": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1tOAHGtO5r9HbW_Yr6ENXZBOQczpYuM5C&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLJ9sAU-MtK-Rp9tJ1UgnBh7cOY2eU3sD4',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1tOAHGtO5r9HbW_Yr6ENXZBOQczpYuM5C&allowdl=no`
        },
        "Data Structures": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YzVks3SpAsA6Geu1Oe_zI2e2I1fFzKvS&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLgUwDviBIf0qYbL4TBaEWgb-ljVdhkM7R',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YzVks3SpAsA6Geu1Oe_zI2e2I1fFzKvS&allowdl=no`
        },
        "Digital Logic Design": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Bz4XO8RequP0HJ4PMqJm7fi8spgKm7kZ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLBlnK6fEyqRgLRzq3D_XyI_0UVLsb8eNP',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Bz4XO8RequP0HJ4PMqJm7fi8spgKm7kZ&allowdl=no`
        },
        "Object Oriented Programming": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1yUxlf1E7bwlNjbVozW7rUsmXJRX5XVq8&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLqleLpAMfxGDmDEJDJmV3tUbh4Dvu5jv5',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1yUxlf1E7bwlNjbVozW7rUsmXJRX5XVq8&allowdl=no`
        },
        "Computer Organization and Architecture": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1LqTSMFXuBieAvfgD8nzzsmPAcZkYm_T7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLsFNQxKNzefKdguo6JSp3vnQ-gLRZIZ5q',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1LqTSMFXuBieAvfgD8nzzsmPAcZkYm_T7&allowdl=no`
        },
        "Discrete Mathematics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1dMTmMMyiUQJrGdCdU2pZbzWOTQlIVvdd&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLBGx66SQNZ8Y6V9v-kBoP48I7B1q0O_hf',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1dMTmMMyiUQJrGdCdU2pZbzWOTQlIVvdd&allowdl=no`
        }
      },
      4: {
        "Algorithms": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1GtuHRAVmfN2STzxyKOrM8rz-cd2e9EPn&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLBlnK6fEyqRgLLlzdgiTHIfO0OF4CqJbx',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1GtuHRAVmfN2STzxyKOrM8rz-cd2e9EPn&allowdl=no`
        },
        "Database Management Systems": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qHhCmcgglDyyZ_BDM95bbz1X4S6H0LRz&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLV8vIYTIdSnarvQm1TIPDfCqQdU0FN_FH',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qHhCmcgglDyyZ_BDM95bbz1X4S6H0LRz&allowdl=no`
        },
        "Operating Systems": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1G9V1Oq5z7MtGe_FhIknir3Wujn5pZt7E&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLLy_2iUCG87CQhELCytM75-XJmi3gGzdx',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1G9V1Oq5z7MtGe_FhIknir3Wujn5pZt7E&allowdl=no`
        },
        "Software Engineering": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1CqJKnAzdo7_PthZfz7H8-Lu3CbnTcNS0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PL9RcWoqXmzaKltVcf6cR0yTgih0wUKucy',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1CqJKnAzdo7_PthZfz7H8-Lu3CbnTcNS0&allowdl=no`
        },
        "Theory of Computation": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1GEcEmSW_V27z7Op98FyCU2kLONq62d6f&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLBlnK6fEyqRh6ISoTq2haqp_MxLEg8Zh9',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1GEcEmSW_V27z7Op98FyCU2kLONq62d6f&allowdl=no`
        },
        "Computer Graphics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1KxI8q-KUwvCFpOMafGnNpM6Cgu_L7Vm8&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLmXKhU9FNesQKVOJQqLLWcXYbOMvMW7Tz',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1KxI8q-KUwvCFpOMafGnNpM6Cgu_L7Vm8&allowdl=no`
        }
      },
      5: {
        "Compiler Design": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1CnQOGoz7cLl7d2BFvMiQJREt9gn6OEsf&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLWy0sF6WnOxkc9ov2ke9g6h0uqNwGZWhb',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1CnQOGoz7cLl7d2BFvMiQJREt9gn6OEsf&allowdl=no`
        },
        "Computer Networks": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1y_WbGQdD6yM02q9l1Bb3EAfS6ndW8P-l&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLBzjF0aFVYJHhRYG4wutE_pZrdpLGRNyb',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1y_WbGQdD6yM02q9l1Bb3EAfS6ndW8P-l&allowdl=no`
        },
        "Software Testing": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WleE8fDGz9cLjjPS6R9Wj4OjXoIW1cF2&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLXQ6XQeZmXZ2RWOnE39gWTpTIuE5ySH5k',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WleE8fDGz9cLjjPS6R9Wj4OjXoIW1cF2&allowdl=no`
        },
        "Network Security": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Usa_7_0jJ4d5eiqMhu6HS3sDZb4GkxS&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLH5DLG1WkdFgyknbMkftVdV9Aoy0uXBKr',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Usa_7_0jJ4d5eiqMhu6HS3sDZb4GkxS&allowdl=no`
        },
        "Human-Computer Interaction": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1AE8d3JLxXZcG0A-Fc2ZlYV9u0tMSmfG7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PL0flKJxZLLlS7C6EC3R1IJkDzwGmo2hdZ',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1AE8d3JLxXZcG0A-Fc2ZlYV9u0tMSmfG7&allowdl=no`
        }
      },
      6: {
        "Artificial Intelligence": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1c7F2PIjTx5rlzNDPcAeQLH1e0B0QEZfw&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PL0bC4AxJ8dEV2JZ7s4wK8DKW9r0w7z6V5',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1c7F2PIjTx5rlzNDPcAeQLH1e0B0QEZfw&allowdl=no`
        },
        "Machine Learning": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1CkVW9hQd2LCjvViNn7bENlz7BG-bRfZo&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PL4O8i8wkgdFwJ7J_l2apc5mbPO2RqaQTX',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1CkVW9hQd2LCjvViNn7bENlz7BG-bRfZo&allowdl=no`
        },
        "Embedded Systems": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1GmpU-ZJx05AVoG6IrARe8e-LZMlktTkM&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLRkNd_Y5EbQ7FzvHfONg3D8ubYzZ-2huP',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1GmpU-ZJx05AVoG6IrARe8e-LZMlktTkM&allowdl=no`
        },
        "Data Science": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1hd0zPSgoFHhRa1TQWrBY7wdQdn13TqIZ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PL5w_2pG2BNzL_A_7H0LObJtDkjCMx5p-E',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1hd0zPSgoFHhRa1TQWrBY7wdQdn13TqIZ&allowdl=no`
        },
        "Cloud Computing": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1G8Fk7vyy37M1e7csKZ6m-2oP0PPp3v3z&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PL9b5D3LzY5F2jZ_G9Sw1vWhMjD_ErK9LR',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1G8Fk7vyy37M1e7csKZ6m-2oP0PPp3v3z&allowdl=no`
        }
      },
      7: {
        "Big Data": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Q1oAmo8GJ9yP5u5h7xVeA5Bx9HMS4VIX&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLm9Rd_g53zze-IMC4nWyMnWbOuxWmpHCE',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Q1oAmo8GJ9yP5u5h7xVeA5Bx9HMS4VIX&allowdl=no`
        },
        "Blockchain Technology": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1HBdnzRl9pHf1X1wBJKZKhV07uo8FsELm&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLgC0H7OUQeCBa8v-8lc0Ntnr3k9M7BlZX',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1HBdnzRl9pHf1X1wBJKZKhV07uo8FsELm&allowdl=no`
        },
        "Internet of Things (IoT)": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1pUs8tiRz5aFg5D67Fc12L2Iz17RfKpED&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLN32e21gq7A4GH5ckxdPmf4H1f7j3iB3r',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1pUs8tiRz5aFg5D67Fc12L2Iz17RfKpED&allowdl=no`
        },
        "Advanced Database Management Systems": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1FLHl9ZNhMcD0wL9zMgD68ocv59yTH-wd&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PL3-jPzLHX79bZ1nMfAFj-m30RPA4Ap8f9',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1FLHl9ZNhMcD0wL9zMgD68ocv59yTH-wd&allowdl=no`
        },
        "Mobile Computing": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1GAcWnY_qDkocGeBauT8d4rrYtdqFkKjW&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PL4xTbA8-ZThA18n5l7qJpRTUmKmE-kDA9',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1GAcWnY_qDkocGeBauT8d4rrYtdqFkKjW&allowdl=no`
        }
      },
      8: {
        "Cloud Native Applications": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1xRUyRVtWnIQnMGNRIzJwvW8gMvZ-iN4I&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PL2kGz8p1y6Tazr0rDQesxPfs7Wxar8B4V',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1xRUyRVtWnIQnMGNRIzJwvW8gMvZ-iN4I&allowdl=no`
        },
        "Augmented Reality (AR) and Virtual Reality (VR)": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Eij0D-NmT3s-b3j8dfRo8KNKovRTNzzK&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLJzxy2FTh7vgHw5O8_1gM8PtDHrPQyfL1',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Eij0D-NmT3s-b3j8dfRo8KNKovRTNzzK&allowdl=no`
        },
        "Advanced Machine Learning": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mCqrbZDFWLP1nGg7yY34v3MD4N2BSK7K&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLnYkCFLF5D7IEf6gDZY6K-FP6BMMYy2kc',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mCqrbZDFWLP1nGg7yY34v3MD4N2BSK7K&allowdl=no`
        },
        "Ethical Hacking": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wVJYfgWbSl4K8v5ntEucF_8VpEmRXF3M&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PL2l4UbCvjGJYdRU3m6MAAE7N0DC5g4qBF',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wVJYfgWbSl4K8v5ntEucF_8VpEmRXF3M&allowdl=no`
        },
        "Project Management": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Bzld7JjAqOHcuRV7Pq8Smo3x-tWkOVb7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?list=PLFk4g8hmUwTSkSTvvQdLqk1k6MNebPz-4',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Bzld7JjAqOHcuRV7Pq8Smo3x-tWkOVb7&allowdl=no`
        }
      }
    },
    CS: {
      1: {
        "Applied Chemistry": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`
        },
        "Applied Mathematics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`
        },
        "Applied Physics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`
        },
        "Communication Skils": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`
        },
        "Electrical Science": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`
        },
        "Environmental Studies": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`
        },
        "Manufacturing Process": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`
        },
        "Programming in C": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`
        },
        "Applied Physics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`
        },
        "Engeenering Mechanics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`
        },
        "Human values and Ethics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`
        },
        "Indian Consitution": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`
        }
      },
      3: {
        "Computational Methods": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qrPKOzf49SgXjGwryc30-lKx9pryLAas&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=im2NGAf_mv8yd3cF&amp;list=PLEHGYFbPuuMGfyIXGx8V-Xhi0HRSjT8Ak&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qrPKOzf49SgXjGwryc30-lKx9pryLAas&allowdl=no`
        },
        "Data Stuructures": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1keYobeUkV58zcCGAFdk3TWiaesc4eo19&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1keYobeUkV58zcCGAFdk3TWiaesc4eo19&allowdl=no`
        },
        "Digital Logics and Computer Design": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Vv3LH4Jj41UpR1DAwG5_90r-aEOWrF0S&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=wSfbx3YO3f_YiVeC&amp;list=PLmXKhU9FNesSfX1PVt4VGm-wbIKfemUWK&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Vv3LH4Jj41UpR1DAwG5_90r-aEOWrF0S&allowdl=no`
        },
        "Discrete Matthematics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1jV_jTBQIOY7ytlwS3z_AdlmeqA8nfjpD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1jV_jTBQIOY7ytlwS3z_AdlmeqA8nfjpD&allowdl=no`
        },
        "Indian knowledge System": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1O4SFInrF2ulHi80xzRD4EhgvU9qkwGd0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gNo4MMY0vWgwGKw9&amp;list=PL9MeEziOdUu7B41H23_Dl2tJjP25adLq1&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1O4SFInrF2ulHi80xzRD4EhgvU9qkwGd0&allowdl=no`
        },
        "Object Oriented Programming": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1y2HrMCAS7z7Y5Jslj2htSyeXmuEKI9NK&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=rc0-IDmCjUtFOscH&amp;list=PLz8TdOA7NTzSe5HdXz_nAk9kmOJLDi5ZB&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1y2HrMCAS7z7Y5Jslj2htSyeXmuEKI9NK&allowdl=no`
        }
      },
      4: {
        "Circuit and Systems": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1QSq2NRYXB7m8ixUmpi9vUGsjQckl4WxX&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Gejj_pBsGH-bVxV9&amp;list=PLSMKKUFl3GMCNkTqZf9vLQbOUOLgX6EdY&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1QSq2NRYXB7m8ixUmpi9vUGsjQckl4WxX&allowdl=no`
        },
        "Database Management System": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ae5qyVnNNfj8xwK6jjtL36tIaOEY3Caj&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ae5qyVnNNfj8xwK6jjtL36tIaOEY3Caj&allowdl=no`
        },
        "Probability Stats and linear programming": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XFmhHxsjmRHV0zzPepFE1DVE3rrogQ_g&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WbHibtxnoGs5BnV8&amp;list=PLxCzCOWd7aiFjZP4z1_3Kr3m3J5wu5Q8V&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XFmhHxsjmRHV0zzPepFE1DVE3rrogQ_g&allowdl=no`
        },
        "Programming in Java": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1uiJXmyaEwyLrZJVqzEBBG2tXK7m5N3fQ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=cTOH8sIXsYIHyfDj&amp;list=PL5Rc9H5eTGY5MJYZix569VHzzV1raWWsd&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1uiJXmyaEwyLrZJVqzEBBG2tXK7m5N3fQ&allowdl=no`
        },
        "Technical Writing": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WV5KwoKHDqsZIhCJHZH7kH3etUWbwLvy&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=nj3BFjVRj4UWStsQ&amp;list=PLbCAq4ggAQuErAqle6UgpHnwvrJYcQ_Bc&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WV5KwoKHDqsZIhCJHZH7kH3etUWbwLvy&allowdl=no`
        },
        "Theory of Computation": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1tsdWI3KNOrF71KNbtCWhOTGwXWneFczu&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=tI9zYQYjKx5NohHL&amp;list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1tsdWI3KNOrF71KNbtCWhOTGwXWneFczu&allowdl=no`
        }
      },
      5: {
          "Compiler Design": {
            driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19QreW3bV3xNiPC14NVk4dJr5JpEPHH59&allowdl=no`,
            youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=6Z1AelqpjSBI3iBE&amp;list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc&rel=0',
            pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19QreW3bV3xNiPC14NVk4dJr5JpEPHH59&allowdl=no`
          },
          "Computer Networks": {
            driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1L8hCo9iZt2mBFV-XiHnDgFtW3ii0G4IB&allowdl=no`,
            youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=EhNGoD-RyxT1cXcA&amp;list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&rel=0',
            pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1L8hCo9iZt2mBFV-XiHnDgFtW3ii0G4IB&allowdl=no`
          },
          "Design and Analysis of Algorithm": {
            driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nrq4Y4xoBP1unBuZXBKoqVaigQVKFkgo&allowdl=no`,
            youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=m2nb5DbJyN1ScNHb&amp;list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa&rel=0',
            pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nrq4Y4xoBP1unBuZXBKoqVaigQVKFkgo&allowdl=no`
          },
          "Economics for Engineer": {
            driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1J9Yef3_LM7Uj5pap5fXpHdxAg0VbYhJz&allowdl=no`,
            youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CJLF1OuTlBWgUVcn&amp;list=PLAggmvP4R7cZxqRyaxyQfjogPrvsbdfXY&rel=0',
            pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1J9Yef3_LM7Uj5pap5fXpHdxAg0VbYhJz&allowdl=no`
          },
          "Operating System": {
            driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YEa7fbbX5jqmxZYnS3jlwB9CiaB6HSp-&allowdl=no`,
            youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Vj-507j3UMnr4UOp&amp;list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&rel=0',
            pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YEa7fbbX5jqmxZYnS3jlwB9CiaB6HSp-&allowdl=no`
          },
        "Software Engineering": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1zVmbnt2NJiPITxAkI5b2dW89djpWccLt&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=5xK8UXjtys5XKe5-&amp;list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&rel=0'
        }
      },
      6: {
        "Advanced Computer Networks ": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nknCFJUGAZhLgskbgRLjJ92purekylYd&allowdl=no`,
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nknCFJUGAZhLgskbgRLjJ92purekylYd&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=BWDIHj6Hzt5cJMDM&amp;list=PL_ACaauDUVgTUy8fbBt1MnXR-8Feglflz&rel=0'
        },
        "Advanced Java Programming": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1AbveJXH8tjr82WVjzLxegpUc7W73QzzI&allowdl=no`,
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1AbveJXH8tjr82WVjzLxegpUc7W73QzzI&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=mVYG8XUYgAstY9ox&amp;list=PLdBwVRHjcI__HBqxd51g3j3GJSRaocWZ7&rel=0'
        },
        "Artificial Intelligence": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1sMbS5z0yKTjbyIjyUqu4bM2hF19bNdn7&allowdl=no`,
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1sMbS5z0yKTjbyIjyUqu4bM2hF19bNdn7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=zTklJPJX_5lXi7XX&amp;list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&rel=0'
        },
        "Software Project Management": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wMBT9QtsjRYsgGF2bc99icWxE-bHzV99&allowdl=no`,
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wMBT9QtsjRYsgGF2bc99icWxE-bHzV99&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=SOW3AamDox5NZqVT&amp;list=PLh11ucJN276KHr_DR1Ok-EWYfSwtaQXND&rel=0'
        },
        "Web Technologies": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1f9Jk36XIcFAhPii17QS2je7r3IXy8q9G&allowdl=no`,
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1f9Jk36XIcFAhPii17QS2je7r3IXy8q9G&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=4shALtyBalUia6HT&amp;list=PLUwI7zx-CMG1_kNkWrryGnXRdw59_hgBO&rel=0'
        },
        "Wireless Communication and Networks": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qejHdencAoQmCKISAfTpVy4O-UQ-Yqf1&allowdl=no`,
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qejHdencAoQmCKISAfTpVy4O-UQ-Yqf1&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=4QEEjBUecnJ8-ErU&amp;list=PLzUKfMcBC0HTp9qvTR_cEbYNhYzNes7BG&rel=0'
        }
      }
    },
    CSE_DS: {
      1: {
        "Applied Chemistry": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`
        },
        "Applied Mathematics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`
        },
        "Applied Physics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`
        },
        "Communication Skils": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`
        },
        "Electrical Science": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`
        },
        "Environmental Studies": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`
        },
        "Manufacturing Process": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`
        },
        "Programming in C": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`
        },
        "Applied Physics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`
        },
        "Engeenering Mechanics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`
        },
        "Human values and Ethics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8pXlzxSpDW3g8Da1&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WHMzi2I04u7Wv1Ae&amp;list=PL-BzzVdD1LRqOsBzP7PAhhw8eydt7p3xL&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8pXlzxSpDW3g8Da1&allowdl=no`
        },
        "Network Analysis": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1lSzn-uzXthW8UfrSZ6FC4VwifdQ8DumT&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=F_-dbr5iRul-W98F&amp;list=PLK5NqQ8i9dY2M7AuDBV7TcAc-WVYmKk7U&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1lSzn-uzXthW8UfrSZ6FC4VwifdQ8DumT&allowdl=no`
        },
        "Object Oriented Programming Using C++": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iz3AiZ5F3Vsw7Dl8G1KxJ2z_cVDmfPlx&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=85eOBiJw1AXpmQdW&amp;list=PL9ZdyQKOn3JH2H6_8e-wYNyd58vMNHqEw&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iz3AiZ5F3Vsw7Dl8G1KxJ2z_cVDmfPlx&allowdl=no`
        },
        "Professional Communication": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1PBJ-P9nffidCzx-7QjVDEytMS4rHtKvl&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=7CzhwSrlQPSR27NO&amp;list=PL-KUo6QmTGrw50T7tOSp0x2q4FdHfPfF2&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1PBJ-P9nffidCzx-7QjVDEytMS4rHtKvl&allowdl=no`
        }
      },
      3: {
        "Data Structures and Algorithms": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1BVm1KxUSe-xFzbtU5tnsHkvcWyEmVkcH&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=I9xW_wgBfwrwE9XM&amp;list=PLD6d9wv1xgiyRDhPBr0LXb3_0nWkvGF3i&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1BVm1KxUSe-xFzbtU5tnsHkvcWyEmVkcH&allowdl=no`
        },
        "Digital Logic Design": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1r7xHJxeDPmK7R3NC_ih1gCwru-QhrEhp&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=dA8B1r4A_R4zJWbS&amp;list=PLswG0PQ4uThsyY2djPT_eiWlBQwQdE9U0&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1r7xHJxeDPmK7R3NC_ih1gCwru-QhrEhp&allowdl=no`
        },
        "Database Management Systems": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nTRmC3F-L-KGCJ9LxQ0fMoTST3he0p8_&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=QjJvpb7tJSE7g_gH&amp;list=PL5Io4dLkqG5vNeHTW0Hp9eNZl5vDPJxZf&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nTRmC3F-L-KGCJ9LxQ0fMoTST3he0p8_&allowdl=no`
        },
        "Operating Systems": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Pf8F9yHL8fGGBAVMpe10ZXE3iOsX97su&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=B8Fs3mVRw7TuqCk0&amp;list=PL6-VwbjqnKTeutpKzK_Lp6iRT7v1nTqfJ&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Pf8F9yHL8fGGBAVMpe10ZXE3iOsX97su&allowdl=no`
        },
        "Computer Organization": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1_8qI2nN68Acm6FqAeR0F1aYwOupCLPAk&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=dMJzxP_0L67RH-2g&amp;list=PLISc4o9eEVz6w-kryCgsQ78ABcsTnM1p6&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1_8qI2nN68Acm6FqAeR0F1aYwOupCLPAk&allowdl=no`
        },
        "Software Engineering": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1_tz1gXYWx5P5mP1Ngfn9y6UuL3r8XfRX&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=2SkZ7dTLqev3r8Yg&amp;list=PL6Qb2i6bRl78VhQMi26oCip6TnlK3zE83&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1_tz1gXYWx5P5mP1Ngfn9y6UuL3r8XfRX&allowdl=no`
        }
      },
      4: {
        "Design and Analysis of Algorithms": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1zO3ANsVvChOq5jz7UzlbwBrCC5H4A_9l&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=YfF2PQyH6vxfncXz&amp;list=PLy8K9n4_v7Kc9WEEFlq7FL1ZdcE7PwrQ&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1zO3ANsVvChOq5jz7UzlbwBrCC5H4A_9l&allowdl=no`
        },
        "Computer Networks": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1KnP_UwFVw76rYVKnYc16OFjd-r6U7O6_&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=GQmdnmmj1Ow-uB2J&amp;list=PL5odPxoFgXFPxExrI2AqTNd4EO05SMd9&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1KnP_UwFVw76rYVKnYc16OFjd-r6U7O6_&allowdl=no`
        },
        "Web Technologies": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1GFL0H-2V_Rdq1C7Nh8FxttIuG_6oN5mY&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=4Q9WbJwXve8v8Pnt&amp;list=PLXzRaQUCTyixl_TWcH4c6ZZZ-JPqE6Jwv&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1GFL0H-2V_Rdq1C7Nh8FxttIuG_6oN5mY&allowdl=no`
        },
        "Theory of Computation": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1aWkKTksWxOwqFx7HewR-H2otrxADGHpX&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CE-TkJb6vIL-3qx7&amp;list=PLDi6fFNR6ZZMzwvXThDOa2fSwzKFEuLgk&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1aWkKTksWxOwqFx7HewR-H2otrxADGHpX&allowdl=no`
        },
        "Computer Graphics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1dA-ELFfghBLzvlRQ-pdyz1L6zE4-LV1d&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Vh_1LOKti5L5bY1i&amp;list=PLjZY51TjzfbuxDTxiHHt6Y73GITQH_5Be&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1dA-ELFfghBLzvlRQ-pdyz1L6zE4-LV1d&allowdl=no`
        },
        "Software Project Management": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1x4t5Pj2VoaHTdwwEoVdvlLPjUdYQGChd&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=d9H2EnZ0bQ8UWCgX&amp;list=PLckuvsz21Q6qlGzI67nO7bPksb47HrgdP&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1x4t5Pj2VoaHTdwwEoVdvlLPjUdYQGChd&allowdl=no`
        }
      },
      5: {
        "Artificial Intelligence": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1_C_IbmoRSMtCp-VgN91F4sARjJ0nNUF_&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Ow-Kyfsy2hYzGkXn&amp;list=PLx6it4ZG6VULptjVq-k_tBfzeOXR6vP4x&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1_C_IbmoRSMtCp-VgN91F4sARjJ0nNUF_&allowdl=no`
        },
        "Compiler Design": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1moKkFjs7FZyA6fBo_sjyPIJrxUL6DiN9&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=64lg1jT6yzw9cGFn&amp;list=PLj3APlY9gOdchcOkD2_GwXhCmrw1tXzpR&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1moKkFjs7FZyA6fBo_sjyPIJrxUL6DiN9&allowdl=no`
        },
        "Information Security": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Q2N_5kjV_A5a8Lj5f7J4-NhB_L5l1JZ2&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=JwZzTRgtCRJ4gkML&amp;list=PL_lFfLXr5D0qDVOhlgBytJ7NFyqFXThqk&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Q2N_5kjV_A5a8Lj5f7J4-NhB_L5l1JZ2&allowdl=no`
        },
        "Mobile Application Development": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YjWqU1kDSWmr5Dw5Zj8pHtG0OQWX4ef0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=kUQMLkJ2GbD-m7z6&amp;list=PL6GnEekE4iQFPv6TM1GJh4zNWWKpx3wnC&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YjWqU1kDSWmr5Dw5Zj8pHtG0OQWX4ef0&allowdl=no`
        },
        "Data Warehousing and Mining": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1u1DQPS8ykKChak7_pK-F5-9-Vl1WJQ4b&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=5TVXL4jCybknN-Ib&amp;list=PL65pMbhT4D9zKr3Nq-RiR1tWukllmtWuL&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1u1DQPS8ykKChak7_pK-F5-9-Vl1WJQ4b&allowdl=no`
        },
        "Network Security": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WgzEhnJye6X4r3gfytNQZp_R3gUG31I6&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=7y9pLTzO_AxyE6K6&amp;list=PL9tVAsPp7onX5Z2QkmQDWgH9sfFXb2a7u&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WgzEhnJye6X4r3gfytNQZp_R3gUG31I6&allowdl=no`
        }
      },
      6: {
        "Machine Learning": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1_vgE6Q8Bhfek9MPo0UkRIZ0N_j_dBkZC&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=xWw_a8VsZyPTfr-a&amp;list=PLlYnv2Q-e0jE9GfJgqTq2-WX4U8dDlZXl&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1_vgE6Q8Bhfek9MPo0UkRIZ0N_j_dBkZC&allowdl=no`
        },
        "Cloud Computing": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1P_oLPQ0qRauLLJt3dYdcfgxR_SqNDL4H&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=plbgygJPJ9RvK80x&amp;list=PLp3jV3xRzA11uET-svxql09CRW0zk2KwQ&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1P_oLPQ0qRauLLJt3dYdcfgxR_SqNDL4H&allowdl=no`
        },
        "Cybersecurity": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1EYcZMiG28yTuFzokg0keZ2PGPIcyWST4&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=6TiD7UkC6oaLQ5Xj&amp;list=PLhXidZYFvZ7mlnK2DA1zvDfw0Yo0V7_V2&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1EYcZMiG28yTuFzokg0keZ2PGPIcyWST4&allowdl=no`
        },
        "Human-Computer Interaction": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1F5DNv9Dd3jLXg7kDqMwT5ES4MeI4unbY&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=J5J2EHDnvOFze03M&amp;list=PLQjTyRMP5uhvFiKlgA54YXr2_O_j9ce4u&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1F5DNv9Dd3jLXg7kDqMwT5ES4MeI4unbY&allowdl=no`
        },
        "Big Data Analytics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1_DZh2oK9R5xquUP5rW4TEkJ3BR4Iu_X9&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=v6qS1KgoDQQ4TQbu&amp;list=PLTmQjZQHVJzS-Fo8jxjgaUro1dnSOggwA&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1_DZh2oK9R5xquUP5rW4TEkJ3BR4Iu_X9&allowdl=no`
        },
        "Software Engineering": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1tvQ0uFgE7FZQ2gPyK8wGVAT7TZnG7kqE&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=ZC4fDh2-z58D-Dji&amp;list=PLi7cGh8WTRg4BWSIc8bMiO_UxJdJ-SXlv&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1tvQ0uFgE7FZQ2gPyK8wGVAT7TZnG7kqE&allowdl=no`
        }
      },
      7: {
        "Blockchain Technology": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1eWT13XN31te4AFJ2EBO1k20kTSqa2qLx&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=n8e79N2erD4rze40&amp;list=PLm0XZ9EYMMi_vhzwlYoCr6yH7mdWp9-LO&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1eWT13XN31te4AFJ2EBO1k20kTSqa2qLx&allowdl=no`
        },
        "IoT": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1aGZs06_F4eZ4zu0uJ6mZbRwb6wK3F_Xy&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gtLe2WovU1qfELs7&amp;list=PL4y0yA1q2lRuqJg7NqeIBwLg6jWrr4Y_v&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1aGZs06_F4eZ4zu0uJ6mZbRwb6wK3F_Xy&allowdl=no`
        },
        "Advanced Database Management Systems": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1pa8Mz3y4vNnZ7i2dM_8F5qBqkH3UOBg&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=6buUzK4eOQv5_cHj&amp;list=PLyaquwD_P2KfnsL5dYO4WJ0Umd5-R5B0F&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1pa8Mz3y4vNnZ7i2dM_8F5qBqkH3UOBg&allowdl=no`
        },
        "Distributed Systems": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1RkMk7Qp4oeZmDflnvM3K3lS8kW4JvB4z&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Vtp8I4lf47ZFSjtN&amp;list=PL2nKDW1Hii6Q6J6j2Mlz8esn4u2mBExX8&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1RkMk7Qp4oeZmDflnvM3K3lS8kW4JvB4z&allowdl=no`
        },
        "Advanced Computer Networks": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1sXPEVZ1SzdkmKY0fpihh9A1ST8ixTx0D&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=5S18LK6aEIC_4gDw&amp;list=PLT5tTFwM5c8USV3V4m0O6SyB3B3okA1x9&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1sXPEVZ1SzdkmKY0fpihh9A1ST8ixTx0D&allowdl=no`
        }
      },
      8: {
        "Robotics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1_pCTsEzKAXmpnzgIXR7xj7gP2D6dhbh4&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=JemTzU3yoFCthSB0&amp;list=PLS7bF79LFCVCSQtv5R_b2fWyDlLsowzcb&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1_pCTsEzKAXmpnzgIXR7xj7gP2D6dhbh4&allowdl=no`
        },
        "Augmented Reality": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1o86oc57KDELe7Z0wO5g16zdkS7Q6fW3r&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=lP5P6q1It69CVO81&amp;list=PLZg9Z0H9f7-i3ml8Rs-rb7KO2VLOOVP9F&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1o86oc57KDELe7Z0wO5g16zdkS7Q6fW3r&allowdl=no`
        },
        "Natural Language Processing": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Be5nLfDNvsPz6xFfwzxnQUzr7FTTVDJ3&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=kXQXQu_4ROr-2eRH&amp;list=PL7lzO6C-az4JOWYPLs7bc7Rs1O3ZFAeW_&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Be5nLfDNvsPz6xFfwzxnQUzr7FTTVDJ3&allowdl=no`
        },
        "Computer Vision": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XkHchTR9F7FjbqvLk5mfjfn3jkjVkeq8&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=9hZ1A6rm5p4XwbE0&amp;list=PL8VZcUPkZ7z3s6sM1f4Oi-Hb0gfZb2RdP&rel=0',
          pyqLink: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XkHchTR9F7FjbqvLk5mfjfn3jkjVkeq8&allowdl=no`
        }
      }
    },
    CSE_AI: {
      1: {
        "Applied Chemistry": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      },
      3: {
        "Computational Methods": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qrPKOzf49SgXjGwryc30-lKx9pryLAas&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=im2NGAf_mv8yd3cF&amp;list=PLEHGYFbPuuMGfyIXGx8V-Xhi0HRSjT8Ak&rel=0'
        },
        "Data Stuructures": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1keYobeUkV58zcCGAFdk3TWiaesc4eo19&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        "Digital Logics and Computer Design": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Vv3LH4Jj41UpR1DAwG5_90r-aEOWrF0S&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=wSfbx3YO3f_YiVeC&amp;list=PLmXKhU9FNesSfX1PVt4VGm-wbIKfemUWK&rel=0'
        },
        "Discrete Matthematics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1jV_jTBQIOY7ytlwS3z_AdlmeqA8nfjpD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        },
        "Indian knowledge System": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1O4SFInrF2ulHi80xzRD4EhgvU9qkwGd0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gNo4MMY0vWgwGKw9&amp;list=PL9MeEziOdUu7B41H23_Dl2tJjP25adLq1&rel=0'
        },
        "Object Oriented Programming": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1y2HrMCAS7z7Y5Jslj2htSyeXmuEKI9NK&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=rc0-IDmCjUtFOscH&amp;list=PLz8TdOA7NTzSe5HdXz_nAk9kmOJLDi5ZB&rel=0'
        }
      },
      4: {
        "Circuit and Systems": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1QSq2NRYXB7m8ixUmpi9vUGsjQckl4WxX&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Gejj_pBsGH-bVxV9&amp;list=PLSMKKUFl3GMCNkTqZf9vLQbOUOLgX6EdY&rel=0'
        },
        "Database Management System": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ae5qyVnNNfj8xwK6jjtL36tIaOEY3Caj&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Probability Stats and linear programming": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XFmhHxsjmRHV0zzPepFE1DVE3rrogQ_g&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WbHibtxnoGs5BnV8&amp;list=PLxCzCOWd7aiFjZP4z1_3Kr3m3J5wu5Q8V&rel=0'
        },
        "Programming in Java": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1uiJXmyaEwyLrZJVqzEBBG2tXK7m5N3fQ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=cTOH8sIXsYIHyfDj&amp;list=PL5Rc9H5eTGY5MJYZix569VHzzV1raWWsd&rel=0'
        },
        "Technical Writing": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WV5KwoKHDqsZIhCJHZH7kH3etUWbwLvy&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=nj3BFjVRj4UWStsQ&amp;list=PLbCAq4ggAQuErAqle6UgpHnwvrJYcQ_Bc&rel=0'
        },
        "Theory of Computation": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1tsdWI3KNOrF71KNbtCWhOTGwXWneFczu&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=tI9zYQYjKx5NohHL&amp;list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i&rel=0'
        }
      },
      5: {
        "Compiler Design": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19QreW3bV3xNiPC14NVk4dJr5JpEPHH59&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=6Z1AelqpjSBI3iBE&amp;list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc&rel=0'
        },
        "Computer Networks": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1L8hCo9iZt2mBFV-XiHnDgFtW3ii0G4IB&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=EhNGoD-RyxT1cXcA&amp;list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&rel=0'
        },
        "Design and Analysis of Algorithm": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nrq4Y4xoBP1unBuZXBKoqVaigQVKFkgo&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=m2nb5DbJyN1ScNHb&amp;list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa&rel=0'
        },
        "Economics for Engineer": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1J9Yef3_LM7Uj5pap5fXpHdxAg0VbYhJz&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CJLF1OuTlBWgUVcn&amp;list=PLAggmvP4R7cZxqRyaxyQfjogPrvsbdfXY&rel=0'
        },
        "Operating System": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YEa7fbbX5jqmxZYnS3jlwB9CiaB6HSp-&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Vj-507j3UMnr4UOp&amp;list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&rel=0'
        },
        "Software Engineering": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1zVmbnt2NJiPITxAkI5b2dW89djpWccLt&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=5xK8UXjtys5XKe5-&amp;list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&rel=0'
        }
      },
      6: {
        "Principles of Management for Engineers ": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Ha9wFlNYtiNbsJUbmKgVTJIbB2nhwwjT&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=wJe9gBa7ttCyz3xZ&amp;list=PLzs7q4LSx_lTd42jaMK45vE2fWwhxcJzp&rel=0'
        },
        "Introduction to Universal Human Values": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1NfYTGucEkstUJApop0d1ynvpkZx3Lk_q&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=cle_dhOJ1mreNM1x&amp;list=PLim9gWjsjN-M7jKqp65fE0WnvoqCfGxgF&rel=0'
        },
        "Statistics, Statistical Modelling & Data Analytics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1t8y3_W4Z2y9VvevJbDpTd_SX_lB_4hNW&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=M1Y7iUvpGghF-KUu&amp;list=PLunlGNVWDAaY7AeDDzTeu4-DD3g7zmAXs&rel=0'
        },
        "Artificial Intelligence ": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1vRTFQLNjDuC5faRuwbry42D7tunILDMD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=FEFTEe-G5JFvJGlr&amp;list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&rel=0'
        },
        "Fuzzy Systems and Applications": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1xnI22Hv28uoCFOC8rP2TtouDn0Ej717q&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=x1F01TWuJf2mkN8q&amp;list=PLYwpaL_SFmcCPUl8mAnb4g1oExKd0n4Gw&rel=0'
        },
        "Artificial Neural Networks": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1B--D5vkmKYeNR2LBoau95f8PGlK7tsIQ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=U35obVkobJid1LsB&amp;list=PLVsrfTSlZ_42TbmQUmidUJaiRF8D34zQL&rel=0'
        }
      },
      7: {
        "Data Structures": {
          driveUrl: "https://drive.google.com/drive/folders/1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH?usp=drive_link",
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        DBMS: {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Discrete Mathematics": {
          driveUrl: "https://drive.google.com/file/d/your-cse-discrete-math-link/view",
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        }
      },
      8: {
        "Data Structures": {
          driveUrl: "https://drive.google.com/drive/folders/1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH?usp=drive_link",
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        DBMS: {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Discrete Mathematics": {
          driveUrl: "https://drive.google.com/file/d/your-cse-discrete-math-link/view",
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        }
      }
    },
    IT: {
      1: {
        "Applied Chemistry": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      },
      3: {
        "Computational Methods": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qrPKOzf49SgXjGwryc30-lKx9pryLAas&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=im2NGAf_mv8yd3cF&amp;list=PLEHGYFbPuuMGfyIXGx8V-Xhi0HRSjT8Ak&rel=0'
        },
        "Data Stuructures": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1keYobeUkV58zcCGAFdk3TWiaesc4eo19&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        "Digital Logics and Computer Design": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Vv3LH4Jj41UpR1DAwG5_90r-aEOWrF0S&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=wSfbx3YO3f_YiVeC&amp;list=PLmXKhU9FNesSfX1PVt4VGm-wbIKfemUWK&rel=0'
        },
        "Discrete Matthematics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1jV_jTBQIOY7ytlwS3z_AdlmeqA8nfjpD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        },
        "Indian knowledge System": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1O4SFInrF2ulHi80xzRD4EhgvU9qkwGd0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gNo4MMY0vWgwGKw9&amp;list=PL9MeEziOdUu7B41H23_Dl2tJjP25adLq1&rel=0'
        },
        "Object Oriented Programming": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1y2HrMCAS7z7Y5Jslj2htSyeXmuEKI9NK&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=rc0-IDmCjUtFOscH&amp;list=PLz8TdOA7NTzSe5HdXz_nAk9kmOJLDi5ZB&rel=0'
        }
      },
      4: {
        "Circuit and Systems": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1QSq2NRYXB7m8ixUmpi9vUGsjQckl4WxX&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Gejj_pBsGH-bVxV9&amp;list=PLSMKKUFl3GMCNkTqZf9vLQbOUOLgX6EdY&rel=0'
        },
        "Database Management System": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ae5qyVnNNfj8xwK6jjtL36tIaOEY3Caj&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Probability Stats and linear programming": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XFmhHxsjmRHV0zzPepFE1DVE3rrogQ_g&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WbHibtxnoGs5BnV8&amp;list=PLxCzCOWd7aiFjZP4z1_3Kr3m3J5wu5Q8V&rel=0'
        },
        "Programming in Java": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1uiJXmyaEwyLrZJVqzEBBG2tXK7m5N3fQ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=cTOH8sIXsYIHyfDj&amp;list=PL5Rc9H5eTGY5MJYZix569VHzzV1raWWsd&rel=0'
        },
        "Technical Writing": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WV5KwoKHDqsZIhCJHZH7kH3etUWbwLvy&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=nj3BFjVRj4UWStsQ&amp;list=PLbCAq4ggAQuErAqle6UgpHnwvrJYcQ_Bc&rel=0'
        },
        "Theory of Computation": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1tsdWI3KNOrF71KNbtCWhOTGwXWneFczu&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=tI9zYQYjKx5NohHL&amp;list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i&rel=0'
        }
      },
      5: {
        "Compiler Design": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19QreW3bV3xNiPC14NVk4dJr5JpEPHH59&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=6Z1AelqpjSBI3iBE&amp;list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc&rel=0'
        },
        "Computer Networks": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1L8hCo9iZt2mBFV-XiHnDgFtW3ii0G4IB&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=EhNGoD-RyxT1cXcA&amp;list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&rel=0'
        },
        "Design and Analysis of Algorithm": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nrq4Y4xoBP1unBuZXBKoqVaigQVKFkgo&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=m2nb5DbJyN1ScNHb&amp;list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa&rel=0'
        },
        "Economics for Engineer": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1J9Yef3_LM7Uj5pap5fXpHdxAg0VbYhJz&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CJLF1OuTlBWgUVcn&amp;list=PLAggmvP4R7cZxqRyaxyQfjogPrvsbdfXY&rel=0'
        },
        "Operating System": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YEa7fbbX5jqmxZYnS3jlwB9CiaB6HSp-&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Vj-507j3UMnr4UOp&amp;list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&rel=0'
        },
        "Software Engineering": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1zVmbnt2NJiPITxAkI5b2dW89djpWccLt&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=5xK8UXjtys5XKe5-&amp;list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&rel=0'
        }
      },
      6: {
        "Advanced Computer Networks ": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nknCFJUGAZhLgskbgRLjJ92purekylYd&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=BWDIHj6Hzt5cJMDM&amp;list=PL_ACaauDUVgTUy8fbBt1MnXR-8Feglflz&rel=0'
        },
        "Advanced Java Programming": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1AbveJXH8tjr82WVjzLxegpUc7W73QzzI&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=mVYG8XUYgAstY9ox&amp;list=PLdBwVRHjcI__HBqxd51g3j3GJSRaocWZ7&rel=0'
        },
        "Artificial Intelligence": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1sMbS5z0yKTjbyIjyUqu4bM2hF19bNdn7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=zTklJPJX_5lXi7XX&amp;list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&rel=0'
        },
        "Software Project Management": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wMBT9QtsjRYsgGF2bc99icWxE-bHzV99&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=SOW3AamDox5NZqVT&amp;list=PLh11ucJN276KHr_DR1Ok-EWYfSwtaQXND&rel=0'
        },
        "Web Technologies": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1f9Jk36XIcFAhPii17QS2je7r3IXy8q9G&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=4shALtyBalUia6HT&amp;list=PLUwI7zx-CMG1_kNkWrryGnXRdw59_hgBO&rel=0'
        },
        "Wireless Communication and Networks": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qejHdencAoQmCKISAfTpVy4O-UQ-Yqf1&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=4QEEjBUecnJ8-ErU&amp;list=PLzUKfMcBC0HTp9qvTR_cEbYNhYzNes7BG&rel=0'
        }
      }
    },
    ITE: {
      1: {
        "Applied Chemistry": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      },
      3: {
        "Computational Methods": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qrPKOzf49SgXjGwryc30-lKx9pryLAas&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=im2NGAf_mv8yd3cF&amp;list=PLEHGYFbPuuMGfyIXGx8V-Xhi0HRSjT8Ak&rel=0'
        },
        "Data Stuructures": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1keYobeUkV58zcCGAFdk3TWiaesc4eo19&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        "Digital Logics and Computer Design": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Vv3LH4Jj41UpR1DAwG5_90r-aEOWrF0S&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=wSfbx3YO3f_YiVeC&amp;list=PLmXKhU9FNesSfX1PVt4VGm-wbIKfemUWK&rel=0'
        },
        "Discrete Matthematics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1jV_jTBQIOY7ytlwS3z_AdlmeqA8nfjpD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        },
        "Indian knowledge System": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1O4SFInrF2ulHi80xzRD4EhgvU9qkwGd0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gNo4MMY0vWgwGKw9&amp;list=PL9MeEziOdUu7B41H23_Dl2tJjP25adLq1&rel=0'
        },
        "Object Oriented Programming": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1y2HrMCAS7z7Y5Jslj2htSyeXmuEKI9NK&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=rc0-IDmCjUtFOscH&amp;list=PLz8TdOA7NTzSe5HdXz_nAk9kmOJLDi5ZB&rel=0'
        }
      },
      4: {
        "Circuit and Systems": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1QSq2NRYXB7m8ixUmpi9vUGsjQckl4WxX&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Gejj_pBsGH-bVxV9&amp;list=PLSMKKUFl3GMCNkTqZf9vLQbOUOLgX6EdY&rel=0'
        },
        "Database Management System": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ae5qyVnNNfj8xwK6jjtL36tIaOEY3Caj&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Probability Stats and linear programming": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XFmhHxsjmRHV0zzPepFE1DVE3rrogQ_g&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WbHibtxnoGs5BnV8&amp;list=PLxCzCOWd7aiFjZP4z1_3Kr3m3J5wu5Q8V&rel=0'
        },
        "Programming in Java": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1uiJXmyaEwyLrZJVqzEBBG2tXK7m5N3fQ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=cTOH8sIXsYIHyfDj&amp;list=PL5Rc9H5eTGY5MJYZix569VHzzV1raWWsd&rel=0'
        },
        "Technical Writing": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WV5KwoKHDqsZIhCJHZH7kH3etUWbwLvy&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=nj3BFjVRj4UWStsQ&amp;list=PLbCAq4ggAQuErAqle6UgpHnwvrJYcQ_Bc&rel=0'
        },
        "Theory of Computation": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1tsdWI3KNOrF71KNbtCWhOTGwXWneFczu&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=tI9zYQYjKx5NohHL&amp;list=PLxCzCOWd7aiFM9Lj5G9G_76adtyb4ef7i&rel=0'
        }
      },
      5: {
        "Compiler Design": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19QreW3bV3xNiPC14NVk4dJr5JpEPHH59&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=6Z1AelqpjSBI3iBE&amp;list=PLxCzCOWd7aiEKtKSIHYusizkESC42diyc&rel=0'
        },
        "Computer Networks": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1L8hCo9iZt2mBFV-XiHnDgFtW3ii0G4IB&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=EhNGoD-RyxT1cXcA&amp;list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&rel=0'
        },
        "Design and Analysis of Algorithm": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nrq4Y4xoBP1unBuZXBKoqVaigQVKFkgo&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=m2nb5DbJyN1ScNHb&amp;list=PLxCzCOWd7aiHcmS4i14bI0VrMbZTUvlTa&rel=0'
        },
        "Economics for Engineer": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1J9Yef3_LM7Uj5pap5fXpHdxAg0VbYhJz&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CJLF1OuTlBWgUVcn&amp;list=PLAggmvP4R7cZxqRyaxyQfjogPrvsbdfXY&rel=0'
        },
        "Operating System": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YEa7fbbX5jqmxZYnS3jlwB9CiaB6HSp-&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Vj-507j3UMnr4UOp&amp;list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&rel=0'
        },
        "Software Engineering": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1zVmbnt2NJiPITxAkI5b2dW89djpWccLt&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=5xK8UXjtys5XKe5-&amp;list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&rel=0'
        }
      },
      6: {
        "Advanced Computer Networks ": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nknCFJUGAZhLgskbgRLjJ92purekylYd&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=BWDIHj6Hzt5cJMDM&amp;list=PL_ACaauDUVgTUy8fbBt1MnXR-8Feglflz&rel=0'
        },
        "Advanced Java Programming": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1AbveJXH8tjr82WVjzLxegpUc7W73QzzI&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=mVYG8XUYgAstY9ox&amp;list=PLdBwVRHjcI__HBqxd51g3j3GJSRaocWZ7&rel=0'
        },
        "Artificial Intelligence": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1sMbS5z0yKTjbyIjyUqu4bM2hF19bNdn7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=zTklJPJX_5lXi7XX&amp;list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&rel=0'
        },
        "Software Project Management": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wMBT9QtsjRYsgGF2bc99icWxE-bHzV99&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=SOW3AamDox5NZqVT&amp;list=PLh11ucJN276KHr_DR1Ok-EWYfSwtaQXND&rel=0'
        },
        "Web Technologies": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1f9Jk36XIcFAhPii17QS2je7r3IXy8q9G&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=4shALtyBalUia6HT&amp;list=PLUwI7zx-CMG1_kNkWrryGnXRdw59_hgBO&rel=0'
        },
        "Wireless Communication and Networks": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qejHdencAoQmCKISAfTpVy4O-UQ-Yqf1&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=4QEEjBUecnJ8-ErU&amp;list=PLzUKfMcBC0HTp9qvTR_cEbYNhYzNes7BG&rel=0'
        }
      },
      7: {
        "Data Structures": {
          driveUrl: "https://drive.google.com/drive/folders/1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH?usp=drive_link",
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        DBMS: {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Discrete Mathematics": {
          driveUrl: "https://drive.google.com/file/d/your-cse-discrete-math-link/view",
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        }
      },
      8: {
        "Data Structures": {
          driveUrl: "https://drive.google.com/drive/folders/1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH?usp=drive_link",
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Rzdu1gcB_3YuKNcp&amp;list=PL-vEH_IPWrhBAJdQQ9zK4CJuvgg9aCviC&rel=0'
        },
        DBMS: {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Juwf7cOQkamKTbEYoiAV6HUUnVdTICWH&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=jRtBq6p-DwVJ12ap&amp;list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y&rel=0'
        },
        "Discrete Mathematics": {
          driveUrl: "https://drive.google.com/file/d/your-cse-discrete-math-link/view",
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=vAahSAHybpXv9TxF&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
        }
      }
    },
    AIDS: {
      1: {
        "Applied Chemistry": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      }
    },
    AIML: {
      1: {
        "Applied Chemistry": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      }
    },
    ME: {
      1: {
        "Applied Chemistry": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      }
    },
    EEE: {
      1: {
        "Applied Chemistry": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      }
    },
    CE: {
      1: {
        "Applied Chemistry": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      }
    },
    ECE: {
      1: {
        "Applied Chemistry": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=AIzaSyCtd6q7uxIcXM2L4Rw_7Dm2_S3RLM8zYV0&folderid=15Z0O7NVRWkMbpzfpdgitQ5J3RP2YFQG7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=9UHapScOvLt2EWCE&amp;list=PLZFw7Zsba5RO57AaytMePfnc3_bLk-8Y0&rel=0'
        },
        "Applied Mathematics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=19TU5LymbxBoiyXAfSvE4FWkeZJ9s8Ztc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=EwlDJBJNM3anCcCJ&amp;list=PL5fCG6TOVhr4jafvBSrmouZt0aqNjPlhd&rel=0'
        },
        "Applied Physics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=189JfRvhFDa_NQmANuu8gsQsUt0AWMdKr&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gGhw6gUp_eMSNESd&amp;list=PLg2LVpcRrOF5SHahQILs8jRZNOjqKBmbC&rel=0'
        },
        "Communication Skils": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wIL4fnuxfOjSn3b0p6qXa15jOraHCE-7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=WzRC7hnLjarp7_mh&amp;list=PL8nHpqzOrbFB6X0NuSUGX495zN4SzBcd6&rel=0'
        },
        "Electrical Science": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1OsPiTE13pAuJyksD4nSV9bh1gkqxSdTb&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=dyy9pR1kjCELYVYd&amp;list=PL3qvHcrYGy1v2kJX4SSsurE3_GdVe0ZD5&rel=0'
        },
        "Environmental Studies": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mxOAJQF2cGCS1mZ-Ja56Z4ky7z_bvUU2&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=qJ4NBLY6shLEQV-g&amp;list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&rel=0'
        },
        "Manufacturing Process": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iGUD-ZsKpDZWT5k2ae4CeaQI9R2iI968&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=ZLbFKzScRUlSsfb9&amp;list=PL-JvKqQx2Atd59aCxARxsGtx62TtTy3iN&rel=0'
        },
        "Programming in C": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wSTzBUFFojA1Wcauf_RCu3Ubd5EmrfjE&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0uI0FOJQZdxgPs2j&amp;list=PL9RcWoqXmzaIDg5vVOApcqWB3wLjRGKcJ&rel=0'
        }
      },
      2: {
        "Applied Mathematics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1W6tUADZZpsv5MswHlJ2vPow7sgtdmmq0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=7yRykfmGVDbtWsRi&amp;list=PLtuvUIYdZ92rrjPsqkX3BVHjHbtfnD3F5&rel=0'
        },
        "Applied Physics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1couZhMlcvw269vm4vV0OwZxj2vajEpOJ&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CFxVKOX5myPQm0LF&amp;list=PLGqQM-suejzCqWSZiwzAtP15W-ReGkk3Q&rel=0'
        },
        "Engeenering Mechanics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=14XnvHwlFYeUMch87T4tdVJbhLNu1J7rD&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=0zoO0plb_JnZQ_1w&amp;list=PL9RcWoqXmzaLsSWMumWO379AA2hPoMWy1&rel=0'
        },
        "Human values and Ethics": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=12ZysgKmC2uApL1aj8m6Q-gzmgs-Ii6Fc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=NndTj0KXjHsI4syU&amp;list=PLTUO2J9MZQt3HbVdCA1zCArSqPsg5P1nl&rel=0'
        },
        "Indian Consitution": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MrrzaekNY-yf5FbH9WlP2OqWB4DjupAn&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=hQHKsds9s21k5X-C&amp;list=PLDt-fuLi9lO8HdARsTkuyZdq9qKjV9rJg&rel=0'
        }
      },
      3: {
        "Computational Methods": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qrPKOzf49SgXjGwryc30-lKx9pryLAas&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=im2NGAf_mv8yd3cF&amp;list=PLEHGYFbPuuMGfyIXGx8V-Xhi0HRSjT8Ak&rel=0'
        },
        "Indian knowledge System": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1O4SFInrF2ulHi80xzRD4EhgvU9qkwGd0&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gNo4MMY0vWgwGKw9&amp;list=PL9MeEziOdUu7B41H23_Dl2tJjP25adLq1&rel=0'
        },
        "Signals and Systems": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1JzboJFiPmuQlp9MgFxzz1p59oUQghqAp&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=bpBWYmH_N611feLE&amp;list=PLBlnK6fEyqRhG6s3jYIU48CqsT5cyiDTO&rel=0'
        },
        "Digital Logics and Computer Design": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Vv3LH4Jj41UpR1DAwG5_90r-aEOWrF0S&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=wSfbx3YO3f_YiVeC&amp;list=PLmXKhU9FNesSfX1PVt4VGm-wbIKfemUWK&rel=0'
        },
        "Analog Communications": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MBsMPcX1YR-NEUfek0bYOtcpvSN5LCIs&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gGVC0v_9Pzq0Nbw3&amp;list=PLgwJf8NK-2e7uyUYrpgUUQowmRuKxRdwp&rel=0'
        },
        "Analog Electronics-1": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1FLOgftLfSVL8W69rO9m6oIyjH5_omV8U&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=LdN4H_T1E1Ja3nyN&amp;list=PLBlnK6fEyqRiw-GZRqfnlVIBz9dxrqHJS&rel=0'
        }
      },
      4: {
        "Probability Stats and linear programming": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XFmhHxsjmRHV0zzPepFE1DVE3rrogQ_g&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=ft70ZPSz5qZ9BhCB&amp;list=PLU6SqdYcYsfLRq3tu-g_hvkHDcorrthttps://www.youtube.com/embed/videoseries?si=nj3BFjVRj4UWStsQ&amp;list=PLbCAq4ggAQuErAqle6UgpHnwvrJYcQ_Bc&rel=0cBK&rel=0'
        },
        "Technical Writing": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WV5KwoKHDqsZIhCJHZH7kH3etUWbwLvy&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=nj3BFjVRj4UWStsQ&amp;list=PLbCAq4ggAQuErAqle6UgpHnwvrJYcQ_Bc&rel=0'
        },
        "Network Analysis and Synthesis": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1O_Zm1-wh-W8vOM8svUWv_gCzCSBtrt1V&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=3IIHpe4YQb9x_bYF&amp;list=PLXbLuD5WNA3KnewZl2kkleJVsfbiiGdTt&rel=0'
        },
        "Microprocessors and Microcontrollers": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1jMzzro0xiCfNmP7kP6vBqKSvaxRaEs9x&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=px2Jr44q5xNeQdvv&amp;list=PLBlnK6fEyqRgyFCCgqdcBowmSp_BTKs4F&rel=0'
        },
        "Digital Communications": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ntwNqEKu2IjQdtpaaU9j253ASd6ukcxl&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=iOcSwfA3n2jH-SdX&amp;list=PLgwJf8NK-2e5PngHbdEadEun5XPvnn00N&rel=0'
        },
        "Analog Electronics-2": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1dQ_9SibLLNNDM1jVfgkGKybpNiRrFcpa&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=jI1R6gqsQujvOzpC&amp;list=PLgwJf8NK-2e5u1DJ5jfTcj6m1GX-cEdm8&rel=0'
        },
        "Electromagnetic Field Theory": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1MSR2u7pDs9NGgtAQQ5Kc6u5eArkRT3S2&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=qy6Btu0_bDR5s5VC&amp;list=PLgwJf8NK-2e4I_YltJja47CwZJkzNWK89&rel=0'
        }
      },
      5: {
        "Economics for Engineer": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1J9Yef3_LM7Uj5pap5fXpHdxAg0VbYhJz&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=CJLF1OuTlBWgUVcn&amp;list=PLAggmvP4R7cZxqRyaxyQfjogPrvsbdfXY&rel=0'
        },
        "Digital Signal Processing": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1mkDftLKOqagh3bpgAtgb9zMdNc1xRfY7&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=OxUAfaQjLE6jz8EC&amp;list=PLXOYj6DUOGrpVb7_cCB1pZuGH4BFlp61B&rel=0'
        },
        " Microelectronics ": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1PriVAj27agLee1RuYfDAX2NVbvHh8a0K&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=O3KU7TkRB0AzofFB&amp;list=PLgwJf8NK-2e6au9bX9P_bA3ywxqigCsaC&rel=0'
        },
        "Introduction to Control Systems": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=18zAPgiwJYpHz5u3I8rcZSZgf_abfvSRc&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=vViUI_tOWvcy3Zja&amp;list=PLBlnK6fEyqRhqzJT87LsdQKYZBC93ezDo&rel=0'
        },
        "Transmission Lines, Waveguides and Antenna Design": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1fL6cIvuVCLEilujL0EbEnjVtQZDIp_U8&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=s7AzYR-nnOgqkuKi&amp;list=PLgwJf8NK-2e7tzLIDL4aXUbtRFY3ykmkT&rel=0'
        },
        "Data Communication and Networking": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qxWncxe7w26PgGZ_yS5I1zmh4mrq6fVU&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=foL7pROJbhLsfXFO&amp;list=PLV8vIYTIdSnYgxRYBC7blHaVUGFHUXLns&rel=0'
        }
      },
      6: {
        "Principles of Management for Engineers ": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1zCoa9gEirwTD68aASALjzyzm_qKsfi2b&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=_syJXI1D-qJLCPoP&amp;list=PLzs7q4LSx_lTd42jaMK45vE2fWwhxcJzp&rel=0'
        },
        "Universal Human Values": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1SsxwVhiBRUwGf02qj2OLaNsFuzQefL-b&allowdl=no`,
          youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=R2xM1VERNTAVziKw&amp;list=PLBvTTYUOHEmeYjzc3qrXrX5O6VQhgGEA-&rel=0'
        },
        "Programme Core Elective Paper (PCE -1)": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qaig0kegXt1MXYSOqOF1A79dP92g9D1H&allowdl=no`,
          youtubeUrl: ''
        },
        "Programme Core Elective Paper (PCE -2)": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=13FDCI5Y1vrSVEw1wJMMmty_RbWfYazPE&allowdl=no`,
          youtubeUrl: ''
        },
        "Programme Core Elective Paper (PCE -3)": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XAFqxwGA6ChB6HEL-Vt2iIQe6lY2V8Li&allowdl=no`,
          youtubeUrl: ''
        },
        "Emerging Area/Open Area Elective Paper (EAE – 1 /OAE – 1)": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Dlj9ZZHXMZhY0fS974Zp06Lgacb8BvxM&allowdl=no`,
          youtubeUrl: ''
        },
        "Emerging Area/Open Area Elective Paper (EAE – 2 /OAE – 2)": {
          driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Gtg92KEcLTMlIikumQ5l9AtCBtLRliG-&allowdl=no`,
          youtubeUrl: ''
        }
      }
    }
  };

  const handleBranchChange = (e) => {
    setBranch(e.target.value);
    setSemester("");
    setSubject("");
    setNotesLink("");
  };

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
    setSubject("");
    setNotesLink("");
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    setNotesLink(subjects[branch][semester][e.target.value].driveUrl);
    setYoutubeLink(subjects[branch][semester][e.target.value].youtubeUrl);
  };

  const handleYoutube = () => {
    setShowYoutubeIframe(true)
    setTitleName('Playlist')
  };

  const handleNotes = () => {
    setShowYoutubeIframe(false)
    setTitleName('Notes')
  };

  const handlePyq = () => {
    setShowYoutubeIframe(false)
    setTitleName('PYQ')
  }

  const handleRefresh = () => {
    setSemester('');
    setSubject('');
    setNotesLink('');
    setYoutubeLink('');
    setShowYoutubeIframe(false);
    setTitleName('Notes');
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden lg:flex lg:space-x-8">
        {(!notesLink) && (
          <div className="bg-[#a6c4f5] py-6 px-8 lg:w-1/3">
            <h1 className="text-3xl font-bold text-center">
              B.Tech Notes
            </h1>
            <div className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Select Branch
                  </label>
                  <select
                    value={branch}
                    onChange={handleBranchChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option value="">Select Branch</option>
                    {branches.map((branch) => (
                      <option key={branch} value={branch}>
                        {branch}
                      </option>
                    ))}
                  </select>
                </div>
                {branch && (
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Select Semester
                    </label>
                    <select
                      value={semester}
                      onChange={handleSemesterChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option value="">Select Semester</option>
                      {semesters.map((sem) => (
                        <option key={sem} value={sem}>
                          {sem}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {semester && subjects[branch] && subjects[branch][semester] && (
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Select Subject
                    </label>
                    <select
                      value={subject}
                      onChange={handleSubjectChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option value="">Select Subject</option>
                      {Object.keys(subjects[branch][semester]).map((subj) => (
                        <option key={subj} value={subj}>
                          {subj}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}

        {notesLink && (
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden w-full">
            <div className="bg-[#a6c4f5] py-4 px-4 sm:px-6 lg:mt-0 mt-5">
              <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
                <div className='text-2xl font-semibold mb-4 sm:mb-0'>
                  {titleName}
                </div>
                {subject && (
                  <div className='flex flex-wrap  sm:flex-nowrap sm:space-x-2'>
                    <button className='w-[100px] sm:w-auto text-white  border-1  mt-4 sm:mt-0 px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-800 text-sm' onClick={handleNotes}>Notes</button>
                    <button className='w-[100px]  sm:w-auto text-white mx-4 border-1  mt-4  sm:mt-0 px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-800 text-sm' onClick={handleYoutube}>Playlist</button>
                    <button className='w-[100px] mt-4 sm:w-auto text-white sm:mt-0 border-1 mx-4 px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-800 text-sm' onClick={handlePyq}>PYQ</button>
                    <button onClick={handleRefresh} className='w-[100px] mt-4 sm:mt-0 sm:w-auto text-white p-2 rounded-md bg-gray-700 hover:bg-gray-800 flex justify-center items-center'>
                      <RefreshCw size={20} />
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="p-4">
              {!showYoutubeIframe && <iframe
                src={notesLink.replace("/view", "/preview")}
                title="Notes"
                className="w-full h-[600px] border-0 rounded-lg shadow-inner bg-gray-700"
                allow="autoplay"
              />}
              {showYoutubeIframe && <iframe
                className="w-full h-[600px] border-0  shadow-inner bg-gray-700"
                src={youtubeLink}
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesFetcher;
