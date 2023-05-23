import { styled } from "styled-components";
import { smallMobile, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../../../responsive";
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
  const styles = {
    address: { color: '#F15722', width: '60px', display: 'inline-block' },
    email: { color: '#F15722', width: '60px', display: 'inline-block' },
    mobile: { color: '#F15722', width: '60px', display: 'inline-block' },
  };

  return (
    <Container >
      <div style={{ textAlign: 'center' }}> <span>Egypt</span></div>
      <div> <span style={styles.address}>Address:</span> Cairo - Mohandseen </div>
      <div> <span style={styles.email}>Email:</span> info@nistudio.net </div>
      <div> <span style={styles.mobile}>Mobile:</span> +20 10 94 33 00 66</div>
    </Container>
  );
}

export default ContactInfo;