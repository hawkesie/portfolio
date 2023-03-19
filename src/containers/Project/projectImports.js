import GeishasImg from '../../images/mysites/geisha-main.png'
import StaxyImg from '../../images/mysites/staxy-main.png'
import LSImg from '../../images/mysites/ls-main.png'
import GeishaMonitorImg from '../../images/mysites/monitor/geisha-monitor.png'
import StaxyMonitorImg from '../../images/mysites/monitor/staxy-monitor.png'
import LsMonitorImg from '../../images/mysites/monitor/ls-monitor.png'
import geishaSlide1 from '../../images/mysites/slides/geishas/slide1.png'
import geishaSlide2 from '../../images/mysites/slides/geishas/slide2.png'
import geishaSlide3 from '../../images/mysites/slides/geishas/slide3.png'
import geishaSlide4 from '../../images/mysites/slides/geishas/slide4.png'
import staxySlide1 from '../../images/mysites/slides/staxy/slide1.png'
import staxySlide2 from '../../images/mysites/slides/staxy/slide2.png'
import staxySlide3 from '../../images/mysites/slides/staxy/slide3.png'
import staxySlide4 from '../../images/mysites/slides/staxy/slide4.png'
import lsSlide1 from '../../images/mysites/slides/ls/slide1.png'
import lsSlide2 from '../../images/mysites/slides/ls/slide2.png'
import lsSlide3 from '../../images/mysites/slides/ls/slide3.png'
import lsSlide4 from '../../images/mysites/slides/ls/slide4.png'


export const projectImports = [
    {
        name:'Geishas',
        image: GeishasImg,
        monitorImage: GeishaMonitorImg,
        images: [GeishasImg,geishaSlide1,geishaSlide2,geishaSlide3,geishaSlide4],
        website: 'https://main.d332phldntddfe.amplifyapp.com/',
        description: 'I was hired to build this website as a landing page for a potential NFT project.',
        gitLink:'https://github.com/hawkesie/Geishas'
    },
    {
        name:'Staxy',
        image: StaxyImg,
        monitorImage: StaxyMonitorImg,
        images: [StaxyImg,staxySlide1, staxySlide2, staxySlide3, staxySlide4],
        website:'https://main.d1t87ixh50zlnh.amplifyapp.com/',
        description: 'I was asked to build this website as a prototype for a gaming website that aimed to be similar to hypedrop.com. This project never eventualized. ',
        gitLink: 'https://github.com/hawkesie/Staxy'
    },
    {
        name:'Lucky Shogun',
        image: LSImg,
        monitorImage: LsMonitorImg,
        images: [lsSlide2,lsSlide1, lsSlide3,lsSlide4],
        description: 'I started working for and eventually became the main frontend developer for this online crypto casino. I worked for this company for almost a year until it ceased operations in late 2022. '
    }
    

];