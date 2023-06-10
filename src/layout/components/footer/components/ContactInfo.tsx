import { styled } from "styled-components";
import { smallMobile, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../../../responsive";
import { useIntl } from "react-intl";
const Container = styled.div`
            color: white;
            display: flex;
            flex-direction: column;
            gap: 15px;
            
        
            ${smallMobile({fontSize:'12px',lineHeight:'14px'})}
            ${xSmallMobile({fontSize:'12px',lineHeight:'14px'})}
            ${xXSmallMobile({fontSize:'10px',lineHeight:'12px'})}
            ${xxxSmallMobile({fontSize:'10px',lineHeight:'12px'})}
            ${xxxxSmallMobile({fontSize:'10px',lineHeight:'12px'})} 
           
`;

function ContactInfo() {
  const intl=useIntl();
  
  const styles = {
    address: { color: '#F15722', width: '60px', display: 'inline-block' },
    email: { color: '#F15722', width: '60px', display: 'inline-block' },
    mobile: { color: '#F15722', width: '60px', display: 'inline-block' },
  };

  return (
    <Container >
      <div style={{ textAlign: 'center' }}> <span>{intl.formatMessage({id:'egypt'})}</span></div>
      <div> <span style={styles.address}>{intl.formatMessage({id:'address'})}:</span>{intl.formatMessage({id:'cairo'})}  - {intl.formatMessage({id:'mohandseen'})} </div>
      <div> <span style={styles.email}>{intl.formatMessage({id:'email'})}:</span> info@nistudio.net </div>
      <div> <span style={styles.mobile}>{intl.formatMessage({id:'mobile'})}:</span> <span>{'\u202D'+ '+20 10 94 33 00 66'}</span></div>
    </Container>
  );
}

export default ContactInfo;