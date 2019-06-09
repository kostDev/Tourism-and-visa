import React from 'react';

function TourismServicePage() {
    return (
        <div className="container flex flex-col items-center mt-5 mb-5">
            <div className="flex flex-row">

                <h1 className="text-uppercase text-center font-semibold headline headline--inverse pb-4 mb-5 lg:ml-8 md:ml-8">Check
                    Visa Requirements</h1>
                <div className="guarantee tip-anchor px-3 hidden sm:block">
                    <div className="hidden sm:block" style={{width: "108px"}}>
                        <div className="intro-img-guarantee"></div>
                    </div>
                    <span className="tip z-10" style={{width: "354px"}}><h6 className="font-bold text-black">How can we offer money back guarantee?</h6> <p
                        className="font-light text-grey-dark">
                                99.7% of our visa applications are approved. In the rare chance your visa is not approved, we like to keep all customers happy so we offer a 100% money back guarantee </p></span>
                </div>
            </div>
            <form action="" method="post" className="flex flex-col lg:flex-row -mt-5 -ml-12">
                <div className="intro-item intro-item--arrow pt-5 pl-5">
                    <div className="intro-img-where-from"></div>
                    <h3>Where am I From?</h3> <label htmlFor="travellingFrom"
                                                     className="form-label text-white uppercase">Nationality as in
                    Passport</label> <select id="travellingFrom" name="travellingFrom" className="form-control">
                    <option value="" selected="selected" disabled="disabled">Choose Country</option>
                    <option value="AU" data-url="">Australia (AU)
                    </option>
                    <option value="CA" data-url="">Canada (CA)
                    </option>
                    <option value="IN" data-url="">India (IN)
                    </option>
                    <option value="ES" data-url="">Spain (ES)
                    </option>
                    <option value="GB" data-url="">United Kingdom (GB)
                    </option>
                    <option value="US" data-url="">United States (US)
                    </option>
                    <option value="AF" data-url="">Afghanistan (AF)
                    </option>
                    <option value="AX" data-url="">Aland Islands (AX)
                    </option>
                    <option value="AL" data-url="">Albania (AL)
                    </option>
                    <option value="DZ" data-url="">Algeria (DZ)
                    </option>
                    <option value="AS" data-url="">American Samoa (AS)
                    </option>
                    <option value="AD" data-url="">Andorra (AD)
                    </option>
                    <option value="AO" data-url="">Angola (AO)
                    </option>
                    <option value="AI" data-url="">Anguilla (AI)
                    </option>
                    <option value="AQ" data-url="">Antarctica (AQ)
                    </option>
                    <option value="AG" data-url="">Antigua &amp; Barbuda (AG)
                    </option>
                    <option value="AR" data-url="">Argentina (AR)
                    </option>
                    <option value="AM" data-url="">Armenia (AM)
                    </option>
                    <option value="AW" data-url="">Aruba (AW)
                    </option>
                    <option value="AU" data-url="">Australia (AU)
                    </option>
                    <option value="AT" data-url="">Austria (AT)
                    </option>
                    <option value="AZ" data-url="">Azerbaijan (AZ)
                    </option>
                    <option value="BS" data-url="">Bahamas (BS)
                    </option>
                    <option value="BH" data-url="">Bahrain (BH)
                    </option>
                    <option value="BD" data-url="">Bangladesh (BD)
                    </option>
                    <option value="BB" data-url="">Barbados (BB)
                    </option>
                    <option value="BY" data-url="">Belarus (BY)
                    </option>
                    <option value="BE" data-url="">Belgium (BE)
                    </option>
                    <option value="BZ" data-url="">Belize (BZ)
                    </option>
                    <option value="BJ" data-url="">Benin (BJ)
                    </option>
                    <option value="BM" data-url="">Bermuda (BM)
                    </option>
                    <option value="BT" data-url="">Bhutan (BT)
                    </option>
                    <option value="BO" data-url="">Bolivia (BO)
                    </option>
                    <option value="BQ" data-url="">Bonaire, St Eustatius and Saba (BQ)
                    </option>
                    <option value="BA" data-url="">Bosnia and Herzegovina (BA)
                    </option>
                    <option value="BW" data-url="">Botswana (BW)
                    </option>
                    <option value="BV" data-url="">Bouvet Island (BV)
                    </option>
                    <option value="BR" data-url="">Brazil (BR)
                    </option>
                    <option value="IO" data-url="">British Indian Ocean Territory (IO)
                    </option>
                    <option value="BN" data-url="">Brunei Darussalam (BN)
                    </option>
                    <option value="BG" data-url="">Bulgaria (BG)
                    </option>
                    <option value="BF" data-url="">Burkina Faso (BF)
                    </option>
                    <option value="BI" data-url="">Burundi (BI)
                    </option>
                    <option value="KH" data-url="">Cambodia (KH)
                    </option>
                    <option value="CM" data-url="">Cameroon (CM)
                    </option>
                    <option value="CA" data-url="">Canada (CA)
                    </option>
                    <option value="CV" data-url="">Cape Verde (CV)
                    </option>
                    <option value="KY" data-url="">Cayman Islands (KY)
                    </option>
                    <option value="CF" data-url="">Central African Republic (CF)
                    </option>
                    <option value="TD" data-url="">Chad (TD)
                    </option>
                    <option value="CL" data-url="">Chile (CL)
                    </option>
                    <option value="CN" data-url="">China (CN)
                    </option>
                    <option value="CX" data-url="">Christmas Island (CX)
                    </option>
                    <option value="CC" data-url="">Cocos (K) Island (CC)
                    </option>
                    <option value="CO" data-url="">Colombia (CO)
                    </option>
                    <option value="KM" data-url="">Comoros (KM)
                    </option>
                    <option value="CG" data-url="">Congo (CG)
                    </option>
                    <option value="CK" data-url="">Cook Islands (CK)
                    </option>
                    <option value="CR" data-url="">Costa Rica (CR)
                    </option>
                    <option value="CI" data-url="">Ivory Coast (CI)
                    </option>
                    <option value="HR" data-url="">Croatia (HR)
                    </option>
                    <option value="CU" data-url="">Cuba (CU)
                    </option>
                    <option value="CW" data-url="">Curacao (CW)
                    </option>
                    <option value="CY" data-url="">Cyprus (CY)
                    </option>
                    <option value="CZ" data-url="">Czech Republic (CZ)
                    </option>
                    <option value="CD" data-url="">Democratic Republic of Congo (CD)
                    </option>
                    <option value="DK" data-url="">Denmark (DK)
                    </option>
                    <option value="DJ" data-url="">Djibouti (DJ)
                    </option>
                    <option value="DM" data-url="">Dominica (DM)
                    </option>
                    <option value="DO" data-url="">Dominican Republic (DO)
                    </option>
                    <option value="TL" data-url="">East Timor (TL)
                    </option>
                    <option value="EC" data-url="">Ecuador (EC)
                    </option>
                    <option value="EG" data-url="">Egypt (EG)
                    </option>
                    <option value="SV" data-url="">El Salvador (SV)
                    </option>
                    <option value="GQ" data-url="">Equatorial Guinea (GQ)
                    </option>
                    <option value="ER" data-url="">Eritrea (ER)
                    </option>
                    <option value="EE" data-url="">Estonia (EE)
                    </option>
                    <option value="ET" data-url="">Ethiopia (ET)
                    </option>
                    <option value="FK" data-url="">Falkland Islands (Malvinas) (FK)
                    </option>
                    <option value="FO" data-url="">Faroe Islands (FO)
                    </option>
                    <option value="FJ" data-url="">Fiji (FJ)
                    </option>
                    <option value="FI" data-url="">Finland (FI)
                    </option>
                    <option value="FR" data-url="">France (FR)
                    </option>
                    <option value="GF" data-url="">French Guiana (GF)
                    </option>
                    <option value="PF" data-url="">French Polynesia (PF)
                    </option>
                    <option value="TF" data-url="">French West Indies (TF)
                    </option>
                    <option value="GA" data-url="">Gabon (GA)
                    </option>
                    <option value="GM" data-url="">Gambia (GM)
                    </option>
                    <option value="GE" data-url="">Georgia (GE)
                    </option>
                    <option value="DE" data-url="">Germany (DE)
                    </option>
                    <option value="GH" data-url="">Ghana (GH)
                    </option>
                    <option value="GI" data-url="">Gibraltar (GI)
                    </option>
                    <option value="GR" data-url="">Greece (GR)
                    </option>
                    <option value="GL" data-url="">Greenland (GL)
                    </option>
                    <option value="GD" data-url="">Grenada (GD)
                    </option>
                    <option value="GP" data-url="">Guadeloupe (GP)
                    </option>
                    <option value="GU" data-url="">Guam (GU)
                    </option>
                    <option value="GT" data-url="">Guatemala (GT)
                    </option>
                    <option value="GG" data-url="">Guernsey (GG)
                    </option>
                    <option value="GN" data-url="">Guinea (GN)
                    </option>
                    <option value="GW" data-url="">Guinea-Bissau (GW)
                    </option>
                    <option value="GY" data-url="">Guyana (GY)
                    </option>
                    <option value="HT" data-url="">Haiti (HT)
                    </option>
                    <option value="HM" data-url="">Heard Island and McDonald Islands (HM)
                    </option>
                    <option value="HN" data-url="">Honduras (HN)
                    </option>
                    <option value="HK" data-url="">Hong Kong (HK)
                    </option>
                    <option value="HU" data-url="">Hungary (HU)
                    </option>
                    <option value="IS" data-url="">Iceland (IS)
                    </option>
                    <option value="IN" data-url="">India (IN)
                    </option>
                    <option value="ID" data-url="">Indonesia (ID)
                    </option>
                    <option value="IR" data-url="">Iran (IR)
                    </option>
                    <option value="IQ" data-url="">Iraq (IQ)
                    </option>
                    <option value="IE" data-url="">Ireland (IE)
                    </option>
                    <option value="IM" data-url="">Isle of Man (IM)
                    </option>
                    <option value="IL" data-url="">Israel (IL)
                    </option>
                    <option value="IT" data-url="">Italy (IT)
                    </option>
                    <option value="JM" data-url="">Jamaica (JM)
                    </option>
                    <option value="JP" data-url="">Japan (JP)
                    </option>
                    <option value="JE" data-url="">Jersey (JE)
                    </option>
                    <option value="JO" data-url="">Jordan (JO)
                    </option>
                    <option value="KZ" data-url="">Kazakhstan (KZ)
                    </option>
                    <option value="KE" data-url="">Kenya (KE)
                    </option>
                    <option value="KI" data-url="">Kiribati (KI)
                    </option>
                    <option value="XK" data-url="">Kosovo (XK)
                    </option>
                    <option value="KW" data-url="">Kuwait (KW)
                    </option>
                    <option value="KG" data-url="">Kyrgyzstan (KG)
                    </option>
                    <option value="LA" data-url="">Laos (LA)
                    </option>
                    <option value="LV" data-url="">Latvia (LV)
                    </option>
                    <option value="LB" data-url="">Lebanon (LB)
                    </option>
                    <option value="LS" data-url="">Lesotho (LS)
                    </option>
                    <option value="LR" data-url="">Liberia (LR)
                    </option>
                    <option value="LY" data-url="">Libya (LY)
                    </option>
                    <option value="LI" data-url="">Liechtenstein (LI)
                    </option>
                    <option value="LT" data-url="">Lithuania (LT)
                    </option>
                    <option value="LU" data-url="">Luxembourg (LU)
                    </option>
                    <option value="MO" data-url="">Macao (MO)
                    </option>
                    <option value="MK" data-url="">Macedonia (MK)
                    </option>
                    <option value="MG" data-url="">Madagascar (MG)
                    </option>
                    <option value="MW" data-url="">Malawi (MW)
                    </option>
                    <option value="MY" data-url="">Malaysia (MY)
                    </option>
                    <option value="MV" data-url="">Maldives (MV)
                    </option>
                    <option value="ML" data-url="">Mali (ML)
                    </option>
                    <option value="MT" data-url="">Malta (MT)
                    </option>
                    <option value="MH" data-url="">Marshall Islands (MH)
                    </option>
                    <option value="MQ" data-url="">Martinique (MQ)
                    </option>
                    <option value="MR" data-url="">Mauritania (MR)
                    </option>
                    <option value="MU" data-url="">Mauritius (MU)
                    </option>
                    <option value="YT" data-url="">Mayotte (YT)
                    </option>
                    <option value="MX" data-url="">Mexico (MX)
                    </option>
                    <option value="FM" data-url="">Micronesia (FM)
                    </option>
                    <option value="MD" data-url="">Moldova (MD)
                    </option>
                    <option value="MC" data-url="">Monaco (MC)
                    </option>
                    <option value="MN" data-url="">Mongolia (MN)
                    </option>
                    <option value="ME" data-url="">Montenegro (ME)
                    </option>
                    <option value="MS" data-url="">Montserrat (MS)
                    </option>
                    <option value="MA" data-url="">Morocco (MA)
                    </option>
                    <option value="MZ" data-url="">Mozambique (MZ)
                    </option>
                    <option value="MM" data-url="">Myanmar (MM)
                    </option>
                    <option value="NA" data-url="">Namibia (NA)
                    </option>
                    <option value="NR" data-url="">Nauru (NR)
                    </option>
                    <option value="NP" data-url="">Nepal (NP)
                    </option>
                    <option value="NL" data-url="">Netherlands (NL)
                    </option>
                    <option value="NC" data-url="">New Caledonia (NC)
                    </option>
                    <option value="NZ" data-url="">New Zealand (NZ)
                    </option>
                    <option value="NI" data-url="">Nicaragua (NI)
                    </option>
                    <option value="NE" data-url="">Niger (NE)
                    </option>
                    <option value="NG" data-url="">Nigeria (NG)
                    </option>
                    <option value="NU" data-url="">Niue (NU)
                    </option>
                    <option value="NF" data-url="">Norfolk Island (NF)
                    </option>
                    <option value="KP" data-url="">North Korea (KP)
                    </option>
                    <option value="MP" data-url="">Northern Mariana Islands (MP)
                    </option>
                    <option value="NO" data-url="">Norway (NO)
                    </option>
                    <option value="OM" data-url="">Oman (OM)
                    </option>
                    <option value="PK" data-url="">Pakistan (PK)
                    </option>
                    <option value="PW" data-url="">Palau (PW)
                    </option>
                    <option value="PS" data-url="">Palestine (PS)
                    </option>
                    <option value="PA" data-url="">Panama (PA)
                    </option>
                    <option value="PG" data-url="">Papua New Guinea (PG)
                    </option>
                    <option value="PY" data-url="">Paraguay (PY)
                    </option>
                    <option value="PE" data-url="">Peru (PE)
                    </option>
                    <option value="PH" data-url="">Philippines (PH)
                    </option>
                    <option value="PN" data-url="">Pitcairn (PN)
                    </option>
                    <option value="PL" data-url="">Poland (PL)
                    </option>
                    <option value="PT" data-url="">Portugal (PT)
                    </option>
                    <option value="PR" data-url="">Puerto Rico (PR)
                    </option>
                    <option value="QA" data-url="">Qatar (QA)
                    </option>
                    <option value="RE" data-url="">Reunion (RE)
                    </option>
                    <option value="RO" data-url="">Romania (RO)
                    </option>
                    <option value="RU" data-url="">Russia (RU)
                    </option>
                    <option value="RW" data-url="">Rwanda (RW)
                    </option>
                    <option value="BL" data-url="">Saint Barthelemy (BL)
                    </option>
                    <option value="LC" data-url="">Saint Lucia (LC)
                    </option>
                    <option value="MF" data-url="">Saint Martin (MF)
                    </option>
                    <option value="WS" data-url="">Samoa (WS)
                    </option>
                    <option value="SM" data-url="">San Marino (SM)
                    </option>
                    <option value="ST" data-url="">Sao Tome &amp; Principe (ST)
                    </option>
                    <option value="SA" data-url="">Saudi Arabia (SA)
                    </option>
                    <option value="SN" data-url="">Senegal (SN)
                    </option>
                    <option value="RS" data-url="">Serbia (RS)
                    </option>
                    <option value="SC" data-url="">Seychelles (SC)
                    </option>
                    <option value="SL" data-url="">Sierra Leone (SL)
                    </option>
                    <option value="SG" data-url="">Singapore (SG)
                    </option>
                    <option value="SX" data-url="">Sint Maarten (SX)
                    </option>
                    <option value="SK" data-url="">Slovakia (SK)
                    </option>
                    <option value="SI" data-url="">Slovenia (SI)
                    </option>
                    <option value="SB" data-url="">Solomon Islands (SB)
                    </option>
                    <option value="SO" data-url="">Somalia (SO)
                    </option>
                    <option value="ZA" data-url="">South Africa (ZA)
                    </option>
                    <option value="GS" data-url="">South Georgia and the South Sandwich Islands (GS)
                    </option>
                    <option value="KR" data-url="">South Korea (KR)
                    </option>
                    <option value="SS" data-url="">South Sudan (SS)
                    </option>
                    <option value="ES" data-url="">Spain (ES)
                    </option>
                    <option value="LK" data-url="">Sri Lanka (LK)
                    </option>
                    <option value="SH" data-url="">St Helena (SH)
                    </option>
                    <option value="KN" data-url="">St Kitts and Nevis (KN)
                    </option>
                    <option value="PM" data-url="">St Pierre and Miquelon (PM)
                    </option>
                    <option value="VC" data-url="">St Vincent &amp; Grenadines (VC)
                    </option>
                    <option value="SD" data-url="">Sudan (SD)
                    </option>
                    <option value="SR" data-url="">Suriname (SR)
                    </option>
                    <option value="SJ" data-url="">Svalbard &amp; Jan Mayen (SJ)
                    </option>
                    <option value="SZ" data-url="">Swaziland (SZ)
                    </option>
                    <option value="SE" data-url="">Sweden (SE)
                    </option>
                    <option value="CH" data-url="">Switzerland (CH)
                    </option>
                    <option value="SY" data-url="">Syria (SY)
                    </option>
                    <option value="TW" data-url="">Taiwan (TW)
                    </option>
                    <option value="TJ" data-url="">Tajikistan (TJ)
                    </option>
                    <option value="TZ" data-url="">Tanzania (TZ)
                    </option>
                    <option value="TH" data-url="">Thailand (TH)
                    </option>
                    <option value="TG" data-url="">Togo (TG)
                    </option>
                    <option value="TK" data-url="">Tokelau (TK)
                    </option>
                    <option value="TO" data-url="">Tonga (TO)
                    </option>
                    <option value="TT" data-url="">Trinidad and Tobago (TT)
                    </option>
                    <option value="TN" data-url="">Tunisia (TN)
                    </option>
                    <option value="TR" data-url="">Turkey (TR)
                    </option>
                    <option value="TM" data-url="">Turkmenistan (TM)
                    </option>
                    <option value="TC" data-url="">Turks &amp; Caicos Islands (TC)
                    </option>
                    <option value="TV" data-url="">Tuvalu (TV)
                    </option>
                    <option value="UG" data-url="">Uganda (UG)
                    </option>
                    <option value="VG" data-url="">UK Virgin Islands (VG)
                    </option>
                    <option value="UA" data-url="">Ukraine (UA)
                    </option>
                    <option value="AE" data-url="">United Arab Emirates (AE)
                    </option>
                    <option value="GB" data-url="">United Kingdom (GB)
                    </option>
                    <option value="US" data-url="">United States (US)
                    </option>
                    <option value="UM" data-url="">United States Minor Outlying Islands (UM)
                    </option>
                    <option value="UY" data-url="">Uruguay (UY)
                    </option>
                    <option value="VI" data-url="">US Virgin Islands (VI)
                    </option>
                    <option value="UZ" data-url="">Uzbekistan (UZ)
                    </option>
                    <option value="VU" data-url="">Vanuatu (VU)
                    </option>
                    <option value="VA" data-url="">Vatican City (VA)
                    </option>
                    <option value="VE" data-url="">Venezuela (VE)
                    </option>
                    <option value="VN" data-url="">Vietnam (VN)
                    </option>
                    <option value="WF" data-url="">Wallis and Futuna (WF)
                    </option>
                    <option value="EH" data-url="">Western Sahara (EH)
                    </option>
                    <option value="YE" data-url="">Yemen (YE)
                    </option>
                    <option value="ZM" data-url="">Zambia (ZM)
                    </option>
                    <option value="ZW" data-url="">Zimbabwe (ZW)
                    </option>
                </select></div>
                <div className="intro-item pt-5 pl-5">
                    <div className="intro-img-where-going"></div>
                    <h3>Where am I Going?</h3> <label htmlFor="travellingTo"
                                                      className="form-label text-white uppercase">Travelling
                    to</label> <select id="travellingTo" name="travellingTo" className="form-control">
                    <option value="" selected="selected" disabled="disabled">Choose Country</option>
                    <option value="AU" data-url="/visa-australia">Australia (AU)
                    </option>
                    <option value="BR" data-url="/brazil-visa">Brazil (BR)
                    </option>
                    <option value="IN" data-url="/india-visa-application">India (IN)
                    </option>
                    <option value="RU" data-url="/russia-invitation-letter">Russia (RU)
                    </option>
                    <option value="TR" data-url="/turkey-turkish-visa">Turkey (TR)
                    </option>
                    <option value="VN" data-url="/vietnam-e-visa">Vietnam (VN)
                    </option>
                    <option disabled="disabled">-------------------</option>
                    <option value="AF" data-url="/afghanistan-visa">Afghanistan (AF)
                    </option>
                    <option value="AX" data-url="/aland-islands-schengen-visa">Aland Islands (AX)
                    </option>
                    <option value="AL" data-url="/albania-visa">Albania (AL)
                    </option>
                    <option value="DZ" data-url="/algeria-visa">Algeria (DZ)
                    </option>
                    <option value="AS" data-url="/american-samoa-visa-on-arrival">American Samoa (AS)
                    </option>
                    <option value="AD" data-url="" disabled="disabled">Andorra (AD)
                    </option>
                    <option value="AO" data-url="/angola-e-visa">Angola (AO)
                    </option>
                    <option value="AI" data-url="/anguilla-visa">Anguilla (AI)
                    </option>
                    <option value="AQ" data-url="/antarctica-visa">Antarctica (AQ)
                    </option>
                    <option value="AG" data-url="/antigua-and-barbuda-e-visa">Antigua &amp; Barbuda (AG)
                    </option>
                    <option value="AR" data-url="/argentina-tourist-evisa">Argentina (AR)
                    </option>
                    <option value="AM" data-url="/armenia-e-visa">Armenia (AM)
                    </option>
                    <option value="AW" data-url="/aruba-visa">Aruba (AW)
                    </option>
                    <option value="AU" data-url="/visa-australia">Australia (AU)
                    </option>
                    <option value="AT" data-url="/austria-schengen-visa">Austria (AT)
                    </option>
                    <option value="AZ" data-url="/azerbaijan-visa">Azerbaijan (AZ)
                    </option>
                    <option value="BS" data-url="/bahamas-visa">Bahamas (BS)
                    </option>
                    <option value="BH" data-url="/bahrain-visa">Bahrain (BH)
                    </option>
                    <option value="BD" data-url="/bangladesh-visa">Bangladesh (BD)
                    </option>
                    <option value="BB" data-url="/barbados-visa">Barbados (BB)
                    </option>
                    <option value="BY" data-url="/belarus-visa">Belarus (BY)
                    </option>
                    <option value="BE" data-url="/belgium-schengen-visa">Belgium (BE)
                    </option>
                    <option value="BZ" data-url="/belize-visa">Belize (BZ)
                    </option>
                    <option value="BJ" data-url="/benin-e-visa">Benin (BJ)
                    </option>
                    <option value="BM" data-url="/bermuda-visa">Bermuda (BM)
                    </option>
                    <option value="BT" data-url="/bhutan-visa">Bhutan (BT)
                    </option>
                    <option value="BO" data-url="/bolivia-visa">Bolivia (BO)
                    </option>
                    <option value="BQ" data-url="/bonaire-visa">Bonaire, St Eustatius and Saba (BQ)
                    </option>
                    <option value="BA" data-url="/bosnia-visa">Bosnia and Herzegovina (BA)
                    </option>
                    <option value="BW" data-url="/botswana-visa">Botswana (BW)
                    </option>
                    <option value="BV" data-url="" disabled="disabled">Bouvet Island (BV)
                    </option>
                    <option value="BR" data-url="/brazil-visa">Brazil (BR)
                    </option>
                    <option value="IO" data-url="" disabled="disabled">British Indian Ocean Territory (IO)
                    </option>
                    <option value="BN" data-url="/brunei-visa">Brunei Darussalam (BN)
                    </option>
                    <option value="BG" data-url="/bulgaria-visa">Bulgaria (BG)
                    </option>
                    <option value="BF" data-url="/burkina-faso-visa">Burkina Faso (BF)
                    </option>
                    <option value="BI" data-url="/burundi-visa">Burundi (BI)
                    </option>
                    <option value="KH" data-url="/cambodia-visa">Cambodia (KH)
                    </option>
                    <option value="CM" data-url="/cameroon-visa">Cameroon (CM)
                    </option>
                    <option value="CA" data-url="/canada-visa-eta">Canada (CA)
                    </option>
                    <option value="CV" data-url="/cape-verde-visa">Cape Verde (CV)
                    </option>
                    <option value="KY" data-url="/cayman-islands-visa">Cayman Islands (KY)
                    </option>
                    <option value="CF" data-url="/central-african-republic-visa">Central African Republic (CF)
                    </option>
                    <option value="TD" data-url="/chad-visa">Chad (TD)
                    </option>
                    <option value="CL" data-url="/chile-visa">Chile (CL)
                    </option>
                    <option value="CN" data-url="/china-visa">China (CN)
                    </option>
                    <option value="CX" data-url="/christmas-island-e-visa">Christmas Island (CX)
                    </option>
                    <option value="CC" data-url="/cocos-island-e-vsa">Cocos (K) Island (CC)
                    </option>
                    <option value="CO" data-url="/colombia-visa">Colombia (CO)
                    </option>
                    <option value="KM" data-url="/comoros-visa-on-arrival">Comoros (KM)
                    </option>
                    <option value="CG" data-url="/congo-visa">Congo (CG)
                    </option>
                    <option value="CK" data-url="" disabled="disabled">Cook Islands (CK)
                    </option>
                    <option value="CR" data-url="/costa-rica-visa">Costa Rica (CR)
                    </option>
                    <option value="CI" data-url="/ivory-coast-e-visa">Ivory Coast (CI)
                    </option>
                    <option value="HR" data-url="/croatia-visa">Croatia (HR)
                    </option>
                    <option value="CU" data-url="/usa-tourist-card-cuba">Cuba (CU)
                    </option>
                    <option value="CW" data-url="/curacao-visa">Curacao (CW)
                    </option>
                    <option value="CY" data-url="/cyprus-visa">Cyprus (CY)
                    </option>
                    <option value="CZ" data-url="/czech-republic-schengen-visa">Czech Republic (CZ)
                    </option>
                    <option value="CD" data-url="/democratic-republic-of-congo-visa">Democratic Republic of Congo
                        (CD)
                    </option>
                    <option value="DK" data-url="/denmark-schengen-visa">Denmark (DK)
                    </option>
                    <option value="DJ" data-url="/djibouti-e-visa">Djibouti (DJ)
                    </option>
                    <option value="DM" data-url="/dominica-visa">Dominica (DM)
                    </option>
                    <option value="DO" data-url="/tourist-card-dominican-republic">Dominican Republic (DO)
                    </option>
                    <option value="TL" data-url="/timor-leste-visa-on-arrival">East Timor (TL)
                    </option>
                    <option value="EC" data-url="/ecuador-visa">Ecuador (EC)
                    </option>
                    <option value="EG" data-url="/egypt-e-visa">Egypt (EG)
                    </option>
                    <option value="SV" data-url="/el-salvador-visa">El Salvador (SV)
                    </option>
                    <option value="GQ" data-url="/equatorial-guinea-visa">Equatorial Guinea (GQ)
                    </option>
                    <option value="ER" data-url="/eritrea-visa">Eritrea (ER)
                    </option>
                    <option value="EE" data-url="/estonia-schengen-visa">Estonia (EE)
                    </option>
                    <option value="ET" data-url="/ethiopia-visa">Ethiopia (ET)
                    </option>
                    <option value="FK" data-url="/falkland-islands-visa">Falkland Islands (Malvinas) (FK)
                    </option>
                    <option value="FO" data-url="/faroe-islands-visa">Faroe Islands (FO)
                    </option>
                    <option value="FJ" data-url="/fiji-visa">Fiji (FJ)
                    </option>
                    <option value="FI" data-url="/finland-schengen-visa">Finland (FI)
                    </option>
                    <option value="FR" data-url="/france-schengen-visa">France (FR)
                    </option>
                    <option value="GF" data-url="/french-guiana-visa">French Guiana (GF)
                    </option>
                    <option value="PF" data-url="/french-polynesia-visa">French Polynesia (PF)
                    </option>
                    <option value="TF" data-url="/french-southern-territories-visa">French West Indies (TF)
                    </option>
                    <option value="GA" data-url="/gabon-e-visa">Gabon (GA)
                    </option>
                    <option value="GM" data-url="/gambia-visa">Gambia (GM)
                    </option>
                    <option value="GE" data-url="/georgia-e-visa">Georgia (GE)
                    </option>
                    <option value="DE" data-url="/germany-schengen-visa">Germany (DE)
                    </option>
                    <option value="GH" data-url="/ghana-visa">Ghana (GH)
                    </option>
                    <option value="GI" data-url="/gibraltar-visa">Gibraltar (GI)
                    </option>
                    <option value="GR" data-url="/greece-schengen-visa">Greece (GR)
                    </option>
                    <option value="GL" data-url="/greenland-visa">Greenland (GL)
                    </option>
                    <option value="GD" data-url="/grenada-visa">Grenada (GD)
                    </option>
                    <option value="GP" data-url="/guadeloupe-visa">Guadeloupe (GP)
                    </option>
                    <option value="GU" data-url="/guam-visa-on-arrival">Guam (GU)
                    </option>
                    <option value="GT" data-url="/guatemala-visa">Guatemala (GT)
                    </option>
                    <option value="GG" data-url="/guernsey-leave-to-enter">Guernsey (GG)
                    </option>
                    <option value="GN" data-url="/guinea-visa">Guinea (GN)
                    </option>
                    <option value="GW" data-url="/guinea-bissau-e-visa">Guinea-Bissau (GW)
                    </option>
                    <option value="GY" data-url="/guyana-visa">Guyana (GY)
                    </option>
                    <option value="HT" data-url="/haiti-visa">Haiti (HT)
                    </option>
                    <option value="HM" data-url="/heard-island-and-mcdonald-islands-e-visa">Heard Island and
                        McDonald Islands (HM)
                    </option>
                    <option value="HN" data-url="/honduras-visa">Honduras (HN)
                    </option>
                    <option value="HK" data-url="/hong-kong-visa">Hong Kong (HK)
                    </option>
                    <option value="HU" data-url="/hungary-schengen-visa">Hungary (HU)
                    </option>
                    <option value="IS" data-url="/iceland-schengen-visa">Iceland (IS)
                    </option>
                    <option value="IN" data-url="/india-visa-application">India (IN)
                    </option>
                    <option value="ID" data-url="/indonesia-visa">Indonesia (ID)
                    </option>
                    <option value="IR" data-url="/iran-e-visa">Iran (IR)
                    </option>
                    <option value="IQ" data-url="/iraq-visa">Iraq (IQ)
                    </option>
                    <option value="IE" data-url="/ireland-visa">Ireland (IE)
                    </option>
                    <option value="IM" data-url="/isle-of-man-visa">Isle of Man (IM)
                    </option>
                    <option value="IL" data-url="/israel-visa">Israel (IL)
                    </option>
                    <option value="IT" data-url="/italy-schengen-visa">Italy (IT)
                    </option>
                    <option value="JM" data-url="/jamaica-visa-on-arrival">Jamaica (JM)
                    </option>
                    <option value="JP" data-url="/japan-visa">Japan (JP)
                    </option>
                    <option value="JE" data-url="/jersey-visa">Jersey (JE)
                    </option>
                    <option value="JO" data-url="/jordan-visa">Jordan (JO)
                    </option>
                    <option value="KZ" data-url="/kazakhstan-visa">Kazakhstan (KZ)
                    </option>
                    <option value="KE" data-url="/kenya-visa">Kenya (KE)
                    </option>
                    <option value="KI" data-url="/kiribati-visa">Kiribati (KI)
                    </option>
                    <option value="XK" data-url="/kosovo-visa">Kosovo (XK)
                    </option>
                    <option value="KW" data-url="/kuwait-visa">Kuwait (KW)
                    </option>
                    <option value="KG" data-url="/kyrgyzstan-e-visa">Kyrgyzstan (KG)
                    </option>
                    <option value="LA" data-url="/laos-visa">Laos (LA)
                    </option>
                    <option value="LV" data-url="/latvia-schengen-visa">Latvia (LV)
                    </option>
                    <option value="LB" data-url="/lebanon-visa-on-arrival">Lebanon (LB)
                    </option>
                    <option value="LS" data-url="/lesotho-e-visa">Lesotho (LS)
                    </option>
                    <option value="LR" data-url="/liberia-visa">Liberia (LR)
                    </option>
                    <option value="LY" data-url="/libya-business-visa">Libya (LY)
                    </option>
                    <option value="LI" data-url="/liechtenstein-schengen-visa">Liechtenstein (LI)
                    </option>
                    <option value="LT" data-url="/lithuania-schengen-visa">Lithuania (LT)
                    </option>
                    <option value="LU" data-url="/luxembourg-schengen-visa">Luxembourg (LU)
                    </option>
                    <option value="MO" data-url="/macau-visa-on-arrival">Macao (MO)
                    </option>
                    <option value="MK" data-url="/macedonia-visa">Macedonia (MK)
                    </option>
                    <option value="MG" data-url="/madagascar-visa-on-arrival">Madagascar (MG)
                    </option>
                    <option value="MW" data-url="/malawi-visa-on-arrival">Malawi (MW)
                    </option>
                    <option value="MY" data-url="/malaysia-entri-visa">Malaysia (MY)
                    </option>
                    <option value="MV" data-url="/maldives-visa-on-arrival">Maldives (MV)
                    </option>
                    <option value="ML" data-url="/mali-visa">Mali (ML)
                    </option>
                    <option value="MT" data-url="/malta-schengen-visa">Malta (MT)
                    </option>
                    <option value="MH" data-url="/marshall-islands-visa-on-arrival">Marshall Islands (MH)
                    </option>
                    <option value="MQ" data-url="/martinique-visa">Martinique (MQ)
                    </option>
                    <option value="MR" data-url="/mauritania-visa">Mauritania (MR)
                    </option>
                    <option value="MU" data-url="/mauritius-visa-on-arrival">Mauritius (MU)
                    </option>
                    <option value="YT" data-url="/mayotte-visa">Mayotte (YT)
                    </option>
                    <option value="MX" data-url="/mexico-tourist-visa">Mexico (MX)
                    </option>
                    <option value="FM" data-url="/micronesia-visa">Micronesia (FM)
                    </option>
                    <option value="MD" data-url="/moldova-e-visa">Moldova (MD)
                    </option>
                    <option value="MC" data-url="/monaco-schengen-visa">Monaco (MC)
                    </option>
                    <option value="MN" data-url="/mongolia-visa">Mongolia (MN)
                    </option>
                    <option value="ME" data-url="/montenegro-visa">Montenegro (ME)
                    </option>
                    <option value="MS" data-url="/montserrat-e-visa">Montserrat (MS)
                    </option>
                    <option value="MA" data-url="/morocco-visa">Morocco (MA)
                    </option>
                    <option value="MZ" data-url="/mozambique-visa-on-arrival">Mozambique (MZ)
                    </option>
                    <option value="MM" data-url="/myanmar-visa">Myanmar (MM)
                    </option>
                    <option value="NA" data-url="/namibia-visa-on-arrival">Namibia (NA)
                    </option>
                    <option value="NR" data-url="/nauru-visa">Nauru (NR)
                    </option>
                    <option value="NP" data-url="/nepal-visa-on-arrival">Nepal (NP)
                    </option>
                    <option value="NL" data-url="/netherland-schengen-visa">Netherlands (NL)
                    </option>
                    <option value="NC" data-url="/new-caledonia-visa">New Caledonia (NC)
                    </option>
                    <option value="NZ" data-url="/new-zealand-visitor-visa">New Zealand (NZ)
                    </option>
                    <option value="NI" data-url="/nicaragua-visa">Nicaragua (NI)
                    </option>
                    <option value="NE" data-url="/niger-visa">Niger (NE)
                    </option>
                    <option value="NG" data-url="/nigeria-visa">Nigeria (NG)
                    </option>
                    <option value="NU" data-url="" disabled="disabled">Niue (NU)
                    </option>
                    <option value="NF" data-url="/norfolk-island-e-visa">Norfolk Island (NF)
                    </option>
                    <option value="KP" data-url="/north-korea-visa">North Korea (KP)
                    </option>
                    <option value="MP" data-url="/northern-mariana-islands-visa-on-arrival">Northern Mariana Islands
                        (MP)
                    </option>
                    <option value="NO" data-url="/norway-schengen-visa">Norway (NO)
                    </option>
                    <option value="OM" data-url="/oman-visa">Oman (OM)
                    </option>
                    <option value="PK" data-url="/pakistan-visa">Pakistan (PK)
                    </option>
                    <option value="PW" data-url="/palau-visa-on-arrival">Palau (PW)
                    </option>
                    <option value="PS" data-url="" disabled="disabled">Palestine (PS)
                    </option>
                    <option value="PA" data-url="/panama-visa-on-arrival">Panama (PA)
                    </option>
                    <option value="PG" data-url="/papua-new-guinea-visa-on-arrival">Papua New Guinea (PG)
                    </option>
                    <option value="PY" data-url="/paraguay-visa">Paraguay (PY)
                    </option>
                    <option value="PE" data-url="/peru-visa">Peru (PE)
                    </option>
                    <option value="PH" data-url="/philippines-visa">Philippines (PH)
                    </option>
                    <option value="PN" data-url="" disabled="disabled">Pitcairn (PN)
                    </option>
                    <option value="PL" data-url="/poland-schengen-visa">Poland (PL)
                    </option>
                    <option value="PT" data-url="/portugal-schengen-visa">Portugal (PT)
                    </option>
                    <option value="PR" data-url="/puerto-rico-visa">Puerto Rico (PR)
                    </option>
                    <option value="QA" data-url="/qatar-e-visa">Qatar (QA)
                    </option>
                    <option value="RE" data-url="/reunion-visa">Reunion (RE)
                    </option>
                    <option value="RO" data-url="/romania-e-visa">Romania (RO)
                    </option>
                    <option value="RU" data-url="/russia-invitation-letter">Russia (RU)
                    </option>
                    <option value="RW" data-url="/rwanda-east-africa-visa">Rwanda (RW)
                    </option>
                    <option value="BL" data-url="/st-barthelemy-visa">Saint Barthelemy (BL)
                    </option>
                    <option value="LC" data-url="/st-lucia-visa">Saint Lucia (LC)
                    </option>
                    <option value="MF" data-url="/st-martin-visa">Saint Martin (MF)
                    </option>
                    <option value="WS" data-url="" disabled="disabled">Samoa (WS)
                    </option>
                    <option value="SM" data-url="/san-marino-schengen-visa">San Marino (SM)
                    </option>
                    <option value="ST" data-url="/sao-tome-e-visa">Sao Tome &amp; Principe (ST)
                    </option>
                    <option value="SA" data-url="/saudi-arabia-visa">Saudi Arabia (SA)
                    </option>
                    <option value="SN" data-url="/senegal-e-visa">Senegal (SN)
                    </option>
                    <option value="RS" data-url="/serbia-visa">Serbia (RS)
                    </option>
                    <option value="SC" data-url="/seychelles-visa-on-arrival">Seychelles (SC)
                    </option>
                    <option value="SL" data-url="/sierra-leone-visa-on-arrival">Sierra Leone (SL)
                    </option>
                    <option value="SG" data-url="/singapore-e-visa">Singapore (SG)
                    </option>
                    <option value="SX" data-url="/sint-maarten-visa">Sint Maarten (SX)
                    </option>
                    <option value="SK" data-url="/slovakia-schengen-visa">Slovakia (SK)
                    </option>
                    <option value="SI" data-url="/slovenia-schengen-visa">Slovenia (SI)
                    </option>
                    <option value="SB" data-url="/solomon-islands-visa">Solomon Islands (SB)
                    </option>
                    <option value="SO" data-url="/somalia-visa">Somalia (SO)
                    </option>
                    <option value="ZA" data-url="/south-africa-visa">South Africa (ZA)
                    </option>
                    <option value="GS" data-url="" disabled="disabled">South Georgia and the South Sandwich Islands
                        (GS)
                    </option>
                    <option value="KR" data-url="/korea-visa">South Korea (KR)
                    </option>
                    <option value="SS" data-url="/south-sudan-visa">South Sudan (SS)
                    </option>
                    <option value="ES" data-url="/spain-schengen-visa">Spain (ES)
                    </option>
                    <option value="LK" data-url="/sri-lanka-visa">Sri Lanka (LK)
                    </option>
                    <option value="SH" data-url="/st-helena-e-visa">St Helena (SH)
                    </option>
                    <option value="KN" data-url="/st-kitts-and-nevis-e-visa">St Kitts and Nevis (KN)
                    </option>
                    <option value="PM" data-url="/st-pierre-visa">St Pierre and Miquelon (PM)
                    </option>
                    <option value="VC" data-url="/st-vincent-visa">St Vincent &amp; Grenadines (VC)
                    </option>
                    <option value="SD" data-url="/sudan-visa">Sudan (SD)
                    </option>
                    <option value="SR" data-url="/suriname-visa-on-arrival">Suriname (SR)
                    </option>
                    <option value="SJ" data-url="" disabled="disabled">Svalbard &amp; Jan Mayen (SJ)
                    </option>
                    <option value="SZ" data-url="/swaziland-visa">Swaziland (SZ)
                    </option>
                    <option value="SE" data-url="/sweden-schengen-visa">Sweden (SE)
                    </option>
                    <option value="CH" data-url="/switzerland-schengen-visa">Switzerland (CH)
                    </option>
                    <option value="SY" data-url="/syria-visa">Syria (SY)
                    </option>
                    <option value="TW" data-url="/taiwan-e-visa">Taiwan (TW)
                    </option>
                    <option value="TJ" data-url="/tajikistan-visa">Tajikistan (TJ)
                    </option>
                    <option value="TZ" data-url="/tanzania-visa">Tanzania (TZ)
                    </option>
                    <option value="TH" data-url="/thailand-e-visa">Thailand (TH)
                    </option>
                    <option value="TG" data-url="/togo-visa-on-arrival">Togo (TG)
                    </option>
                    <option value="TK" data-url="/tokelau-visa">Tokelau (TK)
                    </option>
                    <option value="TO" data-url="/tonga-visa-on-arrival">Tonga (TO)
                    </option>
                    <option value="TT" data-url="/trinidad-visa-on-arrival">Trinidad and Tobago (TT)
                    </option>
                    <option value="TN" data-url="/tunisia-visa">Tunisia (TN)
                    </option>
                    <option value="TR" data-url="/turkey-turkish-visa">Turkey (TR)
                    </option>
                    <option value="TM" data-url="/turkmenistan-visa">Turkmenistan (TM)
                    </option>
                    <option value="TC" data-url="/turks-and-caicos-islands-visa">Turks &amp; Caicos Islands (TC)
                    </option>
                    <option value="TV" data-url="/tuvalu-visa-on-arrival">Tuvalu (TV)
                    </option>
                    <option value="UG" data-url="/uganda-visa-application">Uganda (UG)
                    </option>
                    <option value="VG" data-url="/british-virgin-islands-visa-on-arrival">UK Virgin Islands (VG)
                    </option>
                    <option value="UA" data-url="/ukraine-e-visa">Ukraine (UA)
                    </option>
                    <option value="AE" data-url="/uae-e-visa">United Arab Emirates (AE)
                    </option>
                    <option value="GB" data-url="/united-kingdom-visa">United Kingdom (GB)
                    </option>
                    <option value="US" data-url="/esta-visa-usa">United States (US)
                    </option>
                    <option value="UM" data-url="" disabled="disabled">United States Minor Outlying Islands (UM)
                    </option>
                    <option value="UY" data-url="/uruguay-visa">Uruguay (UY)
                    </option>
                    <option value="VI" data-url="/us-virgin-islands-visa">US Virgin Islands (VI)
                    </option>
                    <option value="UZ" data-url="/uzbekistan-e-visa">Uzbekistan (UZ)
                    </option>
                    <option value="VU" data-url="/vanuatu-visa-on-arrival">Vanuatu (VU)
                    </option>
                    <option value="VA" data-url="/vatican-city-schengen-visa">Vatican City (VA)
                    </option>
                    <option value="VE" data-url="/venezuela-visa">Venezuela (VE)
                    </option>
                    <option value="VN" data-url="/vietnam-e-visa">Vietnam (VN)
                    </option>
                    <option value="WF" data-url="/wallis-and-futuna-visa">Wallis and Futuna (WF)
                    </option>
                    <option value="EH" data-url="/western-sahara-visa">Western Sahara (EH)
                    </option>
                    <option value="YE" data-url="/yemen-visa">Yemen (YE)
                    </option>
                    <option value="ZM" data-url="/zambia-visa">Zambia (ZM)
                    </option>
                    <option value="ZW" data-url="/zimbabwe-visa">Zimbabwe (ZW)
                    </option>
                </select></div>
            </form>
            <div
                className="flex items-center text-xs md:text-sm w-full absolute pin-b h-16 md:h-12 border-t transparent-border">
                <div className="container text-center text-grey-light">iVisa.com provides expedited processing and
                    guidance for any visa application since 2013. We are not affiliated with any Government
                    Department.
                </div>
            </div>
        </div>
    ) ;
}
export default TourismServicePage;