import React, { useState, useEffect } from 'react';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import { baseUrl, conferencesUrl, apiKey, confId } from '../../api';

function ContactPage() {
  return (
    <>
      <Contacts />
      <Footer />
    </>
  );
}

export default ContactPage;
