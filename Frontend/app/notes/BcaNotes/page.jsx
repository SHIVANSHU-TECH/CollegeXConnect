"use client";

import { useState } from 'react';
import { RefreshCw } from 'lucide-react';

const NotesFetcher = () => {
  const [semester, setSemester] = useState('');
  const [subject, setSubject] = useState('');
  const [notesLink, setNotesLink] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [showYoutubeIframe, setShowYoutubeIframe] = useState(false)
  const [titleName, setTitleName] = useState('Notes')

  const semesters = ['1', '2', '3', '4', '5', '6'];
  const api_key = process.env.NEXT_PUBLIC_API_KEY;

  const subjects = {
    '1': {
      'Bridge Course in Maths': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1bUeIu11aKEo1Ah1IKYO_XFb1-QjS83xV&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1bUeIu11aKEo1Ah1IKYO_XFb1-QjS83xV&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=BcS8EoZQZvhRLAWu&amp;list=PLtsRJZ0uIZqSSc2Fy2VNJjjTQ6T5Dgs4g&rel=0'
      },
      'Fundamentals of Computer and IT': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1pm9VC5ULfc18HqHpOf0r-E5GmPGGiTsK&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1pm9VC5ULfc18HqHpOf0r-E5GmPGGiTsK&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=JczhYWDZORR5SuFG&amp;list=PLXIPR4CD0noqhrSuOz7rpIH1y2TGLcmDL&rel=0'
      },
      'Programming using C Language': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1QV3i29dw3_8-Csk3zI8xPXftbIAzssd9&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1QV3i29dw3_8-Csk3zI8xPXftbIAzssd9&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Z4fr9vAToA8SZHd1&amp;list=PLqleLpAMfxGBn9v-K17ztBfNXHzPnX5sN&rel=0'
      },
      'Web Technologies': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=15wrgUz80npj5vDkA1YSgL8fTcn52ZNM5&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=15wrgUz80npj5vDkA1YSgL8fTcn52ZNM5&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=J0UplIGbi_cqT0GY&amp;list=PLDDXuRcB-QG4lUIVF5iukQ7CFCQx8D8DJ&rel=0'
      },
      'Technical Communication': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Plaqn9WfrMtXxAsGxF8gZXAgIijVtyXy&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Plaqn9WfrMtXxAsGxF8gZXAgIijVtyXy&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=qZNKFnNyDCUoKvo2&amp;list=PL-vEH_IPWrhC4xKArflGTswM7GcYPrTAX&rel=0'
      },
      'Discrete Mathematics': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1lhDQXpu3FpzV92V_lkR80EC4crIJj7q5&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1lhDQXpu3FpzV92V_lkR80EC4crIJj7q5&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=pDx90gucz5Qn-_v2&amp;list=PLU6SqdYcYsfJ27O0dvuMwafS3X8CecqUg&rel=0'
      }
    },
    '2': {
      'Data Structure Using C': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1U2H6os2300h5uifL_LbtnemUdeAoThhZ&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1U2H6os2300h5uifL_LbtnemUdeAoThhZ&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=uIyBPxDsBajOTjJb&amp;list=PL8hkiIbjm97Ru8wP_3SUVK7autD-jbXuG&rel=0'
      },
      'Designing Lab Photoshop': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=126fXAm02pBVopvrwNGo53LkK3YMwQggo&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=126fXAm02pBVopvrwNGo53LkK3YMwQggo&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=kT1hTuSJPGckqeNW&amp;list=PLRQGNW3q__Wk8ztMHh4MrLe-RgnlBtE9T&rel=0'
      },
      'Database Managment System': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=15rEplfBOrMkl5abcKQHqEzxVV7qGUfmM&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=15rEplfBOrMkl5abcKQHqEzxVV7qGUfmM&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=7xx5NQZEJr_6WN1H&amp;list=PLDDXuRcB-QG4e2OWJnvCz5C5lrTYFdrQP&rel=0'
      },
      'Web Based Programming': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1cUsAT7dXZbbT5EEutv9ha9EAEy_SEMUW&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1cUsAT7dXZbbT5EEutv9ha9EAEy_SEMUW&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=2c1huvWZx9aYKhOh&amp;list=PLDDXuRcB-QG6tZfS7QgQjxV468IxvvNfm&rel=0'
      },
      'Environmental Studies': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1KeZTmdjZ-4TV80NYn9XIVqlz08-hy-J9&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1KeZTmdjZ-4TV80NYn9XIVqlz08-hy-J9&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=UeY9W0bBuME-WJHY&amp;list=PLET_hfdl6jAIeXz_N1VBIjIvku8qDy_Py&rel=0'
      },
      'Applied Mathematics': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=16biXHljMMLgJVx4K2v59CwVn-MH1RIsb&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=16biXHljMMLgJVx4K2v59CwVn-MH1RIsb&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=x7bsqKorLDiQZxTx&amp;list=PLDDXuRcB-QG6JrHAKvwYMXFaz0VcvlDUT&rel=0'
      }
    },
    '3': {
      'MPOB': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1vvSuq4QcKShCwtPqPt3bvs3lo8C17CHc&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1vvSuq4QcKShCwtPqPt3bvs3lo8C17CHc&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=aCHNmmI5ubbSaZPZ&amp;list=PLzs7q4LSx_lQ4mG2fbIzYhNZIO33A6uMD&rel=0'
      },
      'HVPE': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nmNp8G_Z5WwDJiIpgpZBRHO8jSDRlRsK&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1nmNp8G_Z5WwDJiIpgpZBRHO8jSDRlRsK&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=ZxI3B6CbpqYFOvt9&amp;list=PLim9gWjsjN-M7jKqp65fE0WnvoqCfGxgF&rel=0'
      },
      'Python': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ABtBq-UAzvpeDNyfFtR3rbWkSEYpWW76&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ABtBq-UAzvpeDNyfFtR3rbWkSEYpWW76&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=TkUmi-7a_OBF5Xei&amp;list=PLpApktzwiFX9V4XyOjDS-1E397E-fK_6V&rel=0'
      },
      'OOPs using C++': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YoUzGFRvOA3bBKEjKb8rG84hUOqy566y&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YoUzGFRvOA3bBKEjKb8rG84hUOqy566y&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=11h2LFJVEqD_kMcJ&amp;list=PLduM7bkxBdOekXfkEqIBAivzG99V2LrAS&rel=0'
      },
      'CN': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WxI7owMTUrEgib0gpR3jyE1KoWsalWiB&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1WxI7owMTUrEgib0gpR3jyE1KoWsalWiB&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=3_iDTVYZ-21GNCLR&amp;list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_&rel=0'
      },
      'CAO': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1s26Sv9A-kDvihboN7u1swPkfuEqexn0_&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1s26Sv9A-kDvihboN7u1swPkfuEqexn0_&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=gAEwtqz2_vgXAQSm&amp;list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX&rel=0'
      },
    },
    '4': {
      'Artificial Intelligence': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iOhOEKI6tX0MRy5SW9J8cZTEvhZYEdUC&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1iOhOEKI6tX0MRy5SW9J8cZTEvhZYEdUC&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=rKX1mlvbl89HQl9f&amp;list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&rel=0'
      },
      'DM': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1yohJJQsCIvTPJbVRldlCmDXqB8cC7ix1&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1yohJJQsCIvTPJbVRldlCmDXqB8cC7ix1&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=nn1dcevDf70drHzw&amp;list=PLsh2FvSr3n7dFoSwSKX8hwgmoJJ8guJbj&rel=0'
      },
      'JAVA': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wDbOIn4y0lkSexf1_JsrdH5mW6sRGGuV&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1wDbOIn4y0lkSexf1_JsrdH5mW6sRGGuV&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=Hn3c8puOcZpTQtfy&amp;list=PLqleLpAMfxGAdqZeY_4uVQOPCnAjhH-eT&rel=0'
      },
      'ED': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qpcRdZ__L0WPMxBzfvtUoWnIhuCaGd4e&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1qpcRdZ__L0WPMxBzfvtUoWnIhuCaGd4e&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=VxuGfR2vj0mCxS6y&amp;list=PLsh2FvSr3n7fQlIDbfKutmSL26TsWitGQ&rel=0'
      },
      'SE': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1TJ8SZTO4D8EaC9w4Bwmm2WbEe-Swclwv&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1TJ8SZTO4D8EaC9w4Bwmm2WbEe-Swclwv&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=tqRHGqyMgPnAJXd-&amp;list=PLxCzCOWd7aiEed7SKZBnC6ypFDWYLRvB2&rel=0'
      },
      'PDS': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Qg1U6EVDbNX4qfscqvAD72FYd-jTmoD4&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Qg1U6EVDbNX4qfscqvAD72FYd-jTmoD4&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=5oe2JYURjuWSswv-&amp;list=PLkaFsSywHpwf-Qxkfm3Jb79c_B2-ueWM_&rel=0'
      },
      'DS': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ClWeHR_ITEcDyE_C0pjp3-YGGJgbunMI&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1ClWeHR_ITEcDyE_C0pjp3-YGGJgbunMI&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=rtg0Ic1hZ8RlDZJh&amp;list=PLG9aCp4uE-s2HRvW-fSs2E4hk07xWTGYB&rel=0'
      },
    },
    '5': {
      'OS': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1_pGZmPKujzk0vcTb5AM51dgVETKLZ5Hi&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1_pGZmPKujzk0vcTb5AM51dgVETKLZ5Hi&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=oSui_1I5UtJ8xiWC&amp;list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p&rel=0'
      },
      'ML': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1CNC33edsNyQk3AMReT_11T9RWFXqbx78&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1CNC33edsNyQk3AMReT_11T9RWFXqbx78&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=c1vCzgAcrFlUx6iJ&amp;list=PLYwpaL_SFmcBhOEPwf5cFwqo5B-cP9G4P&rel=0'
      },
      'CC': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XXYuPHIhsr2-0QMMfv_Xz1K_j2Gxi_de&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1XXYuPHIhsr2-0QMMfv_Xz1K_j2Gxi_de&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=7UG51Lbq0Do3Digm&amp;list=PLYwpaL_SFmcCyQH0n9GHfwviu6KeJ46BV&rel=0'
      },
      'CG': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Tqcm19SLTl8D0DNftUqltAYW5le8q3sB&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1Tqcm19SLTl8D0DNftUqltAYW5le8q3sB&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=u0EXq4U7mVbRdW2w&amp;list=PLYwpaL_SFmcAtxMe7ahYC4ZYjQHun_b-T&rel=0'
      }
    },
    '6': {
      'DVA': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YPURKjZo0qn8qDbRakpltjEDACFXDMHy&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1YPURKjZo0qn8qDbRakpltjEDACFXDMHy&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=PrwfmCDsXoG3KeLA&amp;list=PLwgFb6VsUj_nFnLLn3M8iacrhDyXqE4N9&rel=0'
      },
      'IOT': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=17JSUKVHWisAjAe6_32IOZIqm03xbwCJd&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=17JSUKVHWisAjAe6_32IOZIqm03xbwCJd&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=OBOerbI-4qh4O3Dc&amp;list=PLuAADu3OvBt4SUxlYPu_xJogSmVfSLZF0&rel=0'
      },
      'E-commerce': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1TcKymi3Htkzf_CcH6rH7WCrs4Faobkka&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1TcKymi3Htkzf_CcH6rH7WCrs4Faobkka&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=fE7-UFB1pF8Zc1bE&amp;list=PLeUy5pFI21O94CN882iIaE9UoH8dpwObi&rel=0'
      },
      'Computer Network and Information Security': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1cdvNuvh-jmj_lbmrGIfeuokMIbgncdFm&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1cdvNuvh-jmj_lbmrGIfeuokMIbgncdFm&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=GZIS8VchrbUtFOv4&amp;list=PLzs7q4LSx_lQ4qp1G00QZUjEcVopQ62JD&rel=0'
      },
      'Linux Environment': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1U0kEfeS1wtH5OSR5fHCVRM6oc8rUDojF&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1U0kEfeS1wtH5OSR5fHCVRM6oc8rUDojF&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=OQSAiDPlrAY3sBGw&amp;list=PL6UwySlcwEYIZGsbXnUxsojD0yeUA67lb&rel=0'
      },
      'Data Warehousing and Mining': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1LUDZQ1C7NkKisJpw-A7rxAZyv2QZElky&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1LUDZQ1C7NkKisJpw-A7rxAZyv2QZElky&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=apSvd8tzz_IYkPv-&amp;list=PLV8vIYTIdSnb4H0JvSTt3PyCNFGGlO78u&rel=0'
      },
      'Mobile Computing': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1HhFx4pFaAloWpztn0druYI9K3qRfHBNp&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=1HhFx4pFaAloWpztn0druYI9K3qRfHBNp&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=5SXwabY3mMVZaFgN&amp;list=PLV8vIYTIdSnZMKTQSTxWbx4NGNfxyZq_N&rel=0'
      },
      'Artificial Intelligence': {
        driveUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=15ZivYpB3hhYmGlSl87xelgFBgqWRMWrt&allowdl=no`,
        pyqUrl: `https://googledriveembedder.collegefam.com/?key=${api_key}&folderid=15ZivYpB3hhYmGlSl87xelgFBgqWRMWrt&allowdl=no`,
        youtubeUrl: 'https://www.youtube.com/embed/videoseries?si=rKX1mlvbl89HQl9f&amp;list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI&rel=0'
      }
    }
  };

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
    setSubject('');
    setNotesLink('');
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    setNotesLink(subjects[semester][e.target.value].driveUrl);
    setYoutubeLink(subjects[semester][e.target.value].youtubeUrl);
  };

  const handleYoutube = () => {
    setShowYoutubeIframe(true)
    setTitleName('Playlist')
  }

  const handleNotes = () => {
    setShowYoutubeIframe(false)
    setTitleName('Notes')
  }

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
            <h1 className="text-3xl font-bold text-center">BCA Notes</h1>
            <div className="p-8">
              <div className="space-y-6">
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
                {semester && subjects[semester] && (
                  <div>
                    <label className="block text-sm font-medium  mb-2">
                      Select Subject
                    </label>
                    <select
                      value={subject}
                      onChange={handleSubjectChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                      <option value="">Select Subject</option>
                      {Object.keys(subjects[semester]).map((subj) => (
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
                src={notesLink.replace('/view', '/preview')}
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