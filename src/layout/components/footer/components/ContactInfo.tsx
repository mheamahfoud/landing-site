function ContactInfo() {
  const styles = {
    address: { color: '#F15722',width:'60px' , display: 'inline-block' },
    email: { color: '#F15722',width:'60px',  display: 'inline-block' },
    mobile: { color: '#F15722',width:'60px', display: 'inline-block' },
  };

  return (
    <div style={{
        color:'white',
        display:'flex',
        flexDirection:'column',
        gap:'15px'

    }}>
      <div style={{textAlign:'center'}}> <span>Egypt</span></div>
     <div> <span style={styles.address}>Address:</span> Cairo - Mohandseen </div>
     <div> <span style={styles.email}>Email:</span> info@nistudio.net </div>
     <div> <span style={styles.mobile}>Mobile:</span> +20 10 94 33 00 66</div>
    </div>
  );
}

export default ContactInfo;