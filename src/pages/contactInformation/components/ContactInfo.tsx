import { styled } from "styled-components";
import { mobile, mobileFontSize, smallMobile, xSmallMobile, xXSmallMobile, xxxSmallMobile, xxxxSmallMobile } from "../../../responsive";
const Container = styled.div`
            display: flex;
            flex-direction: column;
            font-size: 20px;
            line-height: 36px;
            
        
            ${smallMobile({fontSize:'12px',lineHeight:'14px'})}
            ${xSmallMobile({fontSize:'12px',lineHeight:'14px'})}
            ${xXSmallMobile({fontSize:'10px',lineHeight:'12px'})}
            ${xxxSmallMobile({fontSize:'10px',lineHeight:'12px'})}
            ${xxxxSmallMobile({fontSize:'10px',lineHeight:'12px'})} 
           
`;

function ContactInfo() {
  const styles = {
    address: {  width: '70px', display: 'inline-block' },
    email: { width: '70px', display: 'inline-block' },
    mobile: { width: '70px', display: 'inline-block' },
  };

  return (
    <Container >
      <div className="mb-2"  style={{ textAlign: 'center' }}> <span>Egypt</span></div>
      <div className="mb-5"> <span style={styles.address}>Address:</span> <span style={{color: '#F15722'}}>Cairo - Mohandseen</span> </div>
      <div className="mb-5"> <span style={styles.email}>Email:</span> <span style={{color: '#F15722'}}>info@nistudio.net</span> </div>
      <div className="mb-5"> <span style={styles.mobile}>Mobile:</span> <span style={{color: '#F15722'}}>+20 10 94 33 00 66</span></div>
    </Container>
  );
}

export default ContactInfo;