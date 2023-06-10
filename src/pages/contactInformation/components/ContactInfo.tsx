import { useIntl } from "react-intl";
import { styled } from "styled-components";
const Container = styled.div`
            display: flex;
            flex-direction: column;
            font-size: 20px;
            line-height: 24px;
      
           
`;

function ContactInfo() {
  const intl=useIntl();
  const styles = {
    address: {  width: '70px', display: 'inline-block' },
    email: { width: '70px', display: 'inline-block' },
    mobile: { width: '70px', display: 'inline-block' },
  };

  return (
    <Container  >
      <div className="mb-2"  style={{ textAlign: 'center' }}> <span>{intl.formatMessage({id:'egypt'})}</span></div>
      <div className="mb-5"> <span style={styles.address}>{intl.formatMessage({id:'address'})}:</span> <span style={{color: '#F15722'}}>Cairo - Mohandseen</span> </div>
      <div className="mb-5"> <span style={styles.email}>{intl.formatMessage({id:'email'})}:</span> <span style={{color: '#F15722'}}>info@nistudio.net</span> </div>
      <div className="mb-5"> <span style={styles.mobile}>{intl.formatMessage({id:'mobile'})}:</span> <span style={{color: '#F15722'}}>{'\u202D'+ '+20 10 94 33 00 66'}</span></div>
    </Container>
  );
}

export default ContactInfo;