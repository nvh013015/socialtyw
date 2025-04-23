import Searchbar from "../components/Searchbar"
import Messinput from "../components/messinput";
import styles from "../styles/Homepage.module.css"
import { PiStickerLight } from "react-icons/pi";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
export default function HomePage () {
    return(
        <div className={styles.HomePage}>
            <div className={styles.CaibidinhchungvoiSearchbar}>
                <Searchbar />
            </div>
            <div className={styles.HomePage_container}>
                <div className={styles.sidebar}>
                    <SettingsOutlinedIcon style={{fontSize: "32px",
                        marginTop: "10px",
                    }}></SettingsOutlinedIcon>
                </div>
                <div className={styles.mainmess}>
                    <div className={styles.messbox}>
                        <PiStickerLight className={styles.messticker}></PiStickerLight>
                        <Messinput></Messinput>
                        <SendOutlinedIcon className={styles.messsend}></SendOutlinedIcon>
                    </div>
                </div>
                <div style={{backgroundColor: 'blue'}}>
                        haha
                </div>
            </div>
        </div>
    )
}