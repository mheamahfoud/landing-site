import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { styled } from "styled-components";
import ContactInfo from "./components/ContactInfo";
import Map from "./components/Map";

const Image = styled.img`
    width: 522px;
    height: 349px;
    background-image: url('https://www.nistudio.net/images/niseg_main-u137788-fr.png?crc=4214744809');
    background-repeat: no-repeat;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    position: relative;
    z-index: 39;
    filter: alpha(opacity=100);
    background-color: transparent;
    opacity: 1;
    background-position: center center;
    border-radius: 25px;
    background-size: cover;
`;
export const ContactInfoPage: FC = () => {
    const location = useLocation();
    const { url } = location.state;
    return (
        <div>
            {" "}
            <Header url={url} />
            <div
                className="d-flex justify-content-center flex-column"
                style={{
                    position: "relative",
                    background: "white",
                    zIndex: "2",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    margin: '30px 0'
                }}
            >

                <div className="d-flex flex-wrap justify-content-between align-items-center" style={{ width: '70%' }}>

                    <Image />

                    <div>
                        <ContactInfo />

                    </div>

                </div>

                <div style={{ height: '400px', width: '100%' }}
                >
                    <Map />
                </div>


            </div>
        </div>
    );
};
