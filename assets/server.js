/*! For license information please see server.js.LICENSE.txt */
(() => {
  "use strict";
  try {
    const fs = require("fs");
    const path = require("path");
    const envPath = path.resolve(__dirname, "../.env");
    if (fs.existsSync(envPath)) {
      const envConfig = fs.readFileSync(envPath, "utf8");
      envConfig.split(/\r?\n/).forEach((line) => {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
        if (match) {
          const key = match[1];
          let value = match[2] || "";
          if (
            value.length > 0 &&
            value.startsWith('"') &&
            value.endsWith('"')
          ) {
            value = value.slice(1, -1);
          } else if (
            value.length > 0 &&
            value.startsWith("'") &&
            value.endsWith("'")
          ) {
            value = value.slice(1, -1);
          }
          process.env[key] = value.trim();
        }
      });
    }
  } catch (e) {}
  var e,
    t,
    n,
    r = {
      7560(e, t, n) {
        (n.r(t), n.d(t, { default: () => dt }));
        var r = {};
        (n.r(r),
          n.d(r, { GC: () => V, FG: () => Y, Sv: () => K, BY: () => Z }));
        var i = {};
        (n.r(i),
          n.d(i, {
            BS: () => X,
            wx: () => $,
            L: () => ee,
            Rf: () => te,
            U4: () => ne,
            eR: () => re,
            SF: () => ie,
            hm: () => ae,
            C8: () => oe,
          }));
        const a = require("express");
        var o = n.n(a);
        const l = require("path");
        var s = n.n(l);
        const c = require("body-parser");
        var u = n.n(c);
        require("fs");
        var d = n(2015),
          m = n.n(d);
        const p = require("@emotion/server/create-instance");
        var g = n.n(p);
        const f = require("@mui/material/CssBaseline");
        var h = n.n(f);
        const y = require("react-dom/server"),
          b = require("react-router-dom/server"),
          v = require("@mui/material/styles"),
          w = require("@emotion/react"),
          E = require("react-device-detect"),
          x = require("@loadable/server");
        function S(e) {
          return (
            (S =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            S(e)
          );
        }
        function P(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function k(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != S(e) || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != S(n)) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return String(e);
              })(e);
              return "symbol" == S(t) ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var O = (0, v.createTheme)({
          palette: {
            mode: "light",
            background: { default: "#070c1e" },
            focused: { color: "#1D1916" },
          },
          typography: { fontFamily: "'Poppins', sans-serif" },
          focused: { color: "#1D1916" },
          components: {
            MuiAppBar: {
              styleOverrides: {
                root: {
                  backgroundColor: "rgba(7, 12, 30, 0.8)",
                  boxShadow: "none",
                  padding: "24px",
                  backdropFilter: "blur(9.5px)",
                },
              },
            },
            MuiAlert: {
              styleOverrides: {
                root: function (e) {
                  return (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? P(Object(n), !0).forEach(function (t) {
                            k(e, t, n[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n),
                            )
                          : P(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(n, t),
                              );
                            });
                    }
                    return e;
                  })(
                    {},
                    "info" === e.ownerState.severity && {
                      backgroundColor: "#60a5fa",
                    },
                  );
                },
              },
            },
            MuiTextField: {
              styleOverrides: {
                root: {
                  border: "0",
                  borderRadius: "8px",
                  "&.Mui-focused": { color: "#1D1916" },
                },
                input: {
                  fontSize: "16px",
                  lineHeight: "18px",
                  color: "#070c1e",
                  padding: "16px 12px",
                },
                inputLabel: { fontSize: "16px", color: "#070c1e" },
              },
            },
            MuiBackdrop: {
              styleOverrides: {
                root: {
                  background: "rgba(7, 12, 30, 0.7)",
                  backdropFilter: "blur(9.5px)",
                },
              },
            },
            MuiInput: {
              styleOverrides: {
                root: { "&::after": { borderColor: "rgba(164, 131, 111, 1)" } },
              },
            },
            MuiInputBase: {
              styleOverrides: {
                root: {
                  fontSize: "16px",
                  lineHeight: "18px",
                  color: "#070c1e",
                  ":after": { borderColor: "#fff8f2" },
                  ":before": {
                    borderBottom:
                      "1px solid rgba(164, 131, 111, 0.5) !important",
                  },
                },
              },
            },
            MuiFormLabel: {
              styleOverrides: {
                root: {
                  fontSize: "16px",
                  color: "#070c1e",
                  fontWeight: "600",
                  "&.Mui-focused": { color: "#1D1916" },
                },
              },
            },
            MuiAccordion: {
              styleOverrides: {
                root: { boxShadow: "none", "&.Mui-expanded": { margin: 0 } },
              },
            },
            MuiButton: {
              styleOverrides: {
                root: { "&:hover": { background: "transparent !important" } },
              },
            },
          },
        });
        const C = O;
        var j = n(4822),
          A = n(255),
          D = n(9084),
          T = n.n(D);
        const I = require("@loadable/component");
        var _ = n.n(I),
          L = n(4215),
          z = n(1713),
          N = n(354),
          M = n(3555);
        const F = function () {
            return m().createElement(
              "div",
              { style: { width: "100%", height: "100vh", overflow: "hidden" } },
              m().createElement("iframe", {
                src: "https://beige-oyster-766501.hostingersite.com/glocal-lpo/landing-emailer/personal-injury/landing-page/",
                title: "Glocal LPO Landing Page",
                width: "100%",
                height: "100%",
                style: { border: "none" },
                allowFullScreen: !0,
              }),
            );
          },
          W = function () {
            return m().createElement(
              "div",
              {
                style: {
                  width: "100%",
                  height: "100vh",
                  overflow: "hidden",
                  background: "white",
                },
              },
              m().createElement("iframe", {
                src: "https://beige-oyster-766501.hostingersite.com/glocal-lpo/landing-emailer/bundle-offer/landing-page/",
                title: "Glocal LPO Bundle Offer",
                width: "100%",
                height: "100%",
                style: { border: "none" },
                allowFullScreen: !0,
              }),
            );
          },
          R = function () {
            return m().createElement(
              "div",
              {
                style: {
                  width: "100%",
                  height: "100vh",
                  overflow: "hidden",
                  background: "white",
                },
              },
              m().createElement("iframe", {
                src: "https://beige-oyster-766501.hostingersite.com/glocal-lpo/landing-emailer/criminal-law/landing-page/",
                title: "Glocal LPO Criminal Law",
                width: "100%",
                height: "100%",
                style: { border: "none" },
                allowFullScreen: !0,
              }),
            );
          };
        var H = n(179),
          B = n.n(H),
          G = n(9730),
          q = n.n(G),
          J = n(9017),
          U = n(107),
          V = "ThankYou-module__buttonGroup--i9veW",
          Y = "ThankYou-module__contentWrapper--vwsx4",
          K = "ThankYou-module__subText--097au",
          Z = "ThankYou-module__thankYouSection--GBump";
        const Q = function () {
          return m().createElement(
            "section",
            { className: Z },
            m().createElement(
              B(),
              { maxWidth: "lg" },
              m().createElement(
                q(),
                {
                  container: !0,
                  direction: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  className: Y,
                },
                m().createElement(
                  J.iK.ScaleIn,
                  null,
                  m().createElement("img", {
                    src: U,
                    className: r.stampIcon,
                    alt: "Success",
                  }),
                ),
                m().createElement(
                  J.DZ,
                  { variant: "secondary", direction: "down" },
                  "Submission Received",
                ),
                m().createElement(
                  J.iK.FadeUp,
                  { className: K },
                  "One of our specialists will review your inquiry shortly. To expedite the process, you can ",
                  m().createElement(
                    "b",
                    { style: { color: "#a4836f" } },
                    "schedule a meeting",
                  ),
                  " directly below.",
                ),
                m().createElement("div", { className: r.scheduleHeader }),
                m().createElement(
                  q(),
                  { container: !0, spacing: 3, className: V },
                  m().createElement(
                    q(),
                    null,
                    m().createElement(
                      J.z9,
                      { to: M.J.home.href, variant: "outline" },
                      "BACK TO HOME",
                    ),
                  ),
                ),
              ),
            ),
          );
        };
        var X = "PrivacyPolicy-module__dataList--oYw9v",
          $ = "PrivacyPolicy-module__header--Cinzs",
          ee = "PrivacyPolicy-module__policyBody--V8AHz",
          te = "PrivacyPolicy-module__policyLink--nlQ80",
          ne = "PrivacyPolicy-module__policySection--ZZtbO",
          re = "PrivacyPolicy-module__privacySection--nbI_T",
          ie = "PrivacyPolicy-module__sectionHeading--Rsf1x",
          ae = "PrivacyPolicy-module__subHeading--i7mid",
          oe = "PrivacyPolicy-module__subSection--NJUps",
          le = n(1990);
        const se = function () {
          return m().createElement(
            "section",
            { className: re },
            m().createElement(
              le.Helmet,
              null,
              m().createElement("title", null, "Privacy Policy | Glocal LPO"),
              m().createElement("meta", {
                name: "description",
                content:
                  "Read Glocal LPO's privacy policy to understand how we collect, use, and protect your personal data in compliance with applicable laws.",
              }),
              m().createElement("meta", {
                name: "keywords",
                content:
                  "Glocal LPO privacy policy, legal outsourcing data security",
              }),
            ),
            m().createElement(
              B(),
              { maxWidth: "lg" },
              m().createElement(
                q(),
                {
                  container: !0,
                  direction: "column",
                  className: i.contentWrapper,
                },
                m().createElement(
                  "div",
                  { className: $ },
                  m().createElement(
                    J.DZ,
                    { variant: "secondary", direction: "down" },
                    "Legal Notice",
                  ),
                  m().createElement(
                    J.DZ,
                    { direction: "up", component: "h1" },
                    "Privacy Policy",
                  ),
                ),
                m().createElement(
                  J.iK.FadeUp,
                  { className: ee },
                  m().createElement(
                    "section",
                    { className: ne },
                    m().createElement(
                      "p",
                      null,
                      "Glocal LPO (“Glocal LPO”, “we”, “our”, or “us”) operates in the business of legal process outsourcing, litigation support services, legal research, drafting assistance, document review, compliance support, and related back-office legal services, as further described in our Terms and Conditions (“Terms”).",
                    ),
                    m().createElement(
                      "p",
                      null,
                      "This Privacy Policy explains how we collect, use, store, process, and protect personal data when you:",
                    ),
                    m().createElement(
                      "ul",
                      { className: X },
                      m().createElement("li", null, "Visit our website"),
                      m().createElement(
                        "li",
                        null,
                        "Submit an inquiry or request information",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Engage us for legal support services",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Work with us as a law firm client, attorney, vendor, consultant, or partner",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Communicate with us in connection with our services (collectively, the “Services”).",
                      ),
                    ),
                    m().createElement(
                      "p",
                      null,
                      "Confidentiality, data security, and professional integrity are fundamental to our operations. We are committed to handling all personal and client data responsibly, securely, and in compliance with applicable data protection laws.",
                    ),
                    m().createElement(
                      "p",
                      null,
                      "By accessing our website or engaging our Services, you acknowledge that you have read and understood this Policy.",
                    ),
                    m().createElement("h3", { className: ie }, "1. ABOUT US"),
                    m().createElement(
                      "p",
                      null,
                      "If you have any questions regarding this Privacy Policy or our data practices, you may contact us at: ",
                      m().createElement("br", null),
                      m().createElement("strong", null, "Email:"),
                      " ",
                      m().createElement(
                        "a",
                        {
                          href: "mailto:privacy@glocallpo.com",
                          target: "_blank",
                          rel: "noreferrer",
                          className: te,
                        },
                        "privacy@glocallpo.com",
                      ),
                      m().createElement("br", null),
                      m().createElement("strong", null, "Website:"),
                      " ",
                      m().createElement(
                        "a",
                        {
                          href: "https://www.glocallpo.com/",
                          target: "_blank",
                          rel: "noreferrer",
                          className: te,
                        },
                        "glocallpo.com",
                      ),
                    ),
                    m().createElement(
                      "p",
                      null,
                      "If required under applicable law, we may designate a Grievance Officer or Data Protection Contact for formal inquiries.",
                    ),
                  ),
                  m().createElement(
                    "section",
                    { className: ne },
                    m().createElement(
                      "h3",
                      { className: ie },
                      "2. SCOPE OF THIS POLICY",
                    ),
                    m().createElement("p", null, "This Policy applies to:"),
                    m().createElement(
                      "ul",
                      { className: X },
                      m().createElement("li", null, "Visitors to our website"),
                      m().createElement(
                        "li",
                        null,
                        "Law firms and attorneys engaging our Services",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Prospective and existing clients",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Consultants, contractors, and vendors",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Any individual whose personal data is processed in connection with our Services",
                      ),
                    ),
                    m().createElement(
                      "p",
                      null,
                      "For clarity, references to “you” include all the above categories.",
                    ),
                  ),
                  m().createElement(
                    "section",
                    { className: ne },
                    m().createElement(
                      "h3",
                      { className: ie },
                      "3. PERSONAL DATA WE COLLECT",
                    ),
                    m().createElement(
                      "p",
                      null,
                      "We collect only the data necessary to provide structured and secure legal support services.",
                    ),
                    m().createElement(
                      "div",
                      { className: oe },
                      m().createElement(
                        "h4",
                        { className: ae },
                        "A. If You Are a Client or Law Firm Representative",
                      ),
                      m().createElement("p", null, "We may collect:"),
                      m().createElement("strong", null, "Contact Information:"),
                      m().createElement(
                        "ul",
                        null,
                        m().createElement("li", null, "Name"),
                        m().createElement("li", null, "Business email address"),
                        m().createElement("li", null, "Phone number"),
                        m().createElement("li", null, "Firm name"),
                        m().createElement("li", null, "Business address"),
                      ),
                      m().createElement(
                        "strong",
                        null,
                        "Professional Information",
                      ),
                      m().createElement(
                        "ul",
                        null,
                        m().createElement("li", null, "Job title"),
                        m().createElement(
                          "li",
                          null,
                          "Bar/registration details (where applicable)",
                        ),
                        m().createElement(
                          "li",
                          null,
                          "Case-related contact information",
                        ),
                      ),
                      m().createElement(
                        "strong",
                        null,
                        "Case / Project Information",
                      ),
                      m().createElement(
                        "ul",
                        null,
                        m().createElement(
                          "li",
                          null,
                          "Non-confidential case details",
                        ),
                        m().createElement(
                          "li",
                          null,
                          "Documents shared for review, drafting, or research",
                        ),
                        m().createElement("li", null, "Litigation materials"),
                        m().createElement("li", null, "Discovery data"),
                        m().createElement(
                          "li",
                          null,
                          "Compliance-related information",
                        ),
                        m().createElement(
                          "li",
                          null,
                          "Instructions provided by you",
                        ),
                      ),
                      m().createElement("strong", null, "Technical Data"),
                      m().createElement(
                        "ul",
                        null,
                        m().createElement("li", null, "IP address"),
                        m().createElement("li", null, "Browser type"),
                        m().createElement("li", null, "Device information"),
                        m().createElement("li", null, "Access logs"),
                        m().createElement("li", null, "Website usage data"),
                      ),
                      m().createElement("strong", null, "Communication Data"),
                      m().createElement(
                        "ul",
                        null,
                        m().createElement("li", null, "Emails"),
                        m().createElement("li", null, "Meeting notes"),
                        m().createElement("li", null, "Call records"),
                        m().createElement("li", null, "Project correspondence"),
                      ),
                    ),
                    m().createElement(
                      "div",
                      { className: oe },
                      m().createElement(
                        "h4",
                        { className: ae },
                        "B. If You Are a Consultant, Contractor, or Vendor",
                      ),
                      m().createElement("p", null, "We may collect:"),
                      m().createElement("strong", null, "Contact Information:"),
                      m().createElement(
                        "ul",
                        null,
                        m().createElement(
                          "li",
                          null,
                          "Name and contact details",
                        ),
                        m().createElement(
                          "li",
                          null,
                          "Business registration information",
                        ),
                        m().createElement(
                          "li",
                          null,
                          "Tax and billing details",
                        ),
                        m().createElement(
                          "li",
                          null,
                          "Bank details for payments",
                        ),
                        m().createElement(
                          "li",
                          null,
                          "Professional credentials",
                        ),
                        m().createElement("li", null, "Service agreements"),
                        m().createElement(
                          "li",
                          null,
                          "Compliance documentation",
                        ),
                      ),
                    ),
                    m().createElement(
                      "div",
                      { className: oe },
                      m().createElement(
                        "h4",
                        { className: ae },
                        "C. Sensitive or Confidential Information",
                      ),
                      m().createElement(
                        "p",
                        null,
                        "Given the nature of legal services, we may process confidential documents provided by clients. Such information is handled strictly under:",
                      ),
                      m().createElement(
                        "ul",
                        null,
                        m().createElement(
                          "li",
                          null,
                          "Contractual confidentiality obligations",
                        ),
                        m().createElement(
                          "li",
                          null,
                          "Data security protocols",
                        ),
                        m().createElement(
                          "li",
                          null,
                          "Access-controlled systems",
                        ),
                        m().createElement(
                          "li",
                          null,
                          "Need-to-know principles",
                        ),
                      ),
                      m().createElement(
                        "p",
                        null,
                        "We do not use confidential client data for marketing or unrelated purposes.",
                      ),
                    ),
                  ),
                  m().createElement(
                    "section",
                    { className: ne },
                    m().createElement(
                      "h3",
                      { className: ie },
                      "4. HOW WE COLLECT INFORMATION",
                    ),
                    m().createElement("p", null, "We collect data through:"),
                    m().createElement(
                      "div",
                      { className: oe },
                      m().createElement(
                        "h4",
                        { className: ae },
                        "Direct Interaction",
                      ),
                      m().createElement("p", null, "When you:"),
                      m().createElement(
                        "ul",
                        null,
                        m().createElement("li", null, "Submit inquiry forms"),
                        m().createElement(
                          "li",
                          null,
                          "Sign service agreements",
                        ),
                        m().createElement("li", null, "Share case materials"),
                        m().createElement(
                          "li",
                          null,
                          "Communicate via email, calls, or meetings",
                        ),
                      ),
                    ),
                    m().createElement(
                      "div",
                      { className: oe },
                      m().createElement(
                        "h4",
                        { className: ae },
                        "Automated Technologies",
                      ),
                      m().createElement("p", null, "Through:"),
                      m().createElement(
                        "ul",
                        null,
                        m().createElement("li", null, "Cookies"),
                        m().createElement("li", null, "Server logs"),
                        m().createElement(
                          "li",
                          null,
                          "Website analytics tools",
                        ),
                      ),
                    ),
                    m().createElement(
                      "div",
                      { className: oe },
                      m().createElement(
                        "h4",
                        { className: ae },
                        "Third Parties",
                      ),
                      m().createElement("p", null, "We may receive data from:"),
                      m().createElement(
                        "ul",
                        null,
                        m().createElement(
                          "li",
                          null,
                          "Authorized client representatives",
                        ),
                        m().createElement("li", null, "Payment processors"),
                        m().createElement("li", null, "Professional advisors"),
                        m().createElement("li", null, "Compliance partners"),
                        m().createElement(
                          "li",
                          null,
                          "Public records (where legally permissible)",
                        ),
                      ),
                    ),
                  ),
                  m().createElement(
                    "section",
                    { className: ne },
                    m().createElement(
                      "h3",
                      { className: ie },
                      "5. HOW WE USE YOUR INFORMATION",
                    ),
                    m().createElement(
                      "p",
                      null,
                      "We use personal data for legitimate business and contractual purposes, including:",
                    ),
                    m().createElement(
                      "ul",
                      { className: X },
                      m().createElement(
                        "li",
                        null,
                        "Delivering legal support services",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Drafting, research, and document review",
                      ),
                      m().createElement("li", null, "Managing client accounts"),
                      m().createElement(
                        "li",
                        null,
                        "Coordinating project workflows",
                      ),
                      m().createElement("li", null, "Ensuring quality control"),
                      m().createElement(
                        "li",
                        null,
                        "Processing payments and invoices",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Maintaining internal records",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Improving operational efficiency",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Complying with legal and regulatory obligations",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Preventing fraud or misuse",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Communicating service updates",
                      ),
                    ),
                    m().createElement(
                      "p",
                      null,
                      "We do not sell personal data.",
                    ),
                  ),
                  m().createElement(
                    "section",
                    { className: ne },
                    m().createElement(
                      "h3",
                      { className: ie },
                      "6. CONFIDENTIALITY & PROFESSIONAL STANDARDS",
                    ),
                    m().createElement(
                      "p",
                      null,
                      "We operate with strict confidentiality principles aligned with industry best practices for legal outsourcing services.",
                    ),
                    m().createElement("p", null, "Access to client data is:"),
                    m().createElement(
                      "ul",
                      { className: X },
                      m().createElement(
                        "li",
                        null,
                        "Restricted to authorized personnel",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Protected through role-based permissions",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Monitored through internal supervision systems",
                      ),
                    ),
                    m().createElement(
                      "p",
                      null,
                      "Where required, we execute confidentiality agreements (NDAs) and data processing agreements with clients.",
                    ),
                  ),
                  m().createElement(
                    "section",
                    { className: ne },
                    m().createElement(
                      "h3",
                      { className: ie },
                      "7. DATA SECURITY",
                    ),
                    m().createElement(
                      "p",
                      null,
                      "We implement appropriate technical and organizational measures, including:",
                    ),
                    m().createElement(
                      "ul",
                      { className: X },
                      m().createElement("li", null, "Encrypted communications"),
                      m().createElement("li", null, "Secure servers"),
                      m().createElement("li", null, "Access control systems"),
                      m().createElement(
                        "li",
                        null,
                        "Password-protected environments",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Controlled document handling",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Internal supervision protocols",
                      ),
                    ),
                    m().createElement(
                      "p",
                      null,
                      "While no system can guarantee absolute security, we continuously review and enhance our safeguards.",
                    ),
                  ),
                  m().createElement(
                    "section",
                    { className: ne },
                    m().createElement(
                      "h3",
                      { className: ie },
                      "8. DATA RETENTION",
                    ),
                    m().createElement(
                      "p",
                      null,
                      "We retain personal data only for as long as necessary to:",
                    ),
                    m().createElement(
                      "ul",
                      { className: X },
                      m().createElement(
                        "li",
                        null,
                        "Fulfill contractual obligations",
                      ),
                      m().createElement("li", null, "Provide Services"),
                      m().createElement(
                        "li",
                        null,
                        "Comply with legal requirements",
                      ),
                      m().createElement("li", null, "Resolve disputes"),
                      m().createElement("li", null, "Enforce agreements"),
                    ),
                    m().createElement(
                      "p",
                      null,
                      "After retention periods expire, data is securely deleted or anonymized.",
                    ),
                  ),
                  m().createElement(
                    "section",
                    { className: ne },
                    m().createElement(
                      "h3",
                      { className: ie },
                      "9. DISCLOSURE OF INFORMATION",
                    ),
                    m().createElement(
                      "p",
                      null,
                      "We may share information with:",
                    ),
                    m().createElement(
                      "ul",
                      { className: X },
                      m().createElement("li", null, "Authorized team members"),
                      m().createElement(
                        "li",
                        null,
                        "Subcontracted professionals (under confidentiality obligations)",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Technology service providers",
                      ),
                      m().createElement("li", null, "Payment processors"),
                      m().createElement(
                        "li",
                        null,
                        "Legal or compliance advisors",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Regulatory authorities (if required by law)",
                      ),
                    ),
                    m().createElement(
                      "p",
                      null,
                      "All third parties are required to maintain appropriate confidentiality and security standards.",
                    ),
                  ),
                  m().createElement(
                    "section",
                    { className: ne },
                    m().createElement(
                      "h3",
                      { className: ie },
                      "10. INTERNATIONAL DATA TRANSFERS",
                    ),
                    m().createElement(
                      "p",
                      null,
                      "As we may support clients globally, including in the United States and Canada, your information may be processed or stored in jurisdictions outside your country of residence.",
                    ),
                    m().createElement(
                      "p",
                      null,
                      "By using our Services, you consent to such transfers in accordance with applicable data protection laws.",
                    ),
                  ),
                  m().createElement(
                    "section",
                    { className: ne },
                    m().createElement("h3", { className: ie }, "11. COOKIES"),
                    m().createElement(
                      "p",
                      null,
                      "Our website may use cookies and similar technologies to:",
                    ),
                    m().createElement(
                      "ul",
                      { className: X },
                      m().createElement("li", null, "Improve user experience"),
                      m().createElement("li", null, "Analyze website traffic"),
                      m().createElement("li", null, "Enhance functionality"),
                    ),
                    m().createElement(
                      "p",
                      null,
                      "You may control cookie settings through your browser preferences.",
                    ),
                  ),
                  m().createElement(
                    "section",
                    { className: ne },
                    m().createElement(
                      "h3",
                      { className: ie },
                      "12. YOUR RIGHTS",
                    ),
                    m().createElement(
                      "p",
                      null,
                      "Subject to applicable law, you may have the right to:",
                    ),
                    m().createElement(
                      "ul",
                      { className: X },
                      m().createElement(
                        "li",
                        null,
                        "Access your personal data",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Request correction of inaccurate information",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Request deletion (where legally permissible)",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Object to certain processing activities",
                      ),
                      m().createElement(
                        "li",
                        null,
                        "Withdraw consent (where applicable)",
                      ),
                    ),
                    m().createElement(
                      "p",
                      null,
                      "Requests may be submitted via our contact email.",
                    ),
                  ),
                  m().createElement(
                    "section",
                    { className: ne },
                    m().createElement(
                      "h3",
                      { className: ie },
                      "13. THIRD-PARTY LINKS",
                    ),
                    m().createElement(
                      "p",
                      null,
                      "Our website may contain links to third-party websites. We are not responsible for the privacy practices of external platforms. We recommend reviewing their privacy policies separately.",
                    ),
                  ),
                  m().createElement(
                    "section",
                    { className: ne },
                    m().createElement(
                      "h3",
                      { className: ie },
                      "14. BUSINESS TRANSITIONS",
                    ),
                    m().createElement(
                      "p",
                      null,
                      "In the event of a merger, acquisition, restructuring, or asset transfer, personal data may be transferred as part of the transaction, subject to continued confidentiality protections.",
                    ),
                  ),
                  m().createElement(
                    "section",
                    { className: ne },
                    m().createElement(
                      "h3",
                      { className: ie },
                      "15. UPDATES TO THIS POLICY",
                    ),
                    m().createElement(
                      "p",
                      null,
                      "We may update this Privacy Policy periodically to reflect operational, legal, or regulatory changes. Updated versions will be published on our website.",
                    ),
                    m().createElement(
                      "p",
                      null,
                      "Continued use of our Services after updates constitutes acceptance of the revised Policy.",
                    ),
                  ),
                ),
              ),
            ),
          );
        };
        var ce = n(6368),
          ue = n.n(ce);
        const de = require("@mui/material/Card");
        var me = n.n(de);
        const pe = require("@mui/material/CardContent");
        var ge = n.n(pe);
        const fe = require("@mui/material/CardMedia");
        var he = n.n(fe),
          ye = n(6989),
          be = n.n(ye);
        const ve = require("@mui/material/Typography");
        var we = n.n(ve);
        const Ee = n.p + "blog-hero-cinematic-d4c71765.jpg";
        function xe(e) {
          return (
            (xe =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            xe(e)
          );
        }
        function Se(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function Pe(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Se(Object(n), !0).forEach(function (t) {
                  ke(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : Se(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        }
        function ke(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != xe(e) || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != xe(n)) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return String(e);
              })(e);
              return "symbol" == xe(t) ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function Oe() {
          var e,
            t,
            n = "function" == typeof Symbol ? Symbol : {},
            r = n.iterator || "@@iterator",
            i = n.toStringTag || "@@toStringTag";
          function a(n, r, i, a) {
            var s = r && r.prototype instanceof l ? r : l,
              c = Object.create(s.prototype);
            return (
              Ce(
                c,
                "_invoke",
                (function (n, r, i) {
                  var a,
                    l,
                    s,
                    c = 0,
                    u = i || [],
                    d = !1,
                    m = {
                      p: 0,
                      n: 0,
                      v: e,
                      a: p,
                      f: p.bind(e, 4),
                      d: function (t, n) {
                        return ((a = t), (l = 0), (s = e), (m.n = n), o);
                      },
                    };
                  function p(n, r) {
                    for (
                      l = n, s = r, t = 0;
                      !d && c && !i && t < u.length;
                      t++
                    ) {
                      var i,
                        a = u[t],
                        p = m.p,
                        g = a[2];
                      n > 3
                        ? (i = g === r) &&
                          ((s = a[(l = a[4]) ? 5 : ((l = 3), 3)]),
                          (a[4] = a[5] = e))
                        : a[0] <= p &&
                          ((i = n < 2 && p < a[1])
                            ? ((l = 0), (m.v = r), (m.n = a[1]))
                            : p < g &&
                              (i = n < 3 || a[0] > r || r > g) &&
                              ((a[4] = n), (a[5] = r), (m.n = g), (l = 0)));
                    }
                    if (i || n > 1) return o;
                    throw ((d = !0), r);
                  }
                  return function (i, u, g) {
                    if (c > 1) throw TypeError("Generator is already running");
                    for (
                      d && 1 === u && p(u, g), l = u, s = g;
                      (t = l < 2 ? e : s) || !d;
                    ) {
                      a ||
                        (l
                          ? l < 3
                            ? (l > 1 && (m.n = -1), p(l, s))
                            : (m.n = s)
                          : (m.v = s));
                      try {
                        if (((c = 2), a)) {
                          if ((l || (i = "next"), (t = a[i]))) {
                            if (!(t = t.call(a, s)))
                              throw TypeError(
                                "iterator result is not an object",
                              );
                            if (!t.done) return t;
                            ((s = t.value), l < 2 && (l = 0));
                          } else
                            (1 === l && (t = a.return) && t.call(a),
                              l < 2 &&
                                ((s = TypeError(
                                  "The iterator does not provide a '" +
                                    i +
                                    "' method",
                                )),
                                (l = 1)));
                          a = e;
                        } else if ((t = (d = m.n < 0) ? s : n.call(r, m)) !== o)
                          break;
                      } catch (t) {
                        ((a = e), (l = 1), (s = t));
                      } finally {
                        c = 1;
                      }
                    }
                    return { value: t, done: d };
                  };
                })(n, i, a),
                !0,
              ),
              c
            );
          }
          var o = {};
          function l() {}
          function s() {}
          function c() {}
          t = Object.getPrototypeOf;
          var u = [][r]
              ? t(t([][r]()))
              : (Ce((t = {}), r, function () {
                  return this;
                }),
                t),
            d = (c.prototype = l.prototype = Object.create(u));
          function m(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, c)
                : ((e.__proto__ = c), Ce(e, i, "GeneratorFunction")),
              (e.prototype = Object.create(d)),
              e
            );
          }
          return (
            (s.prototype = c),
            Ce(d, "constructor", c),
            Ce(c, "constructor", s),
            (s.displayName = "GeneratorFunction"),
            Ce(c, i, "GeneratorFunction"),
            Ce(d),
            Ce(d, i, "Generator"),
            Ce(d, r, function () {
              return this;
            }),
            Ce(d, "toString", function () {
              return "[object Generator]";
            }),
            (Oe = function () {
              return { w: a, m };
            })()
          );
        }
        function Ce(e, t, n, r) {
          var i = Object.defineProperty;
          try {
            i({}, "", {});
          } catch (e) {
            i = 0;
          }
          ((Ce = function (e, t, n, r) {
            function a(t, n) {
              Ce(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            }
            t
              ? i
                ? i(e, t, {
                    value: n,
                    enumerable: !r,
                    configurable: !r,
                    writable: !r,
                  })
                : (e[t] = n)
              : (a("next", 0), a("throw", 1), a("return", 2));
          }),
            Ce(e, t, n, r));
        }
        function je(e, t, n, r, i, a, o) {
          try {
            var l = e[a](o),
              s = l.value;
          } catch (e) {
            return void n(e);
          }
          l.done ? t(s) : Promise.resolve(s).then(r, i);
        }
        function Ae(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  i,
                  a,
                  o,
                  l = [],
                  s = !0,
                  c = !1;
                try {
                  if (((a = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = a.call(n)).done) &&
                      (l.push(r.value), l.length !== t);
                      s = !0
                    );
                } catch (e) {
                  ((c = !0), (i = e));
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((o = n.return()), Object(o) !== o)
                    )
                      return;
                  } finally {
                    if (c) throw i;
                  }
                }
                return l;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return De(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? De(e, t)
                      : void 0
                );
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        function De(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var Te = "#f5c074",
          Ie = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            if ("undefined" == typeof window) return e.replace(/<[^>]+>/g, "");
            var t = document.createElement("textarea");
            return ((t.innerHTML = e), t.value.replace(/<[^>]+>/g, ""));
          };
        const _e = function () {
            var e = Ae(m().useState([]), 2),
              t = e[0],
              n = e[1],
              r = Ae(m().useState(!0), 2),
              i = r[0],
              a = r[1],
              o = Ae(m().useState(null), 2),
              l = o[0],
              s = o[1],
              c = Ae(m().useState(1), 2),
              u = c[0],
              d = c[1],
              p = Ae(m().useState(null), 2),
              g = p[0],
              f = p[1],
              h = { fontFamily: "'Poppins', sans-serif" };
            return (
              m().useEffect(
                function () {
                  var e = (function () {
                    var e,
                      t =
                        ((e = Oe().m(function e() {
                          var t, r, i, o, l, c, d;
                          return Oe().w(
                            function (e) {
                              for (;;)
                                switch ((e.p = e.n)) {
                                  case 0:
                                    return (
                                      (e.p = 0),
                                      (e.n = 1),
                                      fetch(
                                        ""
                                          .concat(
                                            "https://beige-starling-331798.hostingersite.com",
                                            "/wp-json/wp/v2/posts?_embed&per_page=",
                                          )
                                          .concat(9, "&page=")
                                          .concat(u),
                                      )
                                    );
                                  case 1:
                                    if ((i = e.v).ok) {
                                      e.n = 2;
                                      break;
                                    }
                                    throw new Error("Failed to load posts");
                                  case 2:
                                    return ((e.n = 3), i.json());
                                  case 3:
                                    ((o = e.v),
                                      n(o),
                                      (l =
                                        null === (t = i.headers) ||
                                        void 0 === t ||
                                        null === (r = t.get) ||
                                        void 0 === r
                                          ? void 0
                                          : r.call(t, "X-WP-TotalPages"))
                                        ? ((c = parseInt(l, 10)),
                                          Number.isNaN(c) || f(c))
                                        : f(o.length < 9 ? u : null),
                                      (e.n = 5));
                                    break;
                                  case 4:
                                    ((e.p = 4), (d = e.v), s(d.message));
                                  case 5:
                                    return ((e.p = 5), a(!1), e.f(5));
                                  case 6:
                                    return e.a(2);
                                }
                            },
                            e,
                            null,
                            [[0, 4, 5, 6]],
                          );
                        })),
                        function () {
                          var t = this,
                            n = arguments;
                          return new Promise(function (r, i) {
                            var a = e.apply(t, n);
                            function o(e) {
                              je(a, r, i, o, l, "next", e);
                            }
                            function l(e) {
                              je(a, r, i, o, l, "throw", e);
                            }
                            o(void 0);
                          });
                        });
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })();
                  e();
                },
                [u],
              ),
              m().createElement(
                be(),
                {
                  sx: Pe(
                    { bgcolor: "#0f1115", minHeight: "100vh", color: "#fff" },
                    h,
                  ),
                },
                m().createElement(
                  le.Helmet,
                  null,
                  m().createElement("title", null, "Our Blog | Glocal LPO"),
                ),
                m().createElement(
                  be(),
                  {
                    component: "section",
                    sx: {
                      position: "relative",
                      pt: { xs: "140px", md: "280px" },
                      pb: { xs: 8, md: 12 },
                      minHeight: "550px",
                      display: "flex",
                      alignItems: "center",
                      backgroundImage:
                        "linear-gradient(to right, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.1) 100%), url(".concat(
                          Ee,
                          ")",
                        ),
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    },
                  },
                  m().createElement(
                    B(),
                    { maxWidth: "xl" },
                    m().createElement(
                      be(),
                      { sx: { maxWidth: "800px", textAlign: "left" } },
                      m().createElement(
                        we(),
                        {
                          sx: Pe(
                            {
                              color: Te,
                              fontSize: "14px",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: "2px",
                              mb: 2,
                            },
                            h,
                          ),
                        },
                        "INSIGHTS & ARTICLES /",
                      ),
                      m().createElement(
                        we(),
                        {
                          variant: "h1",
                          sx: Pe(
                            {
                              fontSize: { xs: "48px", md: "84px" },
                              fontWeight: 800,
                              lineHeight: 1,
                              color: "#fff",
                              mb: 3,
                            },
                            h,
                          ),
                        },
                        "Expert Insights ",
                        m().createElement("br", null),
                        "For Global ",
                        m().createElement("br", null),
                        "Success.",
                      ),
                      m().createElement(
                        we(),
                        {
                          sx: Pe(
                            {
                              fontSize: { xs: "18px", md: "24px" },
                              color: "rgba(255,255,255,0.7)",
                              fontWeight: 400,
                              lineHeight: 1.5,
                              maxWidth: "600px",
                            },
                            h,
                          ),
                        },
                        "Strategies and updates on business support, ",
                        m().createElement("br", null),
                        "legal operations, and back-office efficiency.",
                      ),
                    ),
                  ),
                ),
                m().createElement(
                  be(),
                  { sx: { py: 12, bgcolor: "#0f1115" } },
                  m().createElement(
                    B(),
                    { maxWidth: "xl" },
                    i &&
                      m().createElement(
                        we(),
                        {
                          sx: {
                            color: "rgba(255,255,255,0.7)",
                            textAlign: "center",
                          },
                        },
                        "Loading blog posts...",
                      ),
                    l &&
                      m().createElement(
                        we(),
                        { sx: { color: "#ff6b6b", textAlign: "center" } },
                        l,
                      ),
                    !i &&
                      !l &&
                      0 === t.length &&
                      m().createElement(
                        we(),
                        {
                          sx: {
                            color: "rgba(255,255,255,0.7)",
                            textAlign: "center",
                          },
                        },
                        "No blog posts found.",
                      ),
                    !i &&
                      !l &&
                      t.length > 0 &&
                      m().createElement(
                        m().Fragment,
                        null,
                        m().createElement(
                          q(),
                          { container: !0, spacing: 4 },
                          t.map(function (e) {
                            var t,
                              n,
                              r,
                              i = Ie(
                                (null == e ||
                                null === (t = e.title) ||
                                void 0 === t
                                  ? void 0
                                  : t.rendered) || "Untitled",
                              ),
                              a = (function () {
                                var e = Ie(
                                  arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                    ? arguments[0]
                                    : "",
                                ).trim();
                                return e
                                  ? e.length > 140
                                    ? "".concat(e.slice(0, 140), "...")
                                    : e
                                  : "Read the full article for details.";
                              })(
                                (null == e ||
                                null === (n = e.excerpt) ||
                                void 0 === n
                                  ? void 0
                                  : n.rendered) || "",
                              ),
                              o =
                                (null == e ||
                                null === (r = e._embedded) ||
                                void 0 === r ||
                                null === (r = r["wp:term"]) ||
                                void 0 === r ||
                                null === (r = r[0]) ||
                                void 0 === r ||
                                null === (r = r[0]) ||
                                void 0 === r
                                  ? void 0
                                  : r.name) || "Article",
                              l = (function (e) {
                                var t;
                                return (
                                  (null == e ||
                                  null === (t = e._embedded) ||
                                  void 0 === t ||
                                  null === (t = t["wp:featuredmedia"]) ||
                                  void 0 === t ||
                                  null === (t = t[0]) ||
                                  void 0 === t
                                    ? void 0
                                    : t.source_url) || Ee
                                );
                              })(e);
                            return m().createElement(
                              q(),
                              { size: { xs: 12, sm: 6, md: 4 }, key: e.id },
                              m().createElement(
                                me(),
                                {
                                  sx: {
                                    bgcolor: "#1a1d24",
                                    borderRadius: "0px",
                                    border: "1px solid rgba(255,255,255,0.05)",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                  },
                                },
                                m().createElement(
                                  ge(),
                                  { sx: { p: 4, flexGrow: 1 } },
                                  m().createElement(
                                    we(),
                                    {
                                      sx: Pe(
                                        {
                                          color: Te,
                                          fontWeight: 700,
                                          fontSize: "0.75rem",
                                          mb: 3,
                                          pb: 1,
                                          textTransform: "uppercase",
                                          letterSpacing: "1.5px",
                                          borderBottom: "2px solid ".concat(Te),
                                          display: "inline-block",
                                        },
                                        h,
                                      ),
                                    },
                                    o,
                                  ),
                                  m().createElement(he(), {
                                    component: "img",
                                    image: l,
                                    alt: i,
                                    sx: { filter: "brightness(0.8)", mb: 3 },
                                  }),
                                  m().createElement(
                                    we(),
                                    {
                                      variant: "h5",
                                      sx: Pe(
                                        {
                                          fontWeight: 700,
                                          color: "#fff",
                                          mb: 2,
                                          height: "64px",
                                          overflow: "hidden",
                                          display: "-webkit-box",
                                          WebkitLineClamp: 2,
                                          WebkitBoxOrient: "vertical",
                                        },
                                        h,
                                      ),
                                    },
                                    i,
                                  ),
                                  m().createElement(
                                    we(),
                                    {
                                      sx: Pe(
                                        {
                                          color: "rgba(255,255,255,0.5)",
                                          fontSize: "0.9rem",
                                          mb: 2,
                                          height: "64px",
                                          overflow: "hidden",
                                          display: "-webkit-box",
                                          WebkitLineClamp: 3,
                                          WebkitBoxOrient: "vertical",
                                        },
                                        h,
                                      ),
                                    },
                                    a,
                                  ),
                                  m().createElement(
                                    we(),
                                    {
                                      component: j.Link,
                                      to: "/blog/".concat(e.slug),
                                      sx: {
                                        mt: "auto",
                                        color: "#fff",
                                        fontSize: "0.8rem",
                                        fontWeight: 700,
                                        textDecoration: "underline",
                                        display: "inline-block",
                                        transition: "0.3s",
                                        "&:hover": { color: Te },
                                      },
                                    },
                                    "READ FULL ARTICLE",
                                  ),
                                ),
                              ),
                            );
                          }),
                        ),
                        m().createElement(
                          be(),
                          {
                            sx: {
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: 2,
                              mt: 6,
                            },
                          },
                          m().createElement(
                            ue(),
                            {
                              variant: "outlined",
                              onClick: function () {
                                return d(function (e) {
                                  return Math.max(1, e - 1);
                                });
                              },
                              disabled: u <= 1,
                              sx: {
                                borderColor: "rgba(255,255,255,0.25)",
                                color: "#fff",
                              },
                            },
                            "Previous",
                          ),
                          m().createElement(
                            we(),
                            {
                              sx: {
                                color: "rgba(255,255,255,0.7)",
                                fontWeight: 600,
                              },
                            },
                            "Page ",
                            u,
                            g ? " of ".concat(g) : "",
                          ),
                          m().createElement(
                            ue(),
                            {
                              variant: "outlined",
                              onClick: function () {
                                return d(function (e) {
                                  return e + 1;
                                });
                              },
                              disabled: !!g && u >= g,
                              sx: {
                                borderColor: "rgba(255,255,255,0.25)",
                                color: "#fff",
                              },
                            },
                            "Next",
                          ),
                        ),
                      ),
                  ),
                ),
              )
            );
          },
          Le = require("@mui/material/Avatar");
        var ze = n.n(Le);
        function Ne(e) {
          return (
            (Ne =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            Ne(e)
          );
        }
        function Me(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function Fe(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Me(Object(n), !0).forEach(function (t) {
                  We(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : Me(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        }
        function We(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != Ne(e) || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != Ne(n)) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return String(e);
              })(e);
              return "symbol" == Ne(t) ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function Re() {
          var e,
            t,
            n = "function" == typeof Symbol ? Symbol : {},
            r = n.iterator || "@@iterator",
            i = n.toStringTag || "@@toStringTag";
          function a(n, r, i, a) {
            var s = r && r.prototype instanceof l ? r : l,
              c = Object.create(s.prototype);
            return (
              He(
                c,
                "_invoke",
                (function (n, r, i) {
                  var a,
                    l,
                    s,
                    c = 0,
                    u = i || [],
                    d = !1,
                    m = {
                      p: 0,
                      n: 0,
                      v: e,
                      a: p,
                      f: p.bind(e, 4),
                      d: function (t, n) {
                        return ((a = t), (l = 0), (s = e), (m.n = n), o);
                      },
                    };
                  function p(n, r) {
                    for (
                      l = n, s = r, t = 0;
                      !d && c && !i && t < u.length;
                      t++
                    ) {
                      var i,
                        a = u[t],
                        p = m.p,
                        g = a[2];
                      n > 3
                        ? (i = g === r) &&
                          ((s = a[(l = a[4]) ? 5 : ((l = 3), 3)]),
                          (a[4] = a[5] = e))
                        : a[0] <= p &&
                          ((i = n < 2 && p < a[1])
                            ? ((l = 0), (m.v = r), (m.n = a[1]))
                            : p < g &&
                              (i = n < 3 || a[0] > r || r > g) &&
                              ((a[4] = n), (a[5] = r), (m.n = g), (l = 0)));
                    }
                    if (i || n > 1) return o;
                    throw ((d = !0), r);
                  }
                  return function (i, u, g) {
                    if (c > 1) throw TypeError("Generator is already running");
                    for (
                      d && 1 === u && p(u, g), l = u, s = g;
                      (t = l < 2 ? e : s) || !d;
                    ) {
                      a ||
                        (l
                          ? l < 3
                            ? (l > 1 && (m.n = -1), p(l, s))
                            : (m.n = s)
                          : (m.v = s));
                      try {
                        if (((c = 2), a)) {
                          if ((l || (i = "next"), (t = a[i]))) {
                            if (!(t = t.call(a, s)))
                              throw TypeError(
                                "iterator result is not an object",
                              );
                            if (!t.done) return t;
                            ((s = t.value), l < 2 && (l = 0));
                          } else
                            (1 === l && (t = a.return) && t.call(a),
                              l < 2 &&
                                ((s = TypeError(
                                  "The iterator does not provide a '" +
                                    i +
                                    "' method",
                                )),
                                (l = 1)));
                          a = e;
                        } else if ((t = (d = m.n < 0) ? s : n.call(r, m)) !== o)
                          break;
                      } catch (t) {
                        ((a = e), (l = 1), (s = t));
                      } finally {
                        c = 1;
                      }
                    }
                    return { value: t, done: d };
                  };
                })(n, i, a),
                !0,
              ),
              c
            );
          }
          var o = {};
          function l() {}
          function s() {}
          function c() {}
          t = Object.getPrototypeOf;
          var u = [][r]
              ? t(t([][r]()))
              : (He((t = {}), r, function () {
                  return this;
                }),
                t),
            d = (c.prototype = l.prototype = Object.create(u));
          function m(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, c)
                : ((e.__proto__ = c), He(e, i, "GeneratorFunction")),
              (e.prototype = Object.create(d)),
              e
            );
          }
          return (
            (s.prototype = c),
            He(d, "constructor", c),
            He(c, "constructor", s),
            (s.displayName = "GeneratorFunction"),
            He(c, i, "GeneratorFunction"),
            He(d),
            He(d, i, "Generator"),
            He(d, r, function () {
              return this;
            }),
            He(d, "toString", function () {
              return "[object Generator]";
            }),
            (Re = function () {
              return { w: a, m };
            })()
          );
        }
        function He(e, t, n, r) {
          var i = Object.defineProperty;
          try {
            i({}, "", {});
          } catch (e) {
            i = 0;
          }
          ((He = function (e, t, n, r) {
            function a(t, n) {
              He(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            }
            t
              ? i
                ? i(e, t, {
                    value: n,
                    enumerable: !r,
                    configurable: !r,
                    writable: !r,
                  })
                : (e[t] = n)
              : (a("next", 0), a("throw", 1), a("return", 2));
          }),
            He(e, t, n, r));
        }
        function Be(e, t, n, r, i, a, o) {
          try {
            var l = e[a](o),
              s = l.value;
          } catch (e) {
            return void n(e);
          }
          l.done ? t(s) : Promise.resolve(s).then(r, i);
        }
        function Ge(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  i,
                  a,
                  o,
                  l = [],
                  s = !0,
                  c = !1;
                try {
                  if (((a = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = a.call(n)).done) &&
                      (l.push(r.value), l.length !== t);
                      s = !0
                    );
                } catch (e) {
                  ((c = !0), (i = e));
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((o = n.return()), Object(o) !== o)
                    )
                      return;
                  } finally {
                    if (c) throw i;
                  }
                }
                return l;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return qe(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? qe(e, t)
                      : void 0
                );
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        function qe(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var Je = "#f5c074",
          Ue = function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            if ("undefined" == typeof window) return e.replace(/<[^>]+>/g, "");
            var t = document.createElement("textarea");
            return ((t.innerHTML = e), t.value.replace(/<[^>]+>/g, ""));
          };
        const Ve = function () {
          var e,
            t,
            n,
            r,
            i,
            a,
            o,
            l = (0, j.useParams)().slug,
            s = Ge(m().useState(null), 2),
            c = s[0],
            u = s[1],
            d = Ge(m().useState(!0), 2),
            p = d[0],
            g = d[1],
            f = Ge(m().useState(null), 2),
            h = f[0],
            y = f[1],
            b = { fontFamily: "'Poppins', sans-serif" };
          if (
            (m().useEffect(
              function () {
                var e = (function () {
                  var e,
                    t =
                      ((e = Re().m(function e() {
                        var t, n, r;
                        return Re().w(
                          function (e) {
                            for (;;)
                              switch ((e.p = e.n)) {
                                case 0:
                                  return (
                                    (e.p = 0),
                                    (e.n = 1),
                                    fetch(
                                      ""
                                        .concat(
                                          "https://beige-starling-331798.hostingersite.com",
                                          "/wp-json/wp/v2/posts?slug=",
                                        )
                                        .concat(l, "&_embed=1"),
                                    )
                                  );
                                case 1:
                                  if ((t = e.v).ok) {
                                    e.n = 2;
                                    break;
                                  }
                                  throw new Error("Failed to load post");
                                case 2:
                                  return ((e.n = 3), t.json());
                                case 3:
                                  if ((n = e.v).length) {
                                    e.n = 4;
                                    break;
                                  }
                                  throw new Error("Post not found");
                                case 4:
                                  (u(n[0]), (e.n = 6));
                                  break;
                                case 5:
                                  ((e.p = 5), (r = e.v), y(r.message));
                                case 6:
                                  return ((e.p = 6), g(!1), e.f(6));
                                case 7:
                                  return e.a(2);
                              }
                          },
                          e,
                          null,
                          [[0, 5, 6, 7]],
                        );
                      })),
                      function () {
                        var t = this,
                          n = arguments;
                        return new Promise(function (r, i) {
                          var a = e.apply(t, n);
                          function o(e) {
                            Be(a, r, i, o, l, "next", e);
                          }
                          function l(e) {
                            Be(a, r, i, o, l, "throw", e);
                          }
                          o(void 0);
                        });
                      });
                  return function () {
                    return t.apply(this, arguments);
                  };
                })();
                e();
              },
              [l],
            ),
            p)
          )
            return m().createElement(
              be(),
              {
                sx: {
                  bgcolor: "#0f1115",
                  minHeight: "100vh",
                  color: "#fff",
                  pt: "180px",
                },
              },
              m().createElement(
                B(),
                null,
                m().createElement(we(), null, "Loading article..."),
              ),
            );
          if (h || !c)
            return m().createElement(
              be(),
              {
                sx: {
                  bgcolor: "#0f1115",
                  minHeight: "100vh",
                  color: "#fff",
                  pt: "180px",
                },
              },
              m().createElement(
                B(),
                null,
                m().createElement(
                  we(),
                  { sx: { color: "#ff6b6b", mb: 2 } },
                  h || "Post not found",
                ),
                m().createElement(
                  we(),
                  {
                    component: j.Link,
                    to: "/blog",
                    sx: { color: Je, textDecoration: "underline" },
                  },
                  "Back to all articles",
                ),
              ),
            );
          var v,
            w = Ue(
              (null == c || null === (e = c.title) || void 0 === e
                ? void 0
                : e.rendered) || "Untitled",
            ),
            E =
              (null == c ||
              null === (t = c._embedded) ||
              void 0 === t ||
              null === (t = t["wp:term"]) ||
              void 0 === t ||
              null === (t = t[0]) ||
              void 0 === t ||
              null === (t = t[0]) ||
              void 0 === t
                ? void 0
                : t.name) || "Article",
            x =
              (null == c ||
              null === (n = c._embedded) ||
              void 0 === n ||
              null === (n = n.author) ||
              void 0 === n ||
              null === (n = n[0]) ||
              void 0 === n
                ? void 0
                : n.name) || "Glocal LPO Team",
            S =
              null != c && c.date
                ? ((v = c.date),
                  new Date(v).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }))
                : "",
            P =
              (null == c || null === (r = c.yoast_head_json) || void 0 === r
                ? void 0
                : r.title) || "".concat(w, " | Glocal LPO Blog"),
            k =
              (null == c || null === (i = c.yoast_head_json) || void 0 === i
                ? void 0
                : i.description) ||
              Ue(
                (null == c || null === (a = c.excerpt) || void 0 === a
                  ? void 0
                  : a.rendered) || "",
              ),
            O = (function (e) {
              var t;
              return (
                (null == e ||
                null === (t = e._embedded) ||
                void 0 === t ||
                null === (t = t["wp:featuredmedia"]) ||
                void 0 === t ||
                null === (t = t[0]) ||
                void 0 === t
                  ? void 0
                  : t.source_url) || Ee
              );
            })(c);
          return m().createElement(
            be(),
            {
              sx: Fe(
                { bgcolor: "#0f1115", minHeight: "100vh", color: "#fff" },
                b,
              ),
            },
            m().createElement(
              le.Helmet,
              null,
              m().createElement("title", null, P),
              k
                ? m().createElement("meta", { name: "description", content: k })
                : null,
            ),
            m().createElement(
              be(),
              {
                component: "section",
                sx: {
                  position: "relative",
                  pt: { xs: "140px", md: "280px" },
                  pb: { xs: 8, md: 10 },
                  minHeight: "450px",
                  display: "flex",
                  alignItems: "center",
                  backgroundImage:
                    "linear-gradient(to right, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.2) 100%), url(".concat(
                      O,
                      ")",
                    ),
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                },
              },
              m().createElement(
                B(),
                { maxWidth: "xl" },
                m().createElement(
                  be(),
                  { sx: { maxWidth: "900px" } },
                  m().createElement(
                    we(),
                    {
                      sx: Fe(
                        {
                          color: Je,
                          fontSize: "14px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "2px",
                          mb: 2,
                        },
                        b,
                      ),
                    },
                    E,
                    " /",
                  ),
                  m().createElement(
                    we(),
                    {
                      variant: "h1",
                      sx: Fe(
                        {
                          fontSize: { xs: "36px", md: "64px" },
                          fontWeight: 800,
                          lineHeight: 1.1,
                          color: "#fff",
                          mb: 4,
                        },
                        b,
                      ),
                    },
                    w,
                  ),
                  m().createElement(
                    be(),
                    { sx: { display: "flex", alignItems: "center" } },
                    m().createElement(
                      ze(),
                      {
                        sx: {
                          bgcolor: Je,
                          mr: 2,
                          fontWeight: 700,
                          display: "none",
                        },
                      },
                      (x || "G").charAt(0).toUpperCase(),
                    ),
                    m().createElement(
                      be(),
                      null,
                      m().createElement(
                        we(),
                        {
                          sx: Fe(
                            {
                              display: "none",
                              fontWeight: 600,
                              fontSize: "1rem",
                            },
                            b,
                          ),
                        },
                        x,
                      ),
                      m().createElement(
                        we(),
                        {
                          sx: Fe(
                            {
                              color: "rgba(255,255,255,0.6)",
                              fontSize: "0.85rem",
                            },
                            b,
                          ),
                        },
                        S,
                      ),
                    ),
                  ),
                ),
              ),
            ),
            m().createElement(
              be(),
              { sx: { py: 10, bgcolor: "#0f1115" } },
              m().createElement(
                B(),
                { maxWidth: "md" },
                m().createElement(be(), {
                  sx: {
                    "& p": {
                      mb: 4,
                      fontSize: "1.1rem",
                      lineHeight: 1.9,
                      color: "rgba(255,255,255,0.7)",
                    },
                    "& h2": {
                      mt: 8,
                      mb: 3,
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "#fff",
                    },
                    "& h3, & h4, & h5, & h6": { color: "#fff" },
                    "& a": { color: Je },
                    "& img": { maxWidth: "100%", height: "auto" },
                  },
                  dangerouslySetInnerHTML: {
                    __html:
                      (null == c || null === (o = c.content) || void 0 === o
                        ? void 0
                        : o.rendered) || "",
                  },
                }),
                m().createElement(
                  be(),
                  {
                    sx: {
                      mt: 10,
                      pt: 6,
                      borderTop: "1px solid rgba(255,255,255,0.1)",
                      textAlign: "center",
                    },
                  },
                  m().createElement(
                    we(),
                    {
                      component: j.Link,
                      to: "/blog",
                      sx: {
                        color: Je,
                        fontWeight: 700,
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        letterSpacing: "1px",
                        "&:hover": { textDecoration: "underline" },
                      },
                    },
                    "← BACK TO ALL ARTICLES",
                  ),
                ),
              ),
            ),
          );
        };
        var Ye = _()({
            resolved: {},
            chunkName: function () {
              return "containers-Home";
            },
            isReady: function (e) {
              var t = this.resolve(e);
              return !0 === this.resolved[t] && !!n.m[t];
            },
            importAsync: function () {
              return n.e(649).then(n.bind(n, 9667));
            },
            requireAsync: function (e) {
              var t = this,
                n = this.resolve(e);
              return (
                (this.resolved[n] = !1),
                this.importAsync(e).then(function (e) {
                  return ((t.resolved[n] = !0), e);
                })
              );
            },
            requireSync: function (e) {
              var t = this.resolve(e);
              return n(t);
            },
            resolve: function () {
              return 9667;
            },
          }),
          Ke = _()({
            resolved: {},
            chunkName: function () {
              return "containers-About";
            },
            isReady: function (e) {
              var t = this.resolve(e);
              return !0 === this.resolved[t] && !!n.m[t];
            },
            importAsync: function () {
              return n.e(611).then(n.bind(n, 6758));
            },
            requireAsync: function (e) {
              var t = this,
                n = this.resolve(e);
              return (
                (this.resolved[n] = !1),
                this.importAsync(e).then(function (e) {
                  return ((t.resolved[n] = !0), e);
                })
              );
            },
            requireSync: function (e) {
              var t = this.resolve(e);
              return n(t);
            },
            resolve: function () {
              return 6758;
            },
          }),
          Ze = _()({
            resolved: {},
            chunkName: function () {
              return "containers-Service";
            },
            isReady: function (e) {
              var t = this.resolve(e);
              return !0 === this.resolved[t] && !!n.m[t];
            },
            importAsync: function () {
              return n.e(749).then(n.bind(n, 4642));
            },
            requireAsync: function (e) {
              var t = this,
                n = this.resolve(e);
              return (
                (this.resolved[n] = !1),
                this.importAsync(e).then(function (e) {
                  return ((t.resolved[n] = !0), e);
                })
              );
            },
            requireSync: function (e) {
              var t = this.resolve(e);
              return n(t);
            },
            resolve: function () {
              return 4642;
            },
          }),
          Qe = _()({
            resolved: {},
            chunkName: function () {
              return "containers-ServiceDetails";
            },
            isReady: function (e) {
              var t = this.resolve(e);
              return !0 === this.resolved[t] && !!n.m[t];
            },
            importAsync: function () {
              return n.e(445).then(n.bind(n, 1415));
            },
            requireAsync: function (e) {
              var t = this,
                n = this.resolve(e);
              return (
                (this.resolved[n] = !1),
                this.importAsync(e).then(function (e) {
                  return ((t.resolved[n] = !0), e);
                })
              );
            },
            requireSync: function (e) {
              var t = this.resolve(e);
              return n(t);
            },
            resolve: function () {
              return 1415;
            },
          }),
          Xe = _()({
            resolved: {},
            chunkName: function () {
              return "containers-ContactUs";
            },
            isReady: function (e) {
              var t = this.resolve(e);
              return !0 === this.resolved[t] && !!n.m[t];
            },
            importAsync: function () {
              return n.e(724).then(n.bind(n, 1727));
            },
            requireAsync: function (e) {
              var t = this,
                n = this.resolve(e);
              return (
                (this.resolved[n] = !1),
                this.importAsync(e).then(function (e) {
                  return ((t.resolved[n] = !0), e);
                })
              );
            },
            requireSync: function (e) {
              var t = this.resolve(e);
              return n(t);
            },
            resolve: function () {
              return 1727;
            },
          }),
          $e = _()({
            resolved: {},
            chunkName: function () {
              return "containers-NotFound";
            },
            isReady: function (e) {
              var t = this.resolve(e);
              return !0 === this.resolved[t] && !!n.m[t];
            },
            importAsync: function () {
              return n.e(229).then(n.bind(n, 8248));
            },
            requireAsync: function (e) {
              var t = this,
                n = this.resolve(e);
              return (
                (this.resolved[n] = !1),
                this.importAsync(e).then(function (e) {
                  return ((t.resolved[n] = !0), e);
                })
              );
            },
            requireSync: function (e) {
              var t = this.resolve(e);
              return n(t);
            },
            resolve: function () {
              return 8248;
            },
          });
        A.gsap.registerPlugin(T());
        const et = function (e) {
          var t = e.helmetContext,
            n = (0, d.useRef)(null),
            r = (0, j.useLocation)().pathname,
            i = ["/personal-injury", "/bundle-offer", "/criminal-law"].includes(
              r,
            ),
            a = function () {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            };
          return (
            (0, d.useEffect)(
              function () {
                if ("undefined" != typeof window) {
                  var e = n.current;
                  e &&
                    (A.gsap.set(e, { autoAlpha: 0 }),
                    T().create({
                      trigger: document.body,
                      start: "top top",
                      end: "bottom bottom",
                      onUpdate: function (t) {
                        t.progress > 0.3
                          ? A.gsap.to(e, { autoAlpha: 1, duration: 0.3 })
                          : A.gsap.to(e, { autoAlpha: 0, duration: 0.3 });
                      },
                    }));
                }
              },
              [r],
            ),
            (0, d.useEffect)(
              function () {
                a();
              },
              [r],
            ),
            m().createElement(
              le.HelmetProvider,
              { context: t },
              !i && m().createElement(z.A, null),
              m().createElement(
                j.Routes,
                null,
                m().createElement(j.Route, {
                  path: M.J.home.href,
                  element: m().createElement(Ye, null),
                  exact: !0,
                }),
                m().createElement(j.Route, {
                  path: M.J.about.href,
                  element: m().createElement(Ke, null),
                  exact: !0,
                }),
                m().createElement(j.Route, {
                  path: M.J.services.href,
                  element: m().createElement(Ze, null),
                  exact: !0,
                }),
                m().createElement(j.Route, {
                  path: "/services/:id",
                  element: m().createElement(Qe, null),
                  exact: !0,
                }),
                m().createElement(j.Route, {
                  path: M.J["contact-us"].href,
                  element: m().createElement(Xe, null),
                  exact: !0,
                }),
                m().createElement(j.Route, {
                  path: "/thank-you",
                  element: m().createElement(Q, null),
                  exact: !0,
                }),
                m().createElement(j.Route, {
                  path: "/privacy-policy",
                  element: m().createElement(se, null),
                  exact: !0,
                }),
                m().createElement(j.Route, {
                  path: "/personal-injury",
                  element: m().createElement(F, null),
                  exact: !0,
                }),
                m().createElement(j.Route, {
                  path: "/bundle-offer",
                  element: m().createElement(W, null),
                  exact: !0,
                }),
                m().createElement(j.Route, {
                  path: "/criminal-law",
                  element: m().createElement(R, null),
                  exact: !0,
                }),
                m().createElement(j.Route, {
                  path: "/blog",
                  element: m().createElement(_e, null),
                  exact: !0,
                }),
                m().createElement(j.Route, {
                  path: "/blog/:slug",
                  element: m().createElement(Ve, null),
                  exact: !0,
                }),
                m().createElement(j.Route, {
                  path: "*",
                  element: m().createElement($e, null),
                }),
              ),
              !i && m().createElement(N.A, null),
              m().createElement(
                "div",
                {
                  className: "App-module__backToTop--n2Gr3",
                  onClick: a,
                  ref: n,
                },
                m().createElement(L.Rb, null),
              ),
            )
          );
        };
        var tt = n(5451);
        const nt = require("@emotion/cache");
        var rt = n.n(nt),
          it = n(5219),
          at = new it.TransactionalEmailsApi();
        at.setApiKey(
          it.TransactionalEmailsApiApiKeys.apiKey,
          process.env.SENDINBLUE_API_KEY || "",
        );
        var ot = o().Router(),
          lt = function (e) {
            return '\n\t\t<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">\n <head>\n  <meta charset="UTF-8">\n  <meta content="width=device-width, initial-scale=1" name="viewport">\n  <meta name="x-apple-disable-message-reformatting">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta content="telephone=no" name="format-detection">\n  <title>New Message</title>\x3c!--[if (mso 16)]>\n    <style type="text/css">\n    a {text-decoration: none;}\n    </style>\n    <![endif]--\x3e\x3c!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--\x3e\x3c!--[if gte mso 9]>\n<noscript>\n         <xml>\n           <o:OfficeDocumentSettings>\n           <o:AllowPNG></o:AllowPNG>\n           <o:PixelsPerInch>96</o:PixelsPerInch>\n           </o:OfficeDocumentSettings>\n         </xml>\n      </noscript>\n<![endif]--\x3e\x3c!--[if !mso]>\x3c!-- --\x3e\n  <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet">\n  <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet">\x3c!--<![endif]--\x3e\x3c!--[if mso]><xml>\n    <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">\n      <w:DontUseAdvancedTypographyReadingMail></w:DontUseAdvancedTypographyReadingMail>\n    </w:WordDocument>\n    </xml><![endif]--\x3e\n  <style type="text/css">#outlook a {\n\tpadding:0;\n}\n.ch {\n\tmso-style-priority:100!important;\n\ttext-decoration:none!important;\n}\na[x-apple-data-detectors] {\n\tcolor:inherit!important;\n\ttext-decoration:none!important;\n\tfont-size:inherit!important;\n\tfont-family:inherit!important;\n\tfont-weight:inherit!important;\n\tline-height:inherit!important;\n}\n.bn {\n\tdisplay:none;\n\tfloat:left;\n\toverflow:hidden;\n\twidth:0;\n\tmax-height:0;\n\tline-height:0;\n\tmso-hide:all;\n}\n@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left }    .bq td a { font-size:12px!important } .cp p, .cp ul li, .cp ol li, .cp a { font-size:12px!important } .co p, .co ul li, .co ol li, .co a { font-size:16px!important } .cn p, .cn ul li, .cn ol li, .cn a { font-size:12px!important }  *[class="gmail-fix"] { display:none!important } .ck, .ck h1, .ck h2, .ck h3 { text-align:center!important }  .cl, .cl h1, .cl h2, .cl h3 { text-align:left!important } .cj img, .ck img, .cl img { display:inline!important }   .ce table, .cf, .cg { width:100%!important } .cb table, .cc table, .cd table, .cb, .cd, .cc { width:100%!important; max-width:600px!important }  .adapt-img { width:100%!important; height:auto!important }  .by { padding-right:0!important }    .bu { padding-bottom:20px!important } .bs, .bt { display:none!important }     .bq td { width:1%!important } table.bp, .esd-block-html table { width:auto!important } table.bo { display:inline-block!important } table.bo td { display:inline-block!important }                   .v { padding-right:20px!important } .u { padding-left:20px!important }                     }\n@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }</style>\n </head>\n <body data-new-gr-c-s-loaded="14.1233.0" style="width:100%;font-family:\'Work Sans\', Arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">\n  <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FAFAFA">\x3c!--[if gte mso 9]>\n\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">\n\t\t\t\t<v:fill type="tile" color="#fafafa"></v:fill>\n\t\t\t</v:background>\n\t\t<![endif]--\x3e\n   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">\n     <tr>\n      <td valign="top" style="padding:0;Margin:0">\n       <table cellpadding="0" cellspacing="0" class="cc" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">\n         <tr>\n          <td align="center" style="padding:0;Margin:0">\n           <table class="cp" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" bgcolor="#00000000" role="none">\n             <tr>\n              <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px">\n               </td>\n             </tr>\n           </table></td>\n         </tr>\n       </table>\n       <table class="cb" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">\n         <tr>\n          <td align="center" style="padding:0;Margin:0">\n           <table class="co" cellspacing="0" cellpadding="0" bgcolor="#070c1e" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#070c1e;width:600px" role="none">\n             <tr>\n              <td class="v u" align="left" style="padding:40px;Margin:0">\n               <table cellspacing="0" cellpadding="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">\n                 <tr>\n                  <td class="by" valign="top" align="center" style="padding:0;Margin:0;width:520px">\n                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">\n                     <tr>\n                      <td align="left" class="cl" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://glocallpo.com/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#00356C;font-size:14px"><img src="https://www.glocallpo.com/assets/emailer/logo.png" alt="Glocal LPO" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="55" title="Glocal LPO"></a></td>\n                     </tr>\n                   </table></td>\n                 </tr>\n               </table></td>\n             </tr>\n             <tr>\n              <td class="v u" align="left" style="padding:0;Margin:0;padding-top:30px;padding-left:40px;padding-right:40px">\x3c!--[if mso]><table style="width:520px" cellpadding="0" cellspacing="0"><tr><td style="width:300px" valign="top"><![endif]--\x3e\n               <table cellspacing="0" cellpadding="0" align="left" class="cf" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">\n                 <tr>\n                  <td class="by bu" valign="top" align="center" style="padding:0;Margin:0;width:300px">\n                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">\n                     <tr>\n                      <td align="left" style="padding:0;Margin:0"><h1 style="Margin:0;line-height:43.2px;mso-line-height-rule:exactly;font-family:Marcellus, Arial, serif;font-size:36px;font-style:normal;font-weight:normal;color:#fff8f2">Thanks for Reaching Out.</h1></td>\n                     </tr>\n                   </table></td>\n                 </tr>\n               </table>\x3c!--[if mso]></td><td style="width:20px"></td><td style="width:200px" valign="top"><![endif]--\x3e\n               <table cellpadding="0" cellspacing="0" class="cg" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">\n                 <tr class="bs">\n                  <td align="left" style="padding:0;Margin:0;width:200px">\n                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">\n                     <tr>\n                      <td align="center" height="40" style="padding:0;Margin:0"></td>\n                     </tr>\n                   </table></td>\n                 </tr>\n               </table>\x3c!--[if mso]></td></tr></table><![endif]--\x3e</td>\n             </tr>\n             <tr class="bs">\n              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:40px;padding-right:40px">\n               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">\n                 <tr>\n                  <td align="center" valign="top" style="padding:0;Margin:0;width:520px">\n                   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-left:2px solid #433636" role="presentation">\n                     <tr>\n                      <td align="center" height="50" style="padding:0;Margin:0"></td>\n                     </tr>\n                   </table></td>\n                 </tr>\n               </table></td>\n             </tr>\n             <tr>\n              <td class="v u" align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px">\n               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">\n                 <tr>\n                  <td class="by bu" valign="top" align="center" style="padding:0;Margin:0;width:520px">\n                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">\n                     <tr>\n                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:\'Work Sans\', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px"><strong>Dear '.concat(
              e,
              ',</strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:\'Work Sans\', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px"><br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:\'Work Sans\', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px">Thank you for submitting your inquiry! We\'ve received your message and one of our team members will be in touch with you shortly to discuss your needs.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:\'Work Sans\', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px"><br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:\'Work Sans\', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px">In the meantime, feel free to explore our services, and if you have any urgent questions, don\'t hesitate to reach out.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:\'Work Sans\', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px"><br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:\'Work Sans\', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px">We look forward to connecting with you soon!</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:\'Work Sans\', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px"><br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:\'Work Sans\', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px">Best regards,</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:\'Work Sans\', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px">The Glocal LPO Team<strong></strong></p></td>\n                     </tr>\n                   </table></td>\n                 </tr>\n               </table></td>\n             </tr>\n           </table></td>\n         </tr>\n       </table>\n       <table cellpadding="0" cellspacing="0" class="cb" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">\n         <tr>\n          <td align="center" style="padding:0;Margin:0">\n           <table bgcolor="#070c1e" class="co" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#070c1e;width:600px" role="none">\n             <tr>\n              <td class="v u" align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:40px;padding-right:40px">\n               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">\n                 <tr>\n                  <td align="center" valign="top" style="padding:0;Margin:0;width:520px">\n                   <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#dec4a5" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#dec4a5;border-radius:20px 20px 0px 0px" role="presentation">\n                     <tr>\n                      <td align="center" class="ck" style="padding:0;Margin:0;padding-bottom:5px"><h2 style="Margin:0;line-height:28.8px;mso-line-height-rule:exactly;font-family:Marcellus, Arial, serif;font-size:24px;font-style:normal;font-weight:normal;color:#070c1e"><br></h2><h2 style="Margin:0;line-height:28.8px;mso-line-height-rule:exactly;font-family:Marcellus, Arial, serif;font-size:24px;font-style:normal;font-weight:normal;color:#070c1e">Glocal LPO</h2></td>\n                     </tr>\n                     <tr>\n                      <td align="center" style="padding:0;Margin:0;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:\'Work Sans\', Arial, sans-serif;line-height:21px;color:#433636;font-size:14px">Think Global, Work Local.</p></td>\n                     </tr>\n                   </table></td>\n                 </tr>\n               </table></td>\n             </tr>\n           </table></td>\n         </tr>\n       </table>\n       <table class="cd" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">\n         <tr>\n          <td align="center" style="padding:0;Margin:0">\n           <table class="cn" cellspacing="0" cellpadding="0" bgcolor="#433636" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#433636;width:600px" role="none">\n             <tr>\n              <td class="v u" align="left" style="padding:0;Margin:0;padding-left:40px;padding-right:40px">\n               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">\n                 <tr>\n                  <td align="center" valign="top" style="padding:0;Margin:0;width:520px">\n                   <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#dec4a5" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#dec4a5;border-radius:0px 0px 20px 20px" role="presentation">\n                     <tr>\n                      <td style="padding:0;Margin:0">\n                       <table cellpadding="0" cellspacing="0" width="100%" class="bq" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">\n                         <tr class="links-images-left">\n                          <td align="center" valign="top" width="100%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:20px;padding-bottom:5px;border:0" id="esd-menu-id-0"><a target="_blank" href="mailto:info@glocallpo.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:\'Work Sans\', Arial, sans-serif;color:#433636;font-size:12px"><img src="https://www.glocallpo.com/assets/emailer/envelope.png" alt="info@glocallpo.com" title="info@glocallpo.com" align="absmiddle" width="16" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-right:5px;vertical-align:middle">info@glocallpo.com</a></td>\n                         </tr>\n                       </table></td>\n                     </tr>\n                     <tr>\n                      <td style="padding:0;Margin:0">\n                       <table cellpadding="0" cellspacing="0" width="100%" class="bq" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">\n                         <tr class="links-images-left">\n                          <td align="center" valign="top" width="100%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:20px;border:0" id="esd-menu-id-1"><a target="_blank" href="tel:+16504072112" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:\'Work Sans\', Arial, sans-serif;color:#433636;font-size:12px"><img src="https://www.glocallpo.com/assets/emailer/mobilebutton.png" alt="+1 (650) 407 2112" title="+1 (650) 407 2112" align="absmiddle" width="16" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-right:5px;vertical-align:middle">+1 (650) 407 2112</a></td>\n                         </tr>\n                       </table></td>\n                     </tr>\n                     <tr>\n                      <td align="center" style="padding:0;Margin:0;padding-bottom:25px;font-size:0">\n                       <table cellpadding="0" cellspacing="0" class="bp bo" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">\n                         <tr>\n                          <td align="center" valign="top" style="padding:0;Margin:0;padding-right:15px"><a target="_blank" href="https://www.instagram.com/glocallpo/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#DCE8F3;font-size:12px"><img src="https://www.glocallpo.com/assets/emailer/instagram-circle-colored.png" alt="Ig" title="Instagram" width="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>\n                          <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://www.linkedin.com/company/glocal-lpo/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#DCE8F3;font-size:12px"><img src="https://www.glocallpo.com/assets/emailer/linkedin-circle-colored.png" alt="In" title="Linkedin" width="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>\n                         </tr>\n                       </table></td>\n                     </tr>\n                   </table></td>\n                 </tr>\n               </table></td>\n             </tr>\n           </table></td>\n         </tr>\n       </table>\n       <table cellpadding="0" cellspacing="0" class="cd" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">\n         <tr>\n          <td align="center" style="padding:0;Margin:0">\n           <table class="cn" cellspacing="0" cellpadding="0" bgcolor="#433636" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#433636;width:600px" role="none">\n             <tr>\n              <td align="left" style="Margin:0;padding-left:30px;padding-right:30px;padding-top:40px;padding-bottom:40px">\n               <table cellspacing="0" cellpadding="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">\n                 <tr>\n                  <td align="left" style="padding:0;Margin:0;width:540px">\n                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">\n                     <tr>\n                      <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:\'Work Sans\', Arial, sans-serif;line-height:18px;color:#DCE8F3;font-size:12px">B-73, Block B, Sector 57, Noida, Uttar Pradesh 201301, India</p></td>\n                     </tr>\n                     <tr>\n                      <td align="center" style="padding:0;Margin:0;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:\'Work Sans\', Arial, sans-serif;line-height:18px;color:#DCE8F3;font-size:12px">© Glocal LPO. All Rights Reserved.</p></td>\n                     </tr>\n                   </table></td>\n                 </tr>\n               </table></td>\n             </tr>\n           </table></td>\n         </tr>\n       </table>\n       <table cellpadding="0" cellspacing="0" class="cb" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">\n         <tr>\n          <td align="center" style="padding:0;Margin:0">\n           <table class="co" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" role="none">\n             <tr>\n              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:40px;padding-right:40px">\n               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">\n                 <tr>\n                  <td align="center" valign="top" style="padding:0;Margin:0;width:520px">\n                   <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">\n                     <tr>\n                      <td align="center" style="padding:0;Margin:0;display:none"></td>\n                     </tr>\n                   </table></td>\n                 </tr>\n               </table></td>\n             </tr>\n           </table></td>\n         </tr>\n       </table></td>\n     </tr>\n   </table>\n  </div>\n </body>\n</html>',
            );
          };
        (ot.post("/submit-form", function (e, t) {
          !(function (e, t) {
            var n = e.first_name,
              r = e.last_name,
              i = e.email,
              a = e.company,
              o = e.job_title,
              l = e.phone,
              s = e.service_info,
              c = e.page_url,
              u = new it.SendSmtpEmail();
            ((u.subject = "New Contact Query Received!"),
              (u.htmlContent =
                "\n\t\t<html>\n\t\t<body>\n\t\t\tDear Admin,<br /><br />\n\t\t\tAt the outset Glocal LPO has received a new contact enquiry. Please find the details below:<br />\n\t\t\tFirst Name: "
                  .concat(n, "<br />\n\t\t\tLast Name: ")
                  .concat(r, "<br />\n\t\t\tEmail: ")
                  .concat(i, "<br />\n\t\t\tCompany: ")
                  .concat(a, "<br />\n\t\t\tJob Title: ")
                  .concat(o, "<br />\n\t\t\tPhone: ")
                  .concat(l, "<br />\n\t\t\tService Info: ")
                  .concat(s, "<br />\n\t\t\tPage: ")
                  .concat(
                    c,
                    "<br /><br />\n\t\t\tRequest you to please get in touch as soon as possible.<br /><br />\n\t\t\tThank You.\n\t\t</body>\n\t\t</html>",
                  )),
              (u.sender = { email: "info@glocallpo.com", name: "Glocal LPO" }),
              (u.to = [{ email: "info@glocallpo.com", name: "Glocal LPO" }]),
              (u.replyTo = { email: i, name: "".concat(n, " ").concat(r) }));
            var d = new it.SendSmtpEmail();
            ((d.subject =
              "Thanks for Reaching Out - We'll Get Back to You Soon!"),
              (d.htmlContent = lt("".concat(n, " ").concat(r))),
              (d.sender = { email: "info@glocallpo.com", name: "Glocal LPO" }),
              (d.to = [{ email: i, name: "".concat(n, " ").concat(r) }]),
              (d.replyTo = { email: "info@glocallpo.com", name: "Glocal LPO" }),
              Promise.all([at.sendTransacEmail(u), at.sendTransacEmail(d)])
                .then(function () {
                  t.send({
                    success: !0,
                    message:
                      "Thanks for Reaching Out - We'll Get Back to You Soon!",
                  });
                })
                .catch(function () {
                  (t.status(500),
                    t.send({
                      success: !1,
                      message: "Sorry! Something went wrong.",
                    }));
                }));
          })(e.body, t);
        }),
          ot.post("/submit-small-form", function (e, t) {
            var n = e.body,
              r = n.name,
              i = n.email,
              a = n.time,
              o = n.timezone,
              l = n.platform,
              s = new it.SendSmtpEmail();
            ((s.subject = "New Contact Query Received!"),
              (s.htmlContent =
                "\n\t\t<html>\n\t\t<body>\n\t\t\tDear Admin,<br /><br />\n\t\t\tGlocal LPO has received a new request for scheduling a meeting with the client. Please find the details below:<br />\n\t\t\tName: "
                  .concat(r, "<br />\n\t\t\tEmail: ")
                  .concat(i, "<br />\n\t\t\tTime: ")
                  .concat(a, "<br />\n\t\t\tTimezone: ")
                  .concat(o, "<br />\n\t\t\tPlatform: ")
                  .concat(
                    l,
                    "<br /><br />\n\t\t\tRequest you to please get in touch as soon as possible.<br /><br />\n\t\t\tThank You.\n\t\t</body>\n\t\t</html>",
                  )),
              (s.sender = { email: "info@glocallpo.com", name: "Glocal LPO" }),
              (s.to = [{ email: "info@glocallpo.com", name: "Glocal LPO" }]),
              (s.replyTo = { email: i, name: r }));
            var c = new it.SendSmtpEmail();
            ((c.subject =
              "Thanks for Reaching Out - We'll Get Back to You Soon!"),
              (c.htmlContent = lt(r)),
              (c.sender = { email: "info@glocallpo.com", name: "Glocal LPO" }),
              (c.to = [{ email: i, name: r }]),
              (c.replyTo = { email: "info@glocallpo.com", name: "Glocal LPO" }),
              Promise.all([at.sendTransacEmail(s), at.sendTransacEmail(c)])
                .then(function () {
                  t.send({
                    success: !0,
                    message:
                      "Thanks for Reaching Out - We'll Get Back to You Soon!",
                  });
                })
                .catch(function () {
                  (t.status(500),
                    t.send({
                      success: !1,
                      message: "Sorry! Something went wrong.",
                    }));
                }));
          }));
        const st = ot;
        var ct = o()();
        if (
          (ct.use(u().urlencoded()),
          ct.use(u().json()),
          ct.use("/assets", o().static(s().join(__dirname, ""))),
          ct.use(o().static(s().resolve(__dirname, "public"))),
          ct.get("/sitemap.xml", function (e, t) {
            t.sendFile(s().join(__dirname, "sitemap.xml"));
          }),
          ct.get("/robots.txt", function (e, t) {
            t.sendFile(s().resolve(__dirname, "robots.txt"));
          }),
          ct.use("/api", st),
          ct.use(function (e, t) {
            var n = rt()({ key: "css" }),
              r = g()(n),
              i = r.extractCriticalToChunks,
              a = r.constructStyleTagsFromChunks,
              o = e.headers["user-agent"] || "",
              l = (0, E.getSelectorsByUserAgent)(o),
              c = s().resolve(
                process.cwd(),
                "build/public/loadable-stats.json",
              ),
              u = new x.ChunkExtractor({
                statsFile: c,
                entrypoints: ["client"],
              }),
              d = {},
              p = u.collectChunks(
                m().createElement(
                  tt.Y,
                  { value: l },
                  m().createElement(
                    w.CacheProvider,
                    { value: n },
                    m().createElement(
                      v.ThemeProvider,
                      { theme: C },
                      m().createElement(
                        b.StaticRouter,
                        { location: e.url },
                        m().createElement(h(), null),
                        m().createElement(et, { helmetContext: d }),
                      ),
                    ),
                  ),
                ),
              ),
              f = (0, y.renderToString)(p),
              S = d.helmet,
              P = a(i(f)),
              k = '\n    <!DOCTYPE html>\n    <html lang="en" '
                .concat(
                  S.htmlAttributes.toString(),
                  '>\n      <head>\n        <meta charset="utf-8">\n\t\t<meta name="google-site-verification" content="MfZYqA6YszOfmYIq5RiiniJOur7YksOt05bEORUhX_c" />\n\t\t\x3c!-- Google Tag Manager --\x3e\n<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':\nnew Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\n\'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,\'script\',\'dataLayer\',\'GTM-P6VW4CWD\');<\/script>\n\x3c!-- End Google Tag Manager --\x3e\n\x3c!-- Google tag (gtag.js) --\x3e\n<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17995078646"><\/script>\n<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag(\'js\', new Date());\n\n  gtag(\'config\', \'AW-17995078646\');\n<\/script>\n        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">\n\t\t\t\t<link rel="preconnect" href="https://fonts.googleapis.com" />\n        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n\t\t\t\t<link rel="preconnect" href="https://cdnjs.cloudflare.com" />\n\t\t\t\t<link href="https://fonts.googleapis.com/css2?family=Antonio:wght@700&family=Poppins:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet">\n\t\t\t\t<link rel="icon" type="image/png" href="/assets/favicon.png">\n\t\t\t\t<link\n\t\t\t\t\trel="stylesheet"\n\t\t\t\t\ttype="text/css"\n\t\t\t\t\tcharset="UTF-8"\n\t\t\t\t\thref="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"\n\t\t\t\t/>\n\t\t\t\t<link\n\t\t\t\t\trel="stylesheet"\n\t\t\t\t\ttype="text/css"\n\t\t\t\t\thref="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"\n\t\t\t\t/>\n\t\t\t\t',
                )
                .concat(
                  S.title.toString() || "<title>Glocal LPO</title>",
                  "\n\t\t\t\t",
                )
                .concat(S.meta.toString(), "\n\t\t\t\t")
                .concat(S.link.toString(), "\n\t\t\t\t")
                .concat(S.script.toString(), "\n\t\t\t\t")
                .concat(u.getLinkTags(), "\n\t\t\t\t")
                .concat(u.getStyleTags(), "\n\t\t\t\t")
                .concat(
                  P,
                  '\n      </head>\n      <body>\n\t  \x3c!-- Google Tag Manager (noscript) --\x3e\n<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P6VW4CWD"\nheight="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\n\x3c!-- End Google Tag Manager (noscript) --\x3e\n        <div id="root">',
                )
                .concat(
                  f,
                  '</div>\n\t\t\t\t<div id="menu-root"></div>\n\t\t\t\t<script>\n          window.__DEVICE_INFO__ = ',
                )
                .concat(JSON.stringify(l), ";\n        <\/script>\n\t\t\t\t")
                .concat(u.getScriptTags(), "\n      </body>\n    </html>\n  ");
            t.send(k);
          }),
          !process.env.VERCEL)
        ) {
          var ut = process.env.PORT || 3e3;
          ct.listen(ut, function () {
            console.log("Server is running on port ".concat(ut));
          });
        }
        const dt = ct;
      },
      4215(e, t, n) {
        n.d(t, {
          Rb: () => T,
          zp: () => u,
          ou: () => l,
          mj: () => M,
          ni: () => y,
          US: () => z,
          NZ: () => v,
          mo: () => W,
          pd: () => m,
          uu: () => E,
          qO: () => S,
          pf: () => d,
          V1: () => k,
          Es: () => f,
          BX: () => C,
          Gg: () => _,
          Um: () => A,
        });
        var r = n(2015),
          i = n.n(r),
          a = ["fill"];
        function o() {
          return (
            (o = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
            o.apply(null, arguments)
          );
        }
        function l(e) {
          var t = e.fill,
            n = void 0 === t ? "#CFB69A" : t,
            r = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                i = (function (e, t) {
                  if (null == e) return {};
                  var n = {};
                  for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                      if (-1 !== t.indexOf(r)) continue;
                      n[r] = e[r];
                    }
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                  ((n = a[r]),
                    -1 === t.indexOf(n) &&
                      {}.propertyIsEnumerable.call(e, n) &&
                      (i[n] = e[n]));
              }
              return i;
            })(e, a);
          return i().createElement(
            "svg",
            o(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: n,
                viewBox: "10.7371 10.8099 78.5047 78.3916",
              },
              r,
            ),
            i().createElement("path", {
              d: "M31.84,53a3,3,0,1,1,0-6H68.16a3,3,0,0,1,0,6Z",
            }),
            i().createElement("path", {
              d: "M54.83,41a3,3,0,0,1,0-4.24,3.06,3.06,0,0,1,4.29,0L70.27,47.86a3,3,0,0,1,0,4.28L59.12,63.28A3,3,0,0,1,54.83,59l9-9Z",
            }),
            i().createElement("path", {
              d: "M70.67,24a3,3,0,1,1,3.75-4.71c.65.52,1.28,1.06,1.88,1.57s1.18,1.11,1.78,1.71a3,3,0,1,1-4.29,4.22c-.46-.46-1-.94-1.52-1.46s-1.08-.91-1.6-1.33Zm8.41,9.83a3,3,0,0,1,1.17-4.08,3,3,0,0,1,4.09,1.17,39.28,39.28,0,0,1-62.13,46.8A39.2,39.2,0,0,1,50,10.81a40.45,40.45,0,0,1,8.32.88,40,40,0,0,1,7.92,2.62,3,3,0,0,1,1.51,4,3,3,0,0,1-4,1.51,32.37,32.37,0,0,0-6.69-2.2A34,34,0,0,0,50,16.85a33,33,0,1,0,32.22,24.8,33.69,33.69,0,0,0-3.14-7.81Z",
            }),
          );
        }
        var s = ["fill"];
        function c() {
          return (
            (c = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
            c.apply(null, arguments)
          );
        }
        const u = function (e) {
            var t = e.fill,
              n = void 0 === t ? "#DEC4A5" : t,
              r = (function (e, t) {
                if (null == e) return {};
                var n,
                  r,
                  i = (function (e, t) {
                    if (null == e) return {};
                    var n = {};
                    for (var r in e)
                      if ({}.hasOwnProperty.call(e, r)) {
                        if (-1 !== t.indexOf(r)) continue;
                        n[r] = e[r];
                      }
                    return n;
                  })(e, t);
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  for (r = 0; r < a.length; r++)
                    ((n = a[r]),
                      -1 === t.indexOf(n) &&
                        {}.propertyIsEnumerable.call(e, n) &&
                        (i[n] = e[n]));
                }
                return i;
              })(e, s);
            return i().createElement(
              "svg",
              c(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "7 11 18 10",
                  fill: n,
                },
                r,
              ),
              i().createElement("path", {
                d: "M24.7071 20.7071C24.3166 21.0976 23.6834 21.0976 23.2929 20.7071L16 13.4142L8.70711 20.7071C8.31658 21.0976 7.68342 21.0976 7.29289 20.7071C6.90237 20.3166 6.90237 19.6834 7.29289 19.2929L15.2929 11.2929C15.4804 11.1054 15.7348 11 16 11C16.2652 11 16.5196 11.1054 16.7071 11.2929L24.7071 19.2929C25.0976 19.6834 25.0976 20.3166 24.7071 20.7071Z",
                transform: "matrix(1, 0, 0, 1, -1.7763568394002505e-15, 0)",
              }),
            );
          },
          d = function (e) {
            var t = e.fill,
              n = void 0 === t ? "#000" : t;
            return i().createElement(
              "svg",
              { fill: n, width: "24", height: "24", viewBox: "0 0 24 24" },
              i().createElement("path", {
                d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
              }),
            );
          },
          m = function (e) {
            var t = e.fill,
              n = void 0 === t ? "#000" : t;
            return i().createElement(
              "svg",
              { viewBox: "0 0 24 24", fill: n },
              i().createElement("path", {
                d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
              }),
            );
          };
        var p = ["fill"];
        function g() {
          return (
            (g = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
            g.apply(null, arguments)
          );
        }
        const f = function (e) {
          var t = e.fill,
            n = void 0 === t ? "#DEC4A5" : t,
            r = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                i = (function (e, t) {
                  if (null == e) return {};
                  var n = {};
                  for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                      if (-1 !== t.indexOf(r)) continue;
                      n[r] = e[r];
                    }
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                  ((n = a[r]),
                    -1 === t.indexOf(n) &&
                      {}.propertyIsEnumerable.call(e, n) &&
                      (i[n] = e[n]));
              }
              return i;
            })(e, p);
          return i().createElement(
            "svg",
            g(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 48 48",
                fill: n,
              },
              r,
            ),
            i().createElement("path", {
              d: "M13.25 21.59c2.88 5.66 7.51 10.29 13.18 13.17l4.4-4.41c.55-.55 1.34-.71 2.03-.49 2.24.74 4.65 1.14 7.14 1.14 1.11 0 2 .89 2 2v7c0 1.11-.89 2-2 2-18.78 0-34-15.22-34-34 0-1.11.9-2 2-2h7c1.11 0 2 .89 2 2 0 2.49.4 4.9 1.14 7.14.22.69.06 1.48-.49 2.03l-4.4 4.42z",
            }),
          );
        };
        function h() {
          return (
            (h = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
            h.apply(null, arguments)
          );
        }
        const y = function (e) {
          var t = h(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(e),
            e),
          );
          return i().createElement(
            "svg",
            h(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "-5.0 -10.0 110.0 135.0",
              },
              t,
            ),
            i().createElement("path", {
              d: "m7.0625 39.117c-0.56641 0.003906-1.0273-0.45703-1.0312-1.0234s0.45703-1.0273 1.0234-1.0312l4.4102-0.027344c0.56641-0.003906 1.0273 0.45703 1.0312 1.0234s-0.45703 1.0273-1.0234 1.0312zm29.598-32.059c-0.003906-0.56641 0.45703-1.0273 1.0234-1.0312s1.0273 0.45703 1.0312 1.0234l0.027344 4.4102c0.003906 0.56641-0.45703 1.0273-1.0234 1.0312-0.56641 0.003906-1.0273-0.45703-1.0312-1.0234zm-15.246 4.7461c-0.28516-0.48828-0.12109-1.1172 0.36719-1.4062 0.48828-0.28516 1.1172-0.12109 1.4062 0.36719l2.2305 3.8047c0.28516 0.48828 0.12109 1.1172-0.36719 1.4062-0.48828 0.28516-1.1172 0.12109-1.4062-0.36719zm-10.832 11.734c-0.49219-0.28125-0.66797-0.90625-0.38672-1.4023 0.28125-0.49219 0.90625-0.66797 1.4023-0.38672l3.832 2.1797c0.49219 0.28125 0.66797 0.90625 0.38672 1.4023-0.28125 0.49219-0.90625 0.66797-1.4023 0.38672zm1.2305 30.824c-0.48828 0.28516-1.1172 0.12109-1.4062-0.36719-0.28516-0.48828-0.12109-1.1172 0.36719-1.4062l3.8047-2.2305c0.48828-0.28516 1.1172-0.12109 1.4062 0.36719 0.28516 0.48828 0.12109 1.1172-0.36719 1.4062zm40.426-43.785c0.28125-0.49219 0.90625-0.66797 1.4023-0.38672 0.49219 0.28125 0.66797 0.90625 0.38672 1.4023l-2.1797 3.832c-0.28125 0.49219-0.90625 0.66797-1.4023 0.38672-0.49219-0.28125-0.66797-0.90625-0.38672-1.4023zm-22.762 54.301c-0.32422 0-0.62109 0.13281-0.83594 0.34766-0.21484 0.21484-0.34766 0.51172-0.34766 0.83594v1.0938c0 0.32422 0.13281 0.62109 0.34766 0.83594 0.21484 0.21484 0.51172 0.34766 0.83594 0.34766h17.199c0.32422 0 0.62109-0.13281 0.83594-0.34766 0.21484-0.21484 0.34766-0.51172 0.34766-0.83594v-1.0938c0-0.32422-0.13281-0.62109-0.34766-0.83594-0.21484-0.21484-0.51172-0.34766-0.83594-0.34766zm14.922 5.5234h-12.539c0.13281 0.76172 0.44141 1.4414 0.86719 1.9609 0.52344 0.63672 1.2188 1.0273 1.9688 1.0234l6.9062-0.054688c0.75391-0.007812 1.4492-0.41016 1.9688-1.0586 0.40234-0.50391 0.69531-1.1484 0.82813-1.8711zm1.3008-12.625c-1.9961-1.6914-3.7422-3.7539-5.1289-6.1523-3.2305-5.5977-3.8906-11.973-2.3398-17.758 1.3984-5.2188 4.5938-9.9531 9.3125-13.203-1.2383-0.72266-2.5625-1.3125-3.9609-1.7461-1.8438-0.57422-3.7969-0.875-5.8242-0.86328l-0.003906 0.003906v-0.003906c-5.2852 0.035156-10.059 2.2109-13.504 5.6992-3.4453 3.4922-5.5586 8.2969-5.5234 13.59l0.003907 0.003906h-0.003907c0.015626 2.5547 0.53516 4.9922 1.4648 7.2188 0.96094 2.3125 2.3633 4.3945 4.0977 6.1445 0.8125 0.82031 1.4414 1.7266 1.8828 2.7148 0.44141 0.99219 0.69141 2.0586 0.75 3.1992 0.015625 0.28125 0.082031 0.54688 0.19141 0.79297 0.058594 0.125 0.125 0.24609 0.20312 0.35938h18.387zm4.5859 3.0352c-0.59375-0.30078-1.1758-0.625-1.7461-0.97656h-21.684c-0.26953 0-0.51953 0.11328-0.69922 0.29297-0.17969 0.17969-0.29297 0.42578-0.29297 0.69922v1c0 0.26953 0.11328 0.51953 0.29297 0.69922 0.17969 0.17969 0.42578 0.29297 0.69922 0.29297h22.438c0.26953 0 0.51953-0.11328 0.69922-0.29297 0.17969-0.17969 0.29297-0.42578 0.29297-0.69922zm14.758-36.578c3.9453 1.0586 7.4922 3.5898 9.7383 7.3516l0.125 0.21484c2.2422 3.8828 2.6953 8.3086 1.6211 12.324-1.0547 3.9336-3.5781 7.4727-7.3281 9.7227h-0.14844l-0.21484 0.21484c-3.8516 2.1797-8.2266 2.6094-12.199 1.5469-4.0195-1.0781-7.6211-3.6836-9.8633-7.5664l-0.003907-0.003907h0.003907c-2.2422-3.8828-2.6953-8.3086-1.6211-12.328 1.0781-4.0195 3.6836-7.6211 7.5664-9.8633h0.003906c3.8828-2.2422 8.3086-2.6953 12.328-1.6211zm-13.488-0.078125 0.003906-0.003906 0.13281-0.078125c4.3789-2.5273 9.3633-3.043 13.883-1.8281 4.4766 1.1992 8.5 4.0898 11.031 8.3945l0.22266 0.22266v0.16016c2.4062 4.3164 2.8789 9.2031 1.6875 13.641-1.2109 4.5234-4.1484 8.5859-8.5273 11.113l-0.24219 0.14062h-0.007813c-4.3164 2.4062-9.1992 2.8789-13.637 1.6875-4.4766-1.1992-8.5-4.0898-11.031-8.3945l-0.007812-0.007813-0.070312-0.125c-2.5273-4.3789-3.043-9.3633-1.8281-13.887 1.1992-4.4766 4.0898-8.5 8.3945-11.031zm16.801 37.93 1.8594 3.2227 7.918-4.5703-1.8594-3.2227c-1.1328 0.99219-2.3789 1.8906-3.7344 2.6719l-0.24219 0.14062h-0.007813c-1.2773 0.71875-2.5938 1.3008-3.9336 1.7578zm-1.8438-1.582c-3.7188 1.0273-7.582 1.0039-11.195 0.03125-2.0703-0.55469-4.0547-1.418-5.8828-2.5703-0.027344-0.019532-0.058594-0.039063-0.085938-0.054688-2.7969-1.7812-5.2188-4.2461-6.9883-7.3164-2.9453-5.1016-3.543-10.918-2.1289-16.195 1.4141-5.2773 4.8398-10.012 9.9453-12.961 5.1016-2.9453 10.918-3.543 16.195-2.1289 5.2773 1.4141 10.012 4.8398 12.961 9.9453h0.003907c2.9453 5.1016 3.543 10.914 2.1289 16.195-1.4141 5.2773-4.8398 10.012-9.9453 12.961v0.003906c-1.5859 0.91406-3.2383 1.6055-4.9258 2.0742-0.023438 0.007813-0.046875 0.011719-0.070312 0.019531zm15.594 7.3555-0.15234 0.085937-7.4023 4.2734-0.14844 0.085938v0.003906c-0.027344 0.015625-0.046875 0.042968-0.054688 0.074218-0.007812 0.035157-0.007812 0.066407 0.007813 0.097657l11.09 19.207h0.003907c0.62891 1.0859 1.6445 1.8203 2.7773 2.1211 1.1328 0.30469 2.3828 0.17969 3.4688-0.44531v-0.003906c1.0859-0.62891 1.8203-1.6445 2.1211-2.7773 0.30469-1.1328 0.17969-2.3828-0.44922-3.4688l-11.09-19.211h0.003906l-0.003906-0.003906c-0.015625-0.023438-0.042969-0.042969-0.074219-0.050782-0.03125-0.007812-0.066406-0.007812-0.09375 0.007813h-0.003906zm-7.6914 2.0703-2.0234-3.5039 5.6289-3.25 2.0234 3.5039zm-3.3438-34.695c1.2734 1.1172 2.5391 2.4609 3.8008 4.0312 0.30469 0.36719 0.32422 0.91016 0.011718 1.2969-1.2617 1.5781-2.5312 2.9297-3.8125 4.0469-3.1836 2.7852-6.4453 4.1992-9.793 4.2383-3.332 0.039063-6.6875-1.2969-10.07-4-1.457-1.1641-2.9141-2.5781-4.3711-4.2422-0.33984-0.38281-0.35156-0.96484-0.007813-1.3594 1.4609-1.668 2.9219-3.0859 4.3789-4.2539 3.3828-2.7031 6.7383-4.0352 10.07-4 3.3477 0.039062 6.6094 1.4492 9.793 4.2383zm1.6875 4.6875c-1.0078-1.2031-2.0195-2.25-3.0391-3.1445-2.8047-2.4531-5.6211-3.6992-8.457-3.7305-2.8516-0.03125-5.7734 1.1484-8.7734 3.5469-1.1562 0.92578-2.3242 2.0352-3.5078 3.3242 1.1836 1.293 2.3516 2.4023 3.5078 3.3242 2.9961 2.3984 5.9219 3.5781 8.7734 3.5469 2.8359-0.03125 5.6523-1.2773 8.457-3.7305 1.0195-0.89453 2.0312-1.9414 3.0391-3.1445zm-10.035-2.2891c-0.48828-0.54687-1.1523-0.88672-1.8789-0.88672s-1.3906 0.33984-1.8789 0.88672c-0.51562 0.57813-0.83594 1.3867-0.83594 2.2891 0 0.89844 0.32031 1.7109 0.83594 2.2891 0.48828 0.54687 1.1523 0.88672 1.8789 0.88672s1.3906-0.33984 1.8789-0.88672c0.51562-0.57813 0.83594-1.3867 0.83594-2.2891 0-0.89844-0.32031-1.7109-0.83594-2.2891zm-1.8789-2.9453c-1.3398 0-2.5508 0.60156-3.418 1.5781-0.83984 0.94141-1.3594 2.2344-1.3594 3.6562s0.51953 2.7148 1.3594 3.6562c0.86719 0.97656 2.0742 1.5781 3.418 1.5781 1.3398 0 2.5508-0.60156 3.418-1.5781 0.83984-0.94141 1.3594-2.2344 1.3594-3.6562s-0.51953-2.7148-1.3594-3.6562c-0.86719-0.97656-2.0742-1.5781-3.418-1.5781zm-0.44141 5.1211c0.003906 0.011718 0.003906 0.027344 0.003906 0.046875 0 0.57031 0.46094 1.0312 1.0312 1.0312s1.0312-0.46094 1.0312-1.0312c0-0.44141-0.13281-0.85156-0.35156-1.1953-0.24219-0.37109-0.58984-0.65625-1.0039-0.80078-0.10156-0.035156-0.20312-0.0625-0.3125-0.082031-0.10938-0.019532-0.21484-0.027344-0.32031-0.027344-0.57031 0-1.0312 0.46094-1.0312 1.0312 0 0.54297 0.42188 0.98828 0.95312 1.0273z",
              fillRule: "evenodd",
            }),
          );
        };
        function b() {
          return (
            (b = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
            b.apply(null, arguments)
          );
        }
        const v = function (e) {
          var t = b(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(e),
            e),
          );
          return i().createElement(
            "svg",
            b(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "-5.0 -10.0 110.0 135.0",
              },
              t,
            ),
            i().createElement("path", {
              d: "m58.75 19.512v-13.613l16.918 16.922h-13.613c-1.8242-0.007812-3.3008-1.4844-3.3047-3.3086zm-53.383 64.766v-71.855c-2.1211 0.09375-3.7969 1.8359-3.8047 3.9609v73.75c0.007812 2.1875 1.7773 3.9609 3.9688 3.9648h59.656c2.1211-0.007812 3.8633-1.6797 3.957-3.8008h-57.762c-3.3203-0.003906-6.0117-2.6953-6.0156-6.0195zm70.266-14.625 0.039063-0.070313-0.003906 14.695c-0.003907 1.8242-1.4805 3.3047-3.3047 3.3086h-60.98c-1.8242-0.003907-3.3008-1.4844-3.3047-3.3086v-75.07c0.003906-1.8242 1.4805-3.3047 3.3047-3.3086h44.66v13.613c0.003906 3.3242 2.6953 6.0156 6.0156 6.0195h13.609v17.699l-11.449 19.836c-0.17969 0.3125-0.29688 0.66016-0.33984 1.0156l-1.25 9.9141c-0.14062 1.0859 0.38281 2.1484 1.3281 2.6953 0.94922 0.54688 2.1328 0.46875 3-0.19531l7.9609-6.043v0.003906c0.28906-0.21875 0.53125-0.49219 0.71094-0.80469zm-36.805-36.746c0 0.75 0.60547 1.3555 1.3555 1.3555h0.48438c0.74609 0 1.3555-0.60547 1.3555-1.3555 0-0.74609-0.60938-1.3516-1.3555-1.3516h-0.48438c-0.35938 0-0.70312 0.14062-0.95703 0.39453-0.25391 0.25391-0.39844 0.59766-0.39844 0.95703zm-21.293-6.3125c0 0.75 0.60938 1.3555 1.3555 1.3555h16.727c0.75 0 1.3555-0.60547 1.3555-1.3555 0-0.74609-0.60547-1.3516-1.3555-1.3516h-16.723c-0.36328-0.003907-0.70703 0.14062-0.96094 0.39453-0.25391 0.25391-0.39844 0.59766-0.39844 0.95703zm0 6.3125c0 0.75 0.60938 1.3555 1.3555 1.3555h16.727c0.75 0 1.3555-0.60547 1.3555-1.3555 0-0.74609-0.60547-1.3516-1.3555-1.3516h-16.723c-0.36328-0.003907-0.70703 0.14062-0.96094 0.39453-0.25391 0.25391-0.39844 0.59766-0.39844 0.95703zm0 8.6914c0 0.75 0.60938 1.3555 1.3555 1.3555h45.965c0.74609 0 1.3555-0.60547 1.3555-1.3555 0-0.74609-0.60938-1.3516-1.3555-1.3516h-45.961c-0.36328 0-0.70703 0.14062-0.96094 0.39453s-0.39844 0.59766-0.39844 0.95703zm0 8.6914v0.003907c0 0.74609 0.60938 1.3516 1.3555 1.3516h45.965c0.74609 0 1.3555-0.60547 1.3555-1.3516 0-0.75-0.60938-1.3555-1.3555-1.3555h-45.961c-0.36328 0-0.70703 0.14062-0.96094 0.39453-0.25391 0.25391-0.39844 0.60156-0.39844 0.96094zm1.3555 10.047 45.965 0.003906c0.74609 0 1.3555-0.60547 1.3555-1.3555 0-0.74609-0.60938-1.3516-1.3555-1.3516h-45.961c-0.75 0-1.3555 0.60547-1.3555 1.3516 0 0.75 0.60547 1.3555 1.3555 1.3555zm42.84 13.934c-0.015625-0.35938-0.17578-0.69531-0.44141-0.9375-0.26562-0.24219-0.61719-0.36719-0.97656-0.35156-1.0195 0.054687-2.043 0.054687-3.0625 0-0.15234-0.17969-0.29297-0.36719-0.42188-0.5625-0.52344-1-1.4648-1.7109-2.5703-1.9375-1.2539-0.019531-2.4531 0.51172-3.2812 1.457-0.13281 0.125-0.28516 0.23047-0.44922 0.3125 0.21094-0.99219-0.12109-2.0195-0.86719-2.707-0.55469-0.39844-1.2617-0.51562-1.9141-0.32031 0.27734-1.2109 0.023437-2.4883-0.69922-3.5-0.54297-0.63281-1.6055-1.2852-3.5625-0.79688-2.1172 0.52734-3.3008 3.2852-3.0352 5.4258 0.085937 0.99609 0.58594 1.9102 1.375 2.5195-1.25 0.48047-2.5625 0.78125-3.8945 0.89062-0.35938 0.007812-0.70313 0.15625-0.94922 0.41406-0.25 0.26172-0.38672 0.60938-0.37891 0.96875 0.019532 0.74609 0.63672 1.3398 1.3867 1.3242h0.058594c1.3477-0.058594 6.8164-0.92188 8.5859-3.793l0.26563-0.14062c0.25781-0.13672 0.61328-0.32422 0.92578-0.46875h-0.003907c-0.027343 0.27734-0.074218 0.55469-0.12891 0.83203-0.12891 0.75 0.25391 1.4961 0.9375 1.8359 1.4258 0.65234 3.1133 0.32812 4.1953-0.80859 0.73047-0.67188 1.0742-0.74609 1.1367-0.75391h-0.003907c0.25 0.22656 0.46875 0.49219 0.64062 0.78125 0.45312 0.88672 1.2812 1.5156 2.2578 1.7109 1.1953 0.082032 2.3945 0.089844 3.5898 0.027344 0.35938-0.019531 0.69531-0.17969 0.9375-0.44531 0.24219-0.26562 0.36719-0.61719 0.34766-0.97656zm-16.953-6.8047c-0.21484 0.003906-0.42578 0.035156-0.63281 0.089844-0.75391 0.58203-1.1367 1.5234-1.0039 2.4648 0.085937 0.6875 0.40234 0.82031 0.92578 0.82031 0.17578-0.03125 0.34375-0.089844 0.50391-0.16797 0.625-1.6992 0.625-2.957 0.42188-3.1797-0.066407-0.023438-0.14063-0.03125-0.21484-0.027344zm22.469-4.2188 6.7109 3.875 17.605-30.48-6.7148-3.875zm18.957-32.828 6.7148 3.8711 1.6523-2.8594-6.7148-3.875zm-19.82 35.465-1.0664 8.457 6.7891-5.1484zm31.535-43.129-4.2266-2.4414c-0.68359-0.39453-1.793 0.23828-2.4688 1.4023l-2.0117 3.4922 6.7148 3.875 2.0156-3.4922c0.67188-1.1641 0.66016-2.4414-0.023437-2.8359z",
              fillRule: "evenodd",
            }),
          );
        };
        function w() {
          return (
            (w = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
            w.apply(null, arguments)
          );
        }
        const E = function (e) {
          var t = w(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(e),
            e),
          );
          return i().createElement(
            "svg",
            w(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "-5.0 -10.0 110.0 135.0",
              },
              t,
            ),
            i().createElement("path", {
              d: "m15.082 40.559c0-6.0664 4.918-10.984 10.984-10.984s10.984 4.918 10.984 10.984-4.918 10.984-10.984 10.984-10.984-4.918-10.984-10.984zm11.965 33.211 4.7031-17.555h5.8047c-1.5117-1.4688-3.3008-2.6523-5.2852-3.4648-1.8594 0.94922-3.9688 1.4844-6.1992 1.4844-2.2305 0-4.3359-0.53516-6.1992-1.4844-6.0156 2.4531-10.258 8.3516-10.258 15.25v14.078h15.207l1.5078-5.6172h-7.2188c-0.74219 0-1.3438-0.60156-1.3438-1.3438v-7.7148c0-0.74219 0.60156-1.3516 1.3438-1.3516s1.3438 0.60547 1.3438 1.3516v6.3672zm6.7695-14.859-6.207 23.168h27.902l6.207-23.168zm32.566 0.26172c0 5.3086 4.3047 9.6133 9.6133 9.6133s9.6133-4.3047 9.6133-9.6133-4.3047-9.6055-9.6133-9.6055-9.6133 4.3047-9.6133 9.6055zm15.438 10.84c-1.7305 0.93359-3.7148 1.4648-5.8242 1.4648s-4.0938-0.52734-5.8242-1.4648c-5.0469 2.2383-8.5703 7.293-8.5703 13.172v7.207h28.793v-7.207c0-5.8789-3.5234-10.934-8.5703-13.172zm-36.312-28.863 5.7383-8.1445c-1.4414-2.332-2.2656-5.0859-2.2656-8.0312 0-8.4805 6.875-15.355 15.355-15.355 8.4805 0 15.355 6.875 15.355 15.355 0 8.4805-6.875 15.359-15.355 15.359-2.6016 0-5.0469-0.64844-7.1914-1.7852l-0.23828 0.050781-11.395 2.5469zm21.16-23.168c0 0.74219 0.60156 1.3438 1.3438 1.3438h3.1758c0.74219 0 1.3438-0.60156 1.3438-1.3438 0-0.74219-0.60156-1.3438-1.3438-1.3438h-3.1758c-0.74219 0-1.3438 0.60156-1.3438 1.3438zm-3.2812 5.2266c-0.74219 0-1.3438 0.60547-1.3438 1.3438 0 0.74219 0.60156 1.3516 1.3438 1.3516h7.8047c0.74219 0 1.3438-0.60547 1.3438-1.3516 0-0.73828-0.60156-1.3438-1.3438-1.3438zm-7.543-5.2266c0 0.74219 0.60156 1.3438 1.3438 1.3438h5.4922c0.74219 0 1.3516-0.60156 1.3516-1.3438 0-0.74219-0.60547-1.3438-1.3516-1.3438h-5.4922c-0.74219 0-1.3438 0.60156-1.3438 1.3438zm0 6.5742c0 0.74219 0.60156 1.3516 1.3438 1.3516h2.4219c0.74219 0 1.3438-0.60547 1.3438-1.3516 0-0.73828-0.60156-1.3438-1.3438-1.3438h-2.4219c-0.74219 0-1.3438 0.60547-1.3438 1.3438zm0 6.5781c0 0.74219 0.60156 1.3438 1.3438 1.3438h14c0.74219 0 1.3438-0.60156 1.3438-1.3438 0-0.74219-0.60156-1.3438-1.3438-1.3438h-14c-0.74219 0-1.3438 0.60156-1.3438 1.3438z",
              fillRule: "evenodd",
            }),
          );
        };
        function x() {
          return (
            (x = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
            x.apply(null, arguments)
          );
        }
        const S = function (e) {
          var t = x(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(e),
            e),
          );
          return i().createElement(
            "svg",
            x(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "-5.0 -10.0 110.0 135.0",
              },
              t,
            ),
            i().createElement("path", {
              d: "m20.508 74.074c-0.82812 0-1.5-0.67188-1.5-1.5s0.67188-1.5 1.5-1.5h27.223c0.82812 0 1.5 0.67188 1.5 1.5s-0.67188 1.5-1.5 1.5zm0-12.531c-0.82812 0-1.5-0.67188-1.5-1.5s0.67188-1.5 1.5-1.5h27.223c0.82812 0 1.5 0.67188 1.5 1.5s-0.67188 1.5-1.5 1.5zm0-12.531c-0.82812 0-1.5-0.67188-1.5-1.5s0.67188-1.5 1.5-1.5h27.223c0.82812 0 1.5 0.67188 1.5 1.5s-0.67188 1.5-1.5 1.5zm0-12.531c-0.82812 0-1.5-0.67188-1.5-1.5s0.67188-1.5 1.5-1.5h38.18c0.82812 0 1.5 0.67188 1.5 1.5s-0.67188 1.5-1.5 1.5zm14.605-12.531c-0.82812 0-1.5-0.67188-1.5-1.5s0.67188-1.5 1.5-1.5h23.57c0.82812 0 1.5 0.67188 1.5 1.5s-0.67188 1.5-1.5 1.5zm38.516 19.828c4.9219 0.36328 9.3477 2.5117 12.629 5.7969 3.6172 3.6172 5.8555 8.6133 5.8555 14.129 0 5.5195-2.2383 10.516-5.8555 14.129-3.2852 3.2852-7.7109 5.4336-12.629 5.7969v2.2734c0 1.8086-0.74219 3.457-1.9414 4.6602-1.2031 1.1992-2.8477 1.9375-4.6562 1.9375h-52.551c-1.8164 0-3.4688-0.74219-4.6602-1.9375-1.1953-1.1953-1.9375-2.8438-1.9375-4.6602v-60.332c0-0.41406 0.16797-0.78906 0.4375-1.0625l16.57-16.57c0.29297-0.29297 0.67578-0.4375 1.0625-0.4375h41.074c1.8125 0 3.457 0.74219 4.6602 1.9414 1.1992 1.2031 1.9375 2.8477 1.9375 4.6562v29.676zm-3 39.859c-4.918-0.36328-9.3477-2.5117-12.629-5.7969-3.6172-3.6172-5.8555-8.6133-5.8555-14.129 0-5.5195 2.2383-10.516 5.8555-14.129 3.2852-3.2852 7.7109-5.4336 12.629-5.7969v-29.676c0-0.99219-0.40234-1.8906-1.0508-2.5391-0.65625-0.65625-1.5547-1.0586-2.5469-1.0586h-39.574v9.9727c0 1.8164-0.74219 3.4688-1.9375 4.6641-1.1953 1.1953-2.8438 1.9375-4.6641 1.9375h-9.9727v58.832c0 0.98828 0.40625 1.8867 1.0586 2.5391 0.65234 0.65234 1.5508 1.0586 2.5391 1.0586h52.551c0.99219 0 1.8906-0.40234 2.5391-1.0508 0.65625-0.65625 1.0586-1.5547 1.0586-2.5469zm13.508-31.938c-3.0742-3.0742-7.3203-4.9766-12.008-4.9766-4.6914 0-8.9375 1.9023-12.008 4.9766-3.0742 3.0742-4.9766 7.3203-4.9766 12.008 0 4.6914 1.9023 8.9375 4.9766 12.008 3.0742 3.0742 7.3203 4.9766 12.008 4.9766 4.6914 0 8.9375-1.9023 12.008-4.9766 3.0742-3.0742 4.9766-7.3203 4.9766-12.008 0-4.6914-1.9023-8.9375-4.9766-12.008zm-5.8359 5.3047c0.24609 0.78906-0.1875 1.6328-0.97656 1.8789-0.78906 0.24609-1.6328-0.1875-1.8789-0.97656-0.22266-0.70312-0.66406-1.2969-1.2266-1.707-0.57031-0.41406-1.2734-0.65234-2.0078-0.64453-0.73047 0.007812-1.4258 0.25781-1.9883 0.68359-0.55859 0.42188-0.98828 1.0234-1.1992 1.7305-0.18359 0.62891-0.15625 1.2773 0.24219 1.9023 0.51953 0.80859 1.5977 1.6406 3.4727 2.4648 2.4609 1.082 3.957 2.3125 4.7812 3.5938 0.94141 1.4609 1.0117 2.9414 0.59766 4.3633-0.39453 1.3398-1.207 2.4766-2.2617 3.2773-0.65625 0.49219-1.4062 0.85938-2.2188 1.0742v1.2266c0 0.82812-0.67188 1.5-1.5 1.5s-1.5-0.67188-1.5-1.5v-1.1719c-0.85547-0.19141-1.6523-0.55469-2.3438-1.0547-1.0742-0.78125-1.9102-1.8984-2.3281-3.2305-0.24609-0.78906 0.1875-1.6328 0.97656-1.8789 0.78906-0.24609 1.6328 0.1875 1.8789 0.97656 0.22266 0.70312 0.66406 1.2969 1.2266 1.707 0.57031 0.41406 1.2734 0.65234 2.0078 0.64453 0.73047-0.007812 1.4258-0.25781 1.9883-0.68359 0.5625-0.42578 0.99219-1.0234 1.1992-1.7305 0.18359-0.62891 0.15625-1.2773-0.24609-1.9023-0.51562-0.80859-1.5898-1.6406-3.4688-2.4688-2.4648-1.082-3.9648-2.3125-4.7852-3.5898-0.93359-1.4688-1.0078-2.9453-0.59375-4.3633 0.39453-1.3438 1.2031-2.4766 2.2617-3.2773 0.65234-0.49219 1.4062-0.85938 2.2188-1.0742v-1.2227c0-0.82812 0.67188-1.5 1.5-1.5s1.5 0.67188 1.5 1.5v1.168c0.85547 0.19141 1.6523 0.55469 2.3438 1.0547 1.0781 0.78125 1.9102 1.9023 2.3281 3.2305zm-65.297-32.926h7.8516c0.98828 0 1.8906-0.40625 2.543-1.0586 0.65234-0.65234 1.0586-1.5508 1.0586-2.543v-7.8516zm60.734 70.031c1.8594-1.5234 3.1992-3.6719 3.6875-6.1211 0.11328-0.53516 0.51562-0.99609 1.0781-1.1484 5.1289-1.4062 9.5781-4.4883 12.723-8.6172 3.0664-4.0273 4.8867-9.0586 4.8867-14.516 0-5.418-1.793-10.414-4.8203-14.426-3.0859-4.0898-7.457-7.168-12.504-8.625-0.66406-0.15625-1.1602-0.75-1.1602-1.4609v-25.094c0-2.918-1.1914-5.5703-3.1094-7.4883s-4.5703-3.1094-7.4883-3.1094h-43.355l-19.793 19.793v62.609c0 2.9219 1.1875 5.5742 3.1016 7.4883 1.918 1.9219 4.5703 3.1094 7.4961 3.1094h52.551c2.543 0 4.8789-0.90234 6.707-2.3945z",
            }),
          );
        };
        function P() {
          return (
            (P = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
            P.apply(null, arguments)
          );
        }
        const k = function (e) {
          var t = P(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(e),
            e),
          );
          return i().createElement(
            "svg",
            P(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "-5.0 -10.0 110.0 135.0",
              },
              t,
            ),
            i().createElement(
              "g",
              null,
              i().createElement("path", {
                d: "m51.562 37.5h-43.75c-2.5781 0-4.6875 2.1094-4.6875 4.6875v34.375c0 2.5781 2.1094 4.6875 4.6875 4.6875h3.125v10.938c0 0.85938 0.70312 1.5625 1.5625 1.5625h15.625c0.85938 0 1.5625-0.70312 1.5625-1.5625v-6.2812c0.57812-0.28125 1.0938-0.67188 1.5312-1.1719l2.9844-3.4844h17.359c2.5781 0 4.6875-2.1094 4.6875-4.6875v-34.375c0-2.5781-2.1094-4.6875-4.6875-4.6875zm-16.734 38.219-2.5312 2.9531-3.4531 4.0156c-0.25 0.28125-0.57422 0.48047-0.91797 0.54688h-0.007812c-0.44141 0.054687-0.86328-0.042969-1.1953-0.29297l-3.9062-2.9375c-0.69141-0.51953-1.6719-0.37891-2.1875 0.30859-0.51953 0.69141-0.37891 1.668 0.30859 2.1875l3.9062 2.9375c0.51562 0.38672 1.1016 0.64453 1.7188 0.79297v4.3945h-12.5v-14.062c0-0.85938 0.70312-1.5625 1.5625-1.5625h5.9219c0.9375 0 1.8281 0.26562 2.5938 0.78125l3.1094 2.0781c0.5625 0.375 1.2812 0.34375 1.8125-0.046875l4.5469-3.4062c0.15625-0.125 0.34375-0.1875 0.53125-0.1875l0.20312 0.03125c0.15625 0.03125 0.3125 0.125 0.4375 0.25 0.1875 0.17188 0.26562 0.40625 0.26562 0.625s-0.0625 0.42188-0.21875 0.59375zm-22.328-13.219c0-3.4531 2.7969-6.25 6.25-6.25s6.25 2.7969 6.25 6.25-2.7969 6.25-6.25 6.25-6.25-2.7969-6.25-6.25zm23.844 9.2812c-0.42188-0.29688-0.85938-0.48438-1.2812-0.5625-0.53125-0.15625-1.1719-0.15625-1.7812-0.015625l1.1094-8.8906c0.10938-0.85938 0.875-1.4688 1.7344-1.3594s1.4688 0.89062 1.3594 1.7344zm8.9688-18.656h-31.25c-0.85938 0-1.5625-0.70312-1.5625-1.5625s0.70312-1.5625 1.5625-1.5625h31.25c0.85938 0 1.5625 0.70312 1.5625 1.5625s-0.70312 1.5625-1.5625 1.5625zm0-6.25h-31.25c-0.85938 0-1.5625-0.70312-1.5625-1.5625s0.70312-1.5625 1.5625-1.5625h31.25c0.85938 0 1.5625 0.70312 1.5625 1.5625s-0.70312 1.5625-1.5625 1.5625z",
              }),
              i().createElement("path", {
                d: "m92.188 14.062h-1.5625v-3.125c0-2.5781-2.1094-4.6875-4.6875-4.6875h-4.6875c-2.5781 0-4.6875 2.1094-4.6875 4.6875v3.125h-18.75v-3.125c0-2.5781-2.1094-4.6875-4.6875-4.6875h-4.6875c-2.5781 0-4.6875 2.1094-4.6875 4.6875v3.125h-1.5625c-2.5781 0-4.6875 2.1094-4.6875 4.6875v12.5h3.125v-4.6875h53.125v35.938c0 0.85938-0.70312 1.5625-1.5625 1.5625h-29.688v3.125h29.688c2.5781 0 4.6875-2.1094 4.6875-4.6875v-43.75c0-2.5781-2.1094-4.6875-4.6875-4.6875zm-37.5 0h-7.8125v-3.125c0-0.85938 0.70312-1.5625 1.5625-1.5625h4.6875c0.85938 0 1.5625 0.70312 1.5625 1.5625zm32.812 0h-7.8125v-3.125c0-0.85938 0.70312-1.5625 1.5625-1.5625h4.6875c0.85938 0 1.5625 0.70312 1.5625 1.5625z",
              }),
              i().createElement("path", {
                d: "m89.062 42.188c0-6.8906-5.6094-12.5-12.5-12.5s-12.5 5.6094-12.5 12.5 5.6094 12.5 12.5 12.5 12.5-5.6094 12.5-12.5zm-14.062 4.6875c-0.40625 0-0.79688-0.15625-1.1094-0.45312l-3.125-3.125c-0.60938-0.60938-0.60938-1.6094 0-2.2188s1.6094-0.60938 2.2188 0l2.0156 2.0312 5.1406-5.1562c0.60938-0.60938 1.6094-0.60938 2.2188 0s0.60938 1.6094 0 2.2188l-6.25 6.25c-0.3125 0.29688-0.70312 0.45312-1.1094 0.45312z",
              }),
            ),
          );
        };
        function O() {
          return (
            (O = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
            O.apply(null, arguments)
          );
        }
        const C = function (e) {
          var t = O(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(e),
            e),
          );
          return i().createElement(
            "svg",
            O({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 60 75" }, t),
            i().createElement("path", {
              d: "M7.5,16a1,1,0,0,1,1,1c.01.5.225,3,3.5,3,3.341,0,3.494-2.712,3.5-3.021a1,1,0,0,1,1-.979.5.5,0,0,0,0-1,1,1,0,0,1-.994-.892.82.82,0,0,0-.783-.711A4.873,4.873,0,0,1,12,12.335,4.873,4.873,0,0,1,9.276,13.4a.82.82,0,0,0-.782.711A1,1,0,0,1,7.5,15a.5.5,0,0,0,0,1Z",
            }),
            i().createElement("path", {
              d: "M3,2A1,1,0,0,0,2,3V45a1,1,0,0,0,1,1H30V34a4,4,0,0,1,4-4V12H27a3,3,0,0,1-3-3V2ZM5,12a7,7,0,0,1,14,0v3.5a2.5,2.5,0,0,1-1.59,2.329A5.082,5.082,0,0,1,12,22c-3.713,0-5.1-2.4-5.42-4.176A2.5,2.5,0,0,1,5,15.5ZM16,42H6a1,1,0,0,1,0-2H16a1,1,0,0,1,0,2Zm11-5H6a1,1,0,0,1,0-2H27a1,1,0,0,1,0,2Zm0-5H6a1,1,0,0,1,0-2H27a1,1,0,0,1,0,2Zm3-5H6a1,1,0,0,1,0-2H30a1,1,0,0,1,0,2Zm0-7a1,1,0,0,1,0,2H20a1,1,0,0,1,0-2Z",
            }),
            i().createElement("path", {
              d: "M9.125,11.4a3.154,3.154,0,0,0,2.168-1.11,1,1,0,0,1,1.414,0,3.154,3.154,0,0,0,2.167,1.11A2.849,2.849,0,0,1,17,12.629V12A5,5,0,0,0,7,12v.629A2.849,2.849,0,0,1,9.125,11.4Z",
            }),
            i().createElement("path", {
              d: "M48,39.031V41a1,1,0,0,1-1,1H45a9.238,9.238,0,0,0-8.982,8.66A15.186,15.186,0,0,1,47,46a1,1,0,0,1,1,1v1.96c.008,0,.115.017.123.017h0l5.861-4.96,0,0C54,44.006,54,44,54,44l-5.874-4.977Z",
            }),
            i().createElement("path", {
              d: "M56,32H34a2,2,0,0,0-2,2V56a2,2,0,0,0,2,2H56a2,2,0,0,0,2-2V34A2,2,0,0,0,56,32Zm-.723,13.545L49.417,50.5a2.068,2.068,0,0,1-2.223.3A2.019,2.019,0,0,1,46,48.96v-.927a13.4,13.4,0,0,0-8.715,4.179l-.362.336A1.751,1.751,0,0,1,34,51.24,11.271,11.271,0,0,1,45,40h1v-.96a2.019,2.019,0,0,1,1.192-1.847,2.066,2.066,0,0,1,2.228.307l5.856,4.956a2.012,2.012,0,0,1,0,3.089Z",
            }),
            i().createElement("path", {
              d: "M32.586,10,26,3.414V9a1,1,0,0,0,1,1Z",
            }),
          );
        };
        function j() {
          return (
            (j = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
            j.apply(null, arguments)
          );
        }
        const A = function (e) {
          var t = j(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(e),
            e),
          );
          return i().createElement(
            "svg",
            j(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "-5.0 -10.0 110.0 135.0",
              },
              t,
            ),
            i().createElement("path", {
              d: "m76.73 22.914c-1.9375-1.9375-11.727 1.9961-22.066 12.336l-6.3945 6.3906c-5.0391 5.0391-10.926 12.371-15.129 18.828l5.9883 6.0586c6.4688-4.207 13.82-10.102 18.871-15.156l6.3906-6.3906c10.344-10.34 14.277-20.129 12.34-22.066zm-16.961 20.855c-1.0742 1.0742-2.8242 1.0742-3.8984 0-1.0742-1.0742-1.0742-2.8242 0-3.8984l5.1211-5.1211c1.0742-1.0742 2.8242-1.0742 3.8984 0s1.0742 2.8242 0 3.8984z",
            }),
            i().createElement("path", {
              d: "m33.098 62.648c-0.15625 0.11719-3.7695 2.7852-8.4766 3.8398-0.49609 1.3398-2.0547 5.8828-1.8984 9.3281l4.5312-4.5312c-0.10156-0.46875 0.023438-0.98047 0.38672-1.3438 0.57031-0.56641 1.4922-0.57031 2.0625 0 0.56641 0.56641 0.56641 1.4922 0 2.0586-0.36328 0.36328-0.875 0.49219-1.3438 0.39062l-4.5312 4.5312c3.4453 0.15625 7.9883-1.4023 9.3281-1.8984 1.0312-4.6094 3.6016-8.1562 3.8203-8.4531z",
            }),
            i().createElement("path", {
              d: "m63.785 35.855c-0.46484-0.46484-1.2227-0.46484-1.6875 0l-5.1211 5.1211c-0.46484 0.46484-0.46484 1.2227 0 1.6875 0.46484 0.46484 1.2227 0.46484 1.6875 0l5.1211-5.1211c0.46484-0.46484 0.46484-1.2227 0-1.6875z",
            }),
            i().createElement("path", {
              d: "m23.906 78.594s0.64453-0.023438 1.7734-0.066406c1.1289-0.035156 2.7422-0.10547 4.6758-0.20312 1.9336-0.082031 4.1875-0.22656 6.6055-0.35938l0.49219-0.023438 0.23828-0.003906 0.31641 0.007812c0.42188 0.035157 0.81641 0.046876 1.4141 0.33984 0.27734 0.13281 0.67969 0.45703 0.86719 0.95703 0.18359 0.51953 0.074219 0.96875-0.03125 1.2695-0.24219 0.60156-0.54297 0.88281-0.82422 1.1797-0.60547 0.58203-1.043 0.89062-1.5508 1.3242l-0.375 0.30469-0.33984 0.28906c-0.10156 0.097656-0.15234 0.14844-0.22266 0.23047-0.074218 0.082031-0.11719 0.14844-0.14844 0.19531-0.015625 0.027344-0.015625 0.050782 0.007813-0.10547 0.027343-0.12891-0.11719-0.46484-0.21875-0.53125-0.125-0.089844-0.10938-0.0625-0.078126-0.046876 0.058594 0.015626 0.13672 0.039063 0.24609 0.050782 0.22266 0.023437 0.45312 0.035156 0.76953 0.023437l0.95703-0.03125c1.2695-0.042969 2.5195-0.085937 3.7305-0.12891 1.2109-0.035156 2.3789-0.089844 3.4922-0.10547 1.1094-0.023437 2.1602-0.042968 3.1289-0.0625 1.9375-0.046875 3.5547-0.039062 4.6875-0.050781 1.1328 0.003906 1.7812 0.003906 1.7812 0.003906s-0.63672 0.10938-1.7539 0.30469c-1.1172 0.17969-2.7109 0.46094-4.6289 0.74219-0.95703 0.14453-1.9961 0.30078-3.0938 0.46875-1.0977 0.17578-2.2578 0.31641-3.457 0.48828-1.1992 0.16406-2.4414 0.33203-3.6992 0.50781l-0.94922 0.12891c-0.31641 0.042969-0.73047 0.09375-1.1484 0.066406-0.21094-0.007812-0.44922-0.039062-0.70312-0.097656-0.27344-0.085937-0.57031-0.16406-0.92969-0.48047-0.16797-0.13672-0.33203-0.375-0.44531-0.625-0.09375-0.25391-0.14453-0.54688-0.12109-0.76563 0.03125-0.48437 0.19141-0.75391 0.32422-1.0078 0.14453-0.22266 0.29297-0.41406 0.44141-0.57031 0.14062-0.16016 0.33203-0.32813 0.46484-0.44531l0.40625-0.32812 0.38281-0.29297c0.48438-0.37891 1.0938-0.8125 1.4141-1.1016 0.16406-0.14844 0.30078-0.34766 0.28516-0.33984 0 0.007813-0.058594 0.13281 0.019531 0.35156 0.0625 0.21484 0.23438 0.30078 0.22656 0.30469 0.039062 0.007813-0.19922-0.039063-0.38672-0.03125l-0.14453 0.003906-0.21875 0.015625-0.41406 0.042969c-2.4062 0.27344-4.6484 0.50781-6.5703 0.75-1.9219 0.22656-3.5234 0.42969-4.6445 0.58203-1.1211 0.14844-1.7617 0.23047-1.7617 0.23047-0.92187 0.12109-1.7695-0.52734-1.8906-1.4492-0.12109-0.92188 0.52734-1.7695 1.4492-1.8906 0.042969-0.011719 0.097656-0.015625 0.15234-0.019531z",
            }),
          );
        };
        function D() {
          return (
            (D = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
            D.apply(null, arguments)
          );
        }
        const T = function (e) {
          var t = D(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(e),
            e),
          );
          return i().createElement(
            "svg",
            D({ version: "1.1", viewBox: "0 0 512 512" }, t),
            i().createElement("path", {
              d: "M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM382.6 254.6c-12.5 12.5-32.75 12.5-45.25 0L288 205.3V384c0 17.69-14.33 32-32 32s-32-14.31-32-32V205.3L174.6 254.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l103.1-103.1C241.3 97.4 251.1 96 256 96c4.881 0 14.65 1.391 22.65 9.398l103.1 103.1C395.1 221.9 395.1 242.1 382.6 254.6z",
            }),
          );
        };
        function I() {
          return (
            (I = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
            I.apply(null, arguments)
          );
        }
        const _ = function (e) {
          var t = I(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(e),
            e),
          );
          return i().createElement(
            "svg",
            I(
              { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024" },
              t,
            ),
            i().createElement("path", {
              d: "M514 192c34-1 61-28 62-62 1-37-29-67-66-66-34 1-61 28-62 62-1 37 29 67 66 66z m464 384h-18l-127-246c18-2 36-9 52-16 24-11 29-43 11-62l-1-1c-11-11-28-15-43-8-14 6-34 13-53 13-56 0-81-64-287-64s-231 64-287 64c-20 0-39-6-53-13-15-6-32-3-43 8l-1 1c-18 19-13 50 11 62 16 8 34 14 52 16l-127 246h-18c-8 0-14 7-13 15 11 64 92 113 191 113s180-49 191-113c1-8-5-15-13-15h-18l-127-245c83-7 127-49 191-49v486c-35 0-64 29-64 64h-71c-28 0-57 29-57 64h512c0-35-29-64-71-64h-57c0-35-29-64-64-64v-486c64 0 108 42 191 49l-127 245h-18c-8 0-14 7-13 15 11 64 92 113 191 113s180-49 191-113c1-8-5-15-13-15z m-658 0h-192l96-180 96 180z m384 0l96-180 96 180h-192z",
            }),
          );
        };
        function L() {
          return (
            (L = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
            L.apply(null, arguments)
          );
        }
        const z = function (e) {
          var t = L(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(e),
            e),
          );
          return i().createElement(
            "svg",
            L({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" }, t),
            i().createElement("path", {
              d: "m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z",
              fillRule: "nonzero",
            }),
          );
        };
        function N() {
          return (
            (N = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
            N.apply(null, arguments)
          );
        }
        const M = function (e) {
          var t = N(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(e),
            e),
          );
          return i().createElement(
            "svg",
            N(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 122.04 122.88",
              },
              t,
            ),
            i().createElement("path", {
              d: "M117.31,9.3v39.28H78.03l-4.63,0l3.27-3.28l11.45-11.45c-0.75-0.73-1.54-1.44-2.36-2.11 c-1.08-0.88-2.22-1.72-3.38-2.48l0,0c-6.02-3.93-13.21-6.21-20.94-6.21l-0.01,0v-0.01c-10.59,0-20.18,4.3-27.12,11.24 c-6.94,6.94-11.24,16.53-11.24,27.11h0.01v0.05h-0.01c0,10.59,4.3,20.19,11.24,27.12c6.94,6.94,16.53,11.24,27.11,11.24v-0.01 l0.08,0v0.01c3.7,0,7.39-0.54,10.93-1.59v0c1.95-0.58,3.87-1.33,5.71-2.22c9.39-4.54,16.65-12.8,19.87-22.87l0.43-1.33l23.61,0 l-0.47,2.3l-0.01,0.06v0.01c-0.81,3.84-2.01,7.62-3.54,11.24v0.01c-1.5,3.55-3.37,6.98-5.52,10.19 c-11.02,16.43-29.78,27.26-51.05,27.26h-0.02v-0.01c-16.96,0-32.33-6.88-43.43-17.99v-0.01C6.89,93.77,0.02,78.42,0.01,61.47 l-0.01,0v-0.05l0.01,0c0-16.96,6.88-32.32,18-43.43l0,0C29.11,6.89,44.46,0.02,61.41,0.01V0l0.06,0v0.01 c8.71,0,17.01,1.83,24.51,5.1c1.21,0.53,2.43,1.1,3.6,1.71c5.48,2.83,10.47,6.46,14.83,10.74l9.61-9.61l3.27-3.27V9.3L117.31,9.3 L117.31,9.3z",
            }),
          );
        };
        function F() {
          return (
            (F = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
            F.apply(null, arguments)
          );
        }
        const W = function (e) {
          var t = F(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(e),
            e),
          );
          return i().createElement(
            "svg",
            F(
              { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
              t,
            ),
            i().createElement(
              "g",
              null,
              i().createElement("path", {
                d: "M257.338,166.245c16.297,0,29.52-13.223,29.52-29.52c0-16.317-13.223-29.501-29.52-29.501 c-16.298,0-29.52,13.185-29.52,29.501C227.818,153.022,241.04,166.245,257.338,166.245z",
              }),
              i().createElement("polygon", {
                points:
                  "277.383,205.605 277.383,195.265 277.383,185.925 218.343,185.925 218.343,205.605 238.023,205.605 238.023,372.885 218.343,372.885 218.343,392.565 297.063,392.565 297.063,372.885 277.383,372.885",
              }),
              i().createElement("path", {
                d: "M256.108,9.65c-135.857,0-246,110.143-246,246c0,135.877,110.143,246,246,246 c135.857,0,246-110.123,246-246C502.108,119.793,391.966,9.65,256.108,9.65z M256.108,481.97 c-124.797,0-226.32-101.533-226.32-226.32S131.312,29.33,256.108,29.33c124.797,0,226.32,101.533,226.32,226.32 S380.905,481.97,256.108,481.97z",
              }),
            ),
          );
        };
      },
      4098(e, t, n) {
        n.d(t, { A: () => p });
        var r = n(2015),
          i = n.n(r);
        function a(e) {
          return (
            (a =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            a(e)
          );
        }
        function o() {
          return (
            (o = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
            o.apply(null, arguments)
          );
        }
        function l(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function s(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? l(Object(n), !0).forEach(function (t) {
                  c(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : l(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        }
        function c(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != a(e) || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != a(n)) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return String(e);
              })(e);
              return "symbol" == a(t) ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function u(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  i,
                  a,
                  o,
                  l = [],
                  s = !0,
                  c = !1;
                try {
                  if (((a = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = a.call(n)).done) &&
                      (l.push(r.value), l.length !== t);
                      s = !0
                    );
                } catch (e) {
                  ((c = !0), (i = e));
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((o = n.return()), Object(o) !== o)
                    )
                      return;
                  } finally {
                    if (c) throw i;
                  }
                }
                return l;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return d(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? d(e, t)
                      : void 0
                );
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        function d(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var m = function (e) {
          var t = e.from,
            n = e.to,
            a = e.delay,
            l = void 0 === a ? "0" : a,
            c = e.style,
            d = void 0 === c ? {} : c,
            m = e.className,
            p = void 0 === m ? "" : m,
            g = e.children,
            f = e.element,
            h = void 0 === f ? "div" : f,
            y = e.elementProps,
            b = void 0 === y ? {} : y,
            v = (0, r.useRef)(null),
            w = (function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "0px",
                n = u((0, r.useState)(!0), 2),
                i = n[0],
                a = n[1];
              return (
                (0, r.useEffect)(function () {
                  var n = new IntersectionObserver(
                    function (e) {
                      var t = u(e, 1)[0];
                      a(t.isIntersecting);
                    },
                    { rootMargin: t },
                  );
                  return (
                    e.current && n.observe(e.current),
                    function () {
                      e.current && n.unobserve(e.current);
                    }
                  );
                }, []),
                i
              );
            })(v),
            E = s({ transition: "600ms ease-in-out" }, d);
          return i().createElement(
            h,
            o(
              {
                ref: v,
                style: w
                  ? s(s({}, E), {}, { transitionDelay: l }, n)
                  : s(s({}, E), {}, { transitionDelay: "0ms" }, t),
                className: p,
              },
              b,
            ),
            g,
          );
        };
        const p = {
          FadeIn: function (e) {
            var t = e.children,
              n = e.delay,
              r = void 0 === n ? "0" : n,
              a = e.className,
              o = e.style,
              l = void 0 === o ? {} : o,
              s = e.element,
              c = e.elementProps;
            return i().createElement(
              m,
              {
                from: { opacity: 0 },
                to: { opacity: 1 },
                style: l,
                delay: r,
                className: a,
                element: s,
                elementProps: c,
              },
              t,
            );
          },
          FadeUp: function (e) {
            var t = e.direction,
              n = void 0 === t ? "up" : t,
              r = e.delay,
              a = void 0 === r ? "0" : r,
              o = e.children,
              l = e.className,
              s = e.style,
              c = void 0 === s ? {} : s,
              u = e.element,
              d = e.elementProps;
            return i().createElement(
              m,
              {
                from: {
                  opacity: 0,
                  translate:
                    "up" === n
                      ? "0 2.5rem"
                      : "down" === n
                        ? "0 -2.5rem"
                        : "left" === n
                          ? "2.5rem 0"
                          : "-2.5rem 0",
                },
                to: { opacity: 1, translate: "none" },
                delay: a,
                style: c,
                className: l,
                element: u,
                elementProps: d,
              },
              o,
            );
          },
          ScaleIn: function (e) {
            var t = e.delay,
              n = void 0 === t ? "0" : t,
              r = e.style,
              a = void 0 === r ? {} : r,
              o = e.className,
              l = e.children,
              s = e.element,
              c = e.elementProps;
            return i().createElement(
              m,
              {
                from: { scale: "0" },
                to: { scale: "1" },
                className: o,
                style: a,
                delay: n,
                element: s,
                elementProps: c,
              },
              l,
            );
          },
        };
      },
      354(e, t, n) {
        n.d(t, { A: () => B });
        var r = n(2015),
          i = n.n(r),
          a = n(4822),
          o = n(9730),
          l = n.n(o),
          s = n(3653);
        const c = n.p + "hipaa-compliant-e502517c.png",
          u = n.p + "iso-27001-logo-e6e190db.png",
          d = n.p + "iso-9001-logo-6a72867e.png";
        var m = n(4215),
          p = n(5451),
          g = n(3555),
          f = n(4098),
          h = n(479),
          y = n.n(h),
          b = n(5642),
          v = n.n(b),
          w = "NaturalLanguageForm-module__nl-field--NQEjg",
          E = "NaturalLanguageForm-module__nl-field-open--M8DmY",
          x = "NaturalLanguageForm-module__nl-field-toggle--utlL7";
        function S(e) {
          return (
            (S =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            S(e)
          );
        }
        function P() {
          var e,
            t,
            n = "function" == typeof Symbol ? Symbol : {},
            r = n.iterator || "@@iterator",
            i = n.toStringTag || "@@toStringTag";
          function a(n, r, i, a) {
            var s = r && r.prototype instanceof l ? r : l,
              c = Object.create(s.prototype);
            return (
              k(
                c,
                "_invoke",
                (function (n, r, i) {
                  var a,
                    l,
                    s,
                    c = 0,
                    u = i || [],
                    d = !1,
                    m = {
                      p: 0,
                      n: 0,
                      v: e,
                      a: p,
                      f: p.bind(e, 4),
                      d: function (t, n) {
                        return ((a = t), (l = 0), (s = e), (m.n = n), o);
                      },
                    };
                  function p(n, r) {
                    for (
                      l = n, s = r, t = 0;
                      !d && c && !i && t < u.length;
                      t++
                    ) {
                      var i,
                        a = u[t],
                        p = m.p,
                        g = a[2];
                      n > 3
                        ? (i = g === r) &&
                          ((s = a[(l = a[4]) ? 5 : ((l = 3), 3)]),
                          (a[4] = a[5] = e))
                        : a[0] <= p &&
                          ((i = n < 2 && p < a[1])
                            ? ((l = 0), (m.v = r), (m.n = a[1]))
                            : p < g &&
                              (i = n < 3 || a[0] > r || r > g) &&
                              ((a[4] = n), (a[5] = r), (m.n = g), (l = 0)));
                    }
                    if (i || n > 1) return o;
                    throw ((d = !0), r);
                  }
                  return function (i, u, g) {
                    if (c > 1) throw TypeError("Generator is already running");
                    for (
                      d && 1 === u && p(u, g), l = u, s = g;
                      (t = l < 2 ? e : s) || !d;
                    ) {
                      a ||
                        (l
                          ? l < 3
                            ? (l > 1 && (m.n = -1), p(l, s))
                            : (m.n = s)
                          : (m.v = s));
                      try {
                        if (((c = 2), a)) {
                          if ((l || (i = "next"), (t = a[i]))) {
                            if (!(t = t.call(a, s)))
                              throw TypeError(
                                "iterator result is not an object",
                              );
                            if (!t.done) return t;
                            ((s = t.value), l < 2 && (l = 0));
                          } else
                            (1 === l && (t = a.return) && t.call(a),
                              l < 2 &&
                                ((s = TypeError(
                                  "The iterator does not provide a '" +
                                    i +
                                    "' method",
                                )),
                                (l = 1)));
                          a = e;
                        } else if ((t = (d = m.n < 0) ? s : n.call(r, m)) !== o)
                          break;
                      } catch (t) {
                        ((a = e), (l = 1), (s = t));
                      } finally {
                        c = 1;
                      }
                    }
                    return { value: t, done: d };
                  };
                })(n, i, a),
                !0,
              ),
              c
            );
          }
          var o = {};
          function l() {}
          function s() {}
          function c() {}
          t = Object.getPrototypeOf;
          var u = [][r]
              ? t(t([][r]()))
              : (k((t = {}), r, function () {
                  return this;
                }),
                t),
            d = (c.prototype = l.prototype = Object.create(u));
          function m(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, c)
                : ((e.__proto__ = c), k(e, i, "GeneratorFunction")),
              (e.prototype = Object.create(d)),
              e
            );
          }
          return (
            (s.prototype = c),
            k(d, "constructor", c),
            k(c, "constructor", s),
            (s.displayName = "GeneratorFunction"),
            k(c, i, "GeneratorFunction"),
            k(d),
            k(d, i, "Generator"),
            k(d, r, function () {
              return this;
            }),
            k(d, "toString", function () {
              return "[object Generator]";
            }),
            (P = function () {
              return { w: a, m };
            })()
          );
        }
        function k(e, t, n, r) {
          var i = Object.defineProperty;
          try {
            i({}, "", {});
          } catch (e) {
            i = 0;
          }
          ((k = function (e, t, n, r) {
            function a(t, n) {
              k(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            }
            t
              ? i
                ? i(e, t, {
                    value: n,
                    enumerable: !r,
                    configurable: !r,
                    writable: !r,
                  })
                : (e[t] = n)
              : (a("next", 0), a("throw", 1), a("return", 2));
          }),
            k(e, t, n, r));
        }
        function O(e, t, n, r, i, a, o) {
          try {
            var l = e[a](o),
              s = l.value;
          } catch (e) {
            return void n(e);
          }
          l.done ? t(s) : Promise.resolve(s).then(r, i);
        }
        function C(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function j(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? C(Object(n), !0).forEach(function (t) {
                  A(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : C(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        }
        function A(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != S(e) || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != S(n)) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return String(e);
              })(e);
              return "symbol" == S(t) ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function D(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  i,
                  a,
                  o,
                  l = [],
                  s = !0,
                  c = !1;
                try {
                  if (((a = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = a.call(n)).done) &&
                      (l.push(r.value), l.length !== t);
                      s = !0
                    );
                } catch (e) {
                  ((c = !0), (i = e));
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((o = n.return()), Object(o) !== o)
                    )
                      return;
                  } finally {
                    if (c) throw i;
                  }
                }
                return l;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return T(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? T(e, t)
                      : void 0
                );
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        function T(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function I() {
          var e = (0, r.useRef)(null),
            t = (0, r.useRef)(null),
            n = D((0, r.useState)(-1), 2),
            a = n[0],
            o = n[1],
            s = D(
              (0, r.useState)({
                platform: "platform",
                time: "time",
                timezone: "time zone",
                name: "guest",
                email: "abc@xyz.com",
              }),
              2,
            ),
            c = s[0],
            u = s[1],
            d = D((0, r.useState)(!1), 2),
            p = d[0],
            g = d[1],
            h = D((0, r.useState)(""), 2),
            b = h[0],
            S = h[1],
            k = D((0, r.useState)(""), 2),
            C = k[0],
            T = k[1],
            I = function (e, t) {
              u(function (n) {
                return j(j({}, n), {}, A({}, e, t));
              });
            },
            _ = function (e) {
              var t = e.options,
                n = e.defaultValue,
                l = e.index,
                s = e.valueKey,
                u = D((0, r.useState)(n), 2),
                d = (u[0], u[1]),
                m = D((0, r.useState)(!1), 2),
                p = m[0],
                g = m[1],
                f = (0, r.useRef)(null);
              return (
                (0, r.useEffect)(
                  function () {
                    g(a === l);
                  },
                  [a, l],
                ),
                i().createElement(
                  "div",
                  {
                    ref: f,
                    className: ""
                      .concat(w, " ")
                      .concat("NaturalLanguageForm-module__nl-dd--y4ITA", " ")
                      .concat(p ? E : ""),
                  },
                  i().createElement(
                    "span",
                    {
                      className: x,
                      onClick: function (e) {
                        (e.preventDefault(),
                          e.stopPropagation(),
                          o(p ? -1 : l));
                      },
                    },
                    c[s],
                  ),
                  i().createElement(
                    "ul",
                    null,
                    t.map(function (e, t) {
                      return i().createElement(
                        "li",
                        {
                          key: t,
                          className:
                            e === c[s]
                              ? "NaturalLanguageForm-module__nl-dd-checked--PcC34"
                              : "",
                          onClick: function () {
                            return (function (e) {
                              (d(e), I(s, e), o(-1));
                            })(e);
                          },
                        },
                        e,
                      );
                    }),
                  ),
                )
              );
            },
            L = function (e) {
              var t = e.placeholder,
                n = e.subline,
                l = e.index,
                s = e.valueKey,
                u = D((0, r.useState)(c[s]), 2),
                d = u[0],
                m = u[1],
                p = D((0, r.useState)(!1), 2),
                g = p[0],
                f = p[1],
                h = (0, r.useRef)(null),
                y = (0, r.useRef)(null);
              (0, r.useEffect)(
                function () {
                  a === l ? (f(!0), y.current && y.current.focus()) : f(!1);
                },
                [a, l],
              );
              var b = function () {
                var e = "" !== d.trim() ? d : t;
                (I(s, e), o(-1));
              };
              return i().createElement(
                "div",
                {
                  ref: h,
                  className: ""
                    .concat(w, " ")
                    .concat(
                      "NaturalLanguageForm-module__nl-ti-text--qF9OR",
                      " ",
                    )
                    .concat(g ? E : ""),
                },
                i().createElement(
                  "span",
                  {
                    className: x,
                    onClick: function (e) {
                      (e.preventDefault(), e.stopPropagation(), o(g ? -1 : l));
                    },
                  },
                  c[s],
                ),
                i().createElement(
                  "ul",
                  null,
                  i().createElement(
                    "li",
                    {
                      className:
                        "NaturalLanguageForm-module__nl-ti-input--FVu7k",
                    },
                    i().createElement("input", {
                      ref: y,
                      type: "text",
                      placeholder: t,
                      value: d,
                      onChange: function (e) {
                        m(e.target.value);
                      },
                      onKeyDown: function (e) {
                        "Enter" === e.key && b();
                      },
                    }),
                    i().createElement(
                      "button",
                      {
                        className:
                          "NaturalLanguageForm-module__nl-field-go--mok84",
                        onClick: b,
                      },
                      i().createElement(
                        "svg",
                        {
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "#070C1E",
                        },
                        i().createElement("path", {
                          d: "m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z",
                          fillRule: "nonzero",
                        }),
                      ),
                    ),
                  ),
                  i().createElement("li", {
                    className:
                      "NaturalLanguageForm-module__nl-ti-example--iD6o8",
                    dangerouslySetInnerHTML: { __html: n },
                  }),
                ),
              );
            },
            z = (function () {
              var e,
                t =
                  ((e = P().m(function e(t) {
                    var n, r;
                    return P().w(function (e) {
                      for (;;)
                        switch (e.n) {
                          case 0:
                            if ((t.preventDefault(), "guest" !== c.name)) {
                              e.n = 1;
                              break;
                            }
                            return (
                              T("error"),
                              g(!0),
                              S("Please enter your name"),
                              e.a(2)
                            );
                          case 1:
                            if ("time" !== c.time) {
                              e.n = 2;
                              break;
                            }
                            return (
                              T("error"),
                              g(!0),
                              S("Please select time"),
                              e.a(2)
                            );
                          case 2:
                            if ("time zone" !== c.timezone) {
                              e.n = 3;
                              break;
                            }
                            return (
                              T("error"),
                              g(!0),
                              S("Please select time zone"),
                              e.a(2)
                            );
                          case 3:
                            if ("platform" !== c.platform) {
                              e.n = 4;
                              break;
                            }
                            return (
                              T("error"),
                              g(!0),
                              S("Please select platform"),
                              e.a(2)
                            );
                          case 4:
                            if ("abc@xyz.com" !== c.email) {
                              e.n = 5;
                              break;
                            }
                            return (
                              T("error"),
                              g(!0),
                              S("Please enter your email"),
                              e.a(2)
                            );
                          case 5:
                            return (
                              (e.n = 6),
                              fetch("/api/submit-small-form", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(c),
                              })
                            );
                          case 6:
                            return ((n = e.v), (e.n = 7), n.json());
                          case 7:
                            ((r = e.v).success ? T("success") : T("error"),
                              S(r.message),
                              g(!0));
                          case 8:
                            return e.a(2);
                        }
                    }, e);
                  })),
                  function () {
                    var t = this,
                      n = arguments;
                    return new Promise(function (r, i) {
                      var a = e.apply(t, n);
                      function o(e) {
                        O(a, r, i, o, l, "next", e);
                      }
                      function l(e) {
                        O(a, r, i, o, l, "throw", e);
                      }
                      o(void 0);
                    });
                  });
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
            N = function () {
              (T(""), S(""), g(!1));
            };
          return i().createElement(
            i().Fragment,
            null,
            i().createElement(
              l(),
              {
                size: { xs: 12, sm: 12, md: 12, lg: 8 },
                className: "NaturalLanguageForm-module__infoTextSection--se9Z2",
              },
              i().createElement(
                f.A.FadeUp,
                { direction: "up" },
                i().createElement(
                  "form",
                  {
                    ref: e,
                    id: "nl-form",
                    className: "NaturalLanguageForm-module__nl-form--EhgGI",
                    onSubmit: z,
                  },
                  "Hi ",
                  " ",
                  i().createElement(L, {
                    placeholder: "guest",
                    index: 3,
                    valueKey: "name",
                    subline: "Enter your name",
                  }),
                  ", Let's schedule your meeting for ",
                  " ",
                  i().createElement(_, {
                    options: [
                      "10 am",
                      "11 am",
                      "12 am",
                      "01 pm",
                      "02 pm",
                      "03 pm",
                    ],
                    defaultValue: "time",
                    index: 0,
                    valueKey: "time",
                  }),
                  " ",
                  " ",
                  i().createElement(_, {
                    options: ["EST", "CST", "MST", "PST", "HST"],
                    defaultValue: "time zone",
                    index: 1,
                    valueKey: "timezone",
                  }),
                  " ",
                  " ",
                  "on ",
                  " ",
                  i().createElement(_, {
                    options: ["Zoom", "Google Meet", "Phone call"],
                    defaultValue: "platform",
                    index: 2,
                    valueKey: "platform",
                  }),
                  ". Just share your email (",
                  i().createElement(L, {
                    placeholder: "abc@xyz.com",
                    index: 4,
                    valueKey: "email",
                    subline: "Enter your email",
                  }),
                  "), and let's make things happen!",
                  i().createElement("div", {
                    ref: t,
                    className: ""
                      .concat(
                        "NaturalLanguageForm-module__nl-overlay--gMIUD",
                        " ",
                      )
                      .concat(-1 !== a ? E : ""),
                    onClick: function () {
                      o(-1);
                    },
                  }),
                ),
              ),
            ),
            i().createElement(
              l(),
              {
                size: { xs: 12, sm: 12, md: 12, lg: 1 },
                className: "NaturalLanguageForm-module__winButton--WKJIy",
              },
              i().createElement(
                f.A.FadeUp,
                { direction: "up", delay: "100ms" },
                i().createElement(m.ou, { onClick: z }),
              ),
            ),
            i().createElement(
              y(),
              {
                open: p,
                autoHideDuration: 5e3,
                onClose: N,
                anchorOrigin: { horizontal: "center", vertical: "top" },
              },
              i().createElement(
                v(),
                {
                  onClose: N,
                  severity: C,
                  variant: "filled",
                  sx: { width: "100%" },
                },
                b,
              ),
            ),
          );
        }
        var _ = "Footer-module__address--Hzr6Q",
          L = "Footer-module__addressHeading--A16rb",
          z = "Footer-module__copyrightContainer--zpJUr",
          N = "Footer-module__copyrightText--vUxRF",
          M = "Footer-module__footerLink--VXOed",
          F = "Footer-module__logoImage--a2cmE",
          W = "Footer-module__socialIcons--HGE6V",
          R = n(7550),
          H = n(9017);
        const B = function () {
          var e = (0, p.F)().isMobile;
          return i().createElement(
            i().Fragment,
            null,
            i().createElement(
              "section",
              { className: "Footer-module__letsWinTogetherSection--FmcQS" },
              i().createElement(
                l(),
                { container: !0, size: 12, justifyContent: "center" },
                i().createElement(
                  l(),
                  {
                    container: !0,
                    size: { xs: 12, sm: 12, md: 12, lg: 9 },
                    alignItems: "center",
                  },
                  i().createElement(
                    l(),
                    { size: { xs: 12, sm: 12, md: 12, lg: 3 } },
                    i().createElement(
                      f.A.FadeUp,
                      {
                        direction: "down",
                        className: "Footer-module__infoSmallSection--HEiwV",
                      },
                      "Let's get our A game to the court.",
                    ),
                    i().createElement(
                      f.A.FadeUp,
                      {
                        direction: "up",
                        className: "Footer-module__infoBigSection--LV1sZ",
                      },
                      !e &&
                        i().createElement(
                          "div",
                          { className: "Footer-module__infoHeading1--NInw1" },
                          "Your Victory,",
                        ),
                      i().createElement(
                        "div",
                        { className: "Footer-module__infoHeading2--Uz__X" },
                        e && "Your Victory,  ",
                        "Our Expertise.",
                      ),
                    ),
                  ),
                  i().createElement(I, null),
                ),
              ),
            ),
            i().createElement(
              "section",
              { className: "Footer-module__complianceLogo--PeCHc" },
              i().createElement(
                l(),
                { size: 12, container: !0, justifyContent: "center" },
                i().createElement(
                  l(),
                  {
                    size: { md: 12, lg: 6 },
                    className: "Footer-module__complianceLogoContainer--kov47",
                  },
                  i().createElement("img", { src: d, alt: "", className: F }),
                  i().createElement("img", { src: u, alt: "", className: F }),
                  i().createElement("img", { src: c, alt: "", className: F }),
                ),
              ),
            ),
            i().createElement(
              "section",
              { className: "Footer-module__footer--NCVGm" },
              i().createElement(
                l(),
                {
                  size: { xs: 12, sm: 12, md: 12, lg: 8 },
                  container: !0,
                  justifyContent: "center",
                  className: "Footer-module__footerSection--U6Y0D",
                },
                i().createElement(
                  l(),
                  {
                    size: 12,
                    className: "Footer-module__logoContainer--QTHBL",
                  },
                  i().createElement("img", {
                    src: s,
                    className: "Footer-module__logo--Eg9rG",
                    alt: "Glocal LPO",
                  }),
                ),
                i().createElement(
                  l(),
                  {
                    size: 12,
                    className: "Footer-module__socialMedia--N6ysg",
                    justifyContent: "center",
                    container: !0,
                  },
                  i().createElement(
                    "a",
                    {
                      href: "https://www.linkedin.com/company/glocal-lpo/",
                      rel: "noopener noreferrer nofollow",
                      className: W,
                      target: "_blank",
                      "aria-label": "LinkedIn",
                    },
                    i().createElement(m.pf, null),
                  ),
                  i().createElement(
                    "a",
                    {
                      href: "https://www.instagram.com/glocallpo/",
                      rel: "noopener noreferrer nofollow",
                      className: W,
                      target: "_blank",
                      "aria-label": "Instagram",
                    },
                    i().createElement(m.pd, null),
                  ),
                ),
                i().createElement(
                  l(),
                  { size: 12 },
                  i().createElement(
                    "div",
                    { className: "Footer-module__navBar--QJh52" },
                    i().createElement(
                      a.Link,
                      {
                        to: g.J.home.href,
                        "data-replace": g.J.home.label,
                        className: M,
                      },
                      i().createElement("span", null, g.J.home.label),
                    ),
                    i().createElement(
                      a.Link,
                      {
                        to: g.J.about.href,
                        "data-replace": g.J.about.label,
                        className: M,
                      },
                      i().createElement("span", null, g.J.about.label),
                    ),
                    i().createElement(
                      a.Link,
                      {
                        to: g.J.services.href,
                        "data-replace": g.J.services.label,
                        className: M,
                      },
                      i().createElement("span", null, g.J.services.label),
                    ),
                    i().createElement(
                      a.Link,
                      {
                        to: g.J["contact-us"].href,
                        "data-replace": g.J["contact-us"].label,
                        className: M,
                      },
                      i().createElement("span", null, g.J["contact-us"].label),
                    ),
                    i().createElement(
                      a.Link,
                      {
                        to: g.J.blog.href,
                        "data-replace": g.J.blog.label,
                        className: M,
                      },
                      i().createElement("span", null, g.J.blog.label),
                    ),
                  ),
                ),
              ),
              i().createElement(
                "section",
                { className: R.gy },
                i().createElement(H.DH, { section: "contact" }),
              ),
              i().createElement(
                l(),
                {
                  size: 12,
                  container: !0,
                  className: ""
                    .concat(z, " ")
                    .concat("Footer-module__extraPaddingContainer--K7zV6"),
                  alignItems: "center",
                  justifyContent: "center",
                },
                i().createElement(
                  l(),
                  { size: { xs: 12, sm: 12, md: 12, lg: 4 }, className: N },
                  i().createElement(
                    "span",
                    { className: L },
                    "US Headquarters:",
                  ),
                  i().createElement(
                    "a",
                    {
                      href: "https://g.co/kgs/2Gbqrfo",
                      rel: "noopener noreferrer nofollow",
                      target: "_blank",
                      className: _,
                    },
                    "3422 Old Capitol Trail, Wilmington DE 19808, USA",
                  ),
                ),
                i().createElement(
                  l(),
                  { size: { xs: 12, sm: 12, md: 12, lg: 4 }, className: N },
                  i().createElement(
                    "span",
                    { className: L },
                    "Office Operations:",
                  ),
                  i().createElement(
                    "a",
                    {
                      href: "https://g.co/kgs/jd2x9s4",
                      rel: "noopener noreferrer nofollow",
                      target: "_blank",
                      className: _,
                    },
                    "B-73, Block B, Sector 57, Noida, Uttar Pradesh 201301, India",
                  ),
                ),
                i().createElement(
                  l(),
                  { size: { xs: 12, sm: 12, md: 12, lg: 4 }, className: N },
                  i().createElement(
                    "a",
                    { href: "tel:+1 (650) 407 2112", className: L },
                    " ",
                    "+1 (650) 407 2112",
                  ),
                  i().createElement(
                    "a",
                    { href: "mailto:info@glocallpo.com" },
                    "info@glocallpo.com",
                  ),
                ),
              ),
              i().createElement(
                l(),
                { size: 12, className: z, alignItems: "center" },
                "© 2025 Glocal LPO. All Rights Reserved.",
              ),
            ),
          );
        };
      },
      1713(e, t, n) {
        n.d(t, { A: () => Z });
        var r = {};
        (n.r(r),
          n.d(r, {
            wp: () => B,
            wm: () => G,
            r$: () => q,
            LI: () => J,
            go: () => U,
            TQ: () => V,
            F9: () => Y,
          }));
        const i = require("@mui/material/AppBar");
        var a = n.n(i);
        const o = require("@mui/material/Popover");
        var l = n.n(o),
          s = n(9730),
          c = n.n(s),
          u = n(2015),
          d = n.n(u),
          m = n(4822),
          p = n(255),
          g = n(9084),
          f = n.n(g),
          h = n(5451),
          y = n(3555),
          b = n(4215),
          v = n(3653),
          w = n(179),
          E = n.n(w),
          x = n(5339);
        const S = function () {
            return d().createElement(
              E(),
              { className: "MegaMenu-module__container--ujPgE" },
              d().createElement(
                c(),
                { container: !0, size: 12, spacing: 4 },
                x.CX.map(function (e, t) {
                  return d().createElement(
                    c(),
                    {
                      container: !0,
                      size: 4,
                      key: t,
                      alignItems: "flex-start",
                      className: "MegaMenu-module__menuItem--MMWAp",
                    },
                    d().createElement(
                      m.Link,
                      { to: e.link, className: "MegaMenu-module__link--b_IrB" },
                      d().createElement(
                        "div",
                        { className: "MegaMenu-module__starIcon--lOTcz" },
                        d().createElement(b.Gg, {
                          className: "MegaMenu-module__icon--HaMez",
                        }),
                      ),
                      d().createElement(
                        "div",
                        { className: "MegaMenu-module__menuInfo--gLIua" },
                        d().createElement(
                          "div",
                          { className: "MegaMenu-module__menuTitle--a1MuD" },
                          e.title,
                        ),
                        d().createElement(
                          "div",
                          {
                            className:
                              "MegaMenu-module__menuDescription--aRBxq",
                          },
                          e.menuContent,
                        ),
                      ),
                    ),
                  );
                }),
              ),
            );
          },
          P = require("hamburger-react");
        var k = n(5322);
        const O = require("react-use-measure");
        var C = n.n(O);
        const j = require("react-dom");
        function A(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function D(e) {
          var t,
            n,
            r = e.children,
            i =
              ((t = (0, u.useState)(!1)),
              (n = 2),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(t) ||
                (function (e, t) {
                  var n =
                    null == e
                      ? null
                      : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                  if (null != n) {
                    var r,
                      i,
                      a,
                      o,
                      l = [],
                      s = !0,
                      c = !1;
                    try {
                      if (((a = (n = n.call(e)).next), 0 === t)) {
                        if (Object(n) !== n) return;
                        s = !1;
                      } else
                        for (
                          ;
                          !(s = (r = a.call(n)).done) &&
                          (l.push(r.value), l.length !== t);
                          s = !0
                        );
                    } catch (e) {
                      ((c = !0), (i = e));
                    } finally {
                      try {
                        if (
                          !s &&
                          null != n.return &&
                          ((o = n.return()), Object(o) !== o)
                        )
                          return;
                      } finally {
                        if (c) throw i;
                      }
                    }
                    return l;
                  }
                })(t, n) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return A(e, t);
                    var n = {}.toString.call(e).slice(8, -1);
                    return (
                      "Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(e)
                        : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? A(e, t)
                          : void 0
                    );
                  }
                })(t, n) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                })()),
            a = i[0],
            o = i[1];
          if (
            ((0, u.useEffect)(function () {
              o(!0);
            }, []),
            !a)
          )
            return null;
          var l = document.getElementById("menu-root");
          return l ? (0, j.createPortal)(r, l) : null;
        }
        var T = "Menu-module__menuItems--m1tRW";
        function I(e) {
          return (
            (I =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            I(e)
          );
        }
        function _(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  i,
                  a,
                  o,
                  l = [],
                  s = !0,
                  c = !1;
                try {
                  if (((a = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = a.call(n)).done) &&
                      (l.push(r.value), l.length !== t);
                      s = !0
                    );
                } catch (e) {
                  ((c = !0), (i = e));
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((o = n.return()), Object(o) !== o)
                    )
                      return;
                  } finally {
                    if (c) throw i;
                  }
                }
                return l;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return L(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? L(e, t)
                      : void 0
                );
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        function L(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function z(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function N(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? z(Object(n), !0).forEach(function (t) {
                  M(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : z(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        }
        function M(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != I(e) || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != I(n)) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return String(e);
              })(e);
              return "symbol" == I(t) ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        var F = [
            N({}, y.J.home),
            N({}, y.J.about),
            {
              label: "Services",
              children: [
                N({}, y.J["real-estate-litigation"]),
                N({}, y.J["personal-injury"]),
                N({}, y.J["estate-planning-probate"]),
                N({}, y.J["employee-law"]),
                N({}, y.J["workers-compensation"]),
                N({}, y.J["business-litigation-support"]),
                N({}, y.J.immigration),
                N({}, y.J["family-law"]),
                N({}, y.J.bankruptcy),
              ],
            },
            N({}, y.J["contact-us"]),
            N({}, y.J.blog),
          ],
          W = {
            hidden: {
              opacity: 0,
              transition: { when: "afterChildren", delay: 0 },
            },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          },
          R = {
            hidden: { y: -60, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { ease: "easeOut", duration: 0.3 },
            },
            exit: { y: -60, opacity: 0, transition: { duration: 0.5 } },
          };
        const H = function () {
          var e = _((0, u.useState)(!1), 2),
            t = e[0],
            n = e[1],
            r = _((0, u.useState)(!1), 2),
            i = r[0],
            a = r[1],
            o = _(C()(), 2),
            l = o[0],
            s = o[1],
            c = (0, m.useNavigate)(),
            p = function (e, t) {
              (e.preventDefault(),
                a(!1),
                setTimeout(function () {
                  (n(!1),
                    setTimeout(function () {
                      c(t);
                    }, 50));
                }, 50));
            };
          return d().createElement(
            d().Fragment,
            null,
            d().createElement(P.Squash, {
              toggled: t,
              toggle: n,
              label: "Hamburger Menu",
            }),
            d().createElement(
              D,
              null,
              d().createElement(
                k.AnimatePresence,
                { mode: "wait" },
                t &&
                  d().createElement(
                    k.motion.nav,
                    {
                      className: "Menu-module__menuContainer--vLb9r",
                      initial: "hidden",
                      animate: "visible",
                      exit: "hidden",
                      variants: W,
                    },
                    d().createElement(
                      "div",
                      { className: "Menu-module__burgerMenu--DixHI" },
                      d().createElement(P.Squash, {
                        color: "#fff",
                        toggled: t,
                        toggle: function () {
                          (a(!1),
                            setTimeout(function () {
                              n(!1);
                            }, 50));
                        },
                      }),
                    ),
                    d().createElement(
                      "div",
                      { className: "Menu-module__menuItemsContainer--sUsO0" },
                      F.map(function (e) {
                        return e.children
                          ? d().createElement(
                              "div",
                              { key: e.label },
                              d().createElement(
                                k.motion.div,
                                {
                                  key: e.href,
                                  variants: R,
                                  onClick: function () {
                                    return a(function (e) {
                                      return !e;
                                    });
                                  },
                                },
                                d().createElement(
                                  m.Link,
                                  {
                                    to: e.href,
                                    className: ""
                                      .concat(T, " ")
                                      .concat(
                                        i
                                          ? "Menu-module__menuActive--vhWVa"
                                          : "",
                                      ),
                                  },
                                  e.label,
                                ),
                              ),
                              d().createElement(
                                k.AnimatePresence,
                                null,
                                i &&
                                  d().createElement(
                                    k.motion.div,
                                    {
                                      className: "Menu-module__subMenu--a1Ncn",
                                      initial: { height: 0, opacity: 0 },
                                      animate: { height: s.height, opacity: 1 },
                                      exit: { height: 0, opacity: 0 },
                                      transition: {
                                        duration: 0.4,
                                        ease: "easeInOut",
                                        when: "beforeChildren",
                                        staggerChildren: 0.05,
                                      },
                                      style: {
                                        overflow: "hidden",
                                        height: s.height ? s.height : 0,
                                      },
                                    },
                                    d().createElement(
                                      k.motion.div,
                                      {
                                        initial: "hidden",
                                        animate: "visible",
                                        exit: "hidden",
                                        ref: l,
                                        variants: {
                                          visible: {
                                            transition: {
                                              staggerChildren: 0.07,
                                              delayChildren: 0.05,
                                            },
                                          },
                                          hidden: {
                                            transition: {
                                              staggerChildren: 0.05,
                                              staggerDirection: -1,
                                            },
                                          },
                                        },
                                      },
                                      e.children.map(function (e) {
                                        return d().createElement(
                                          k.motion.div,
                                          {
                                            key: e.href,
                                            variants: R,
                                            className:
                                              "Menu-module__subMenuItems--NhJ7C",
                                          },
                                          d().createElement(
                                            m.Link,
                                            {
                                              to: e.href,
                                              onClick: function (t) {
                                                return p(t, e.href);
                                              },
                                            },
                                            e.label,
                                          ),
                                        );
                                      }),
                                    ),
                                  ),
                              ),
                            )
                          : d().createElement(
                              k.motion.div,
                              { key: e.href, variants: R },
                              d().createElement(
                                m.Link,
                                {
                                  to: e.href,
                                  className: T,
                                  onClick: function (t) {
                                    return p(t, e.href);
                                  },
                                },
                                e.label,
                              ),
                            );
                      }),
                    ),
                  ),
              ),
            ),
          );
        };
        var B = "Header-module__headerLink--czAPS",
          G = "Header-module__logo--cm5U6",
          q = "Header-module__logoContainer--Tnyxo",
          J = "Header-module__menuPopover--Jfx5v",
          U = "Header-module__menuRoot--nzIdi",
          V = "Header-module__navBar--FYux2",
          Y = "Header-module__phoneButton--AtkHm";
        function K(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        p.gsap.registerPlugin(f());
        const Z = function () {
          var e,
            t,
            n = (0, h.F)().isMobile,
            i = (0, m.useLocation)().pathname,
            o = (0, m.useNavigate)(),
            s = (0, u.useRef)(null),
            g = (0, u.useRef)(null),
            w = (0, u.useRef)(null),
            E =
              ((e = (0, u.useState)(!1)),
              (t = 2),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
                (function (e, t) {
                  var n =
                    null == e
                      ? null
                      : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                  if (null != n) {
                    var r,
                      i,
                      a,
                      o,
                      l = [],
                      s = !0,
                      c = !1;
                    try {
                      if (((a = (n = n.call(e)).next), 0 === t)) {
                        if (Object(n) !== n) return;
                        s = !1;
                      } else
                        for (
                          ;
                          !(s = (r = a.call(n)).done) &&
                          (l.push(r.value), l.length !== t);
                          s = !0
                        );
                    } catch (e) {
                      ((c = !0), (i = e));
                    } finally {
                      try {
                        if (
                          !s &&
                          null != n.return &&
                          ((o = n.return()), Object(o) !== o)
                        )
                          return;
                      } finally {
                        if (c) throw i;
                      }
                    }
                    return l;
                  }
                })(e, t) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return K(e, t);
                    var n = {}.toString.call(e).slice(8, -1);
                    return (
                      "Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(e)
                        : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? K(e, t)
                          : void 0
                    );
                  }
                })(e, t) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                })()),
            x = E[0],
            P = E[1],
            k = (0, u.useRef)(null);
          ((0, u.useEffect)(function () {
            var e = s.current,
              t = p.gsap.fromTo(
                e,
                { yPercent: 0 },
                { yPercent: -100, duration: 0.4, paused: !0 },
              );
            return (
              (w.current = f().create({
                start: 0,
                end: "max",
                onUpdate: function (e) {
                  -1 === e.direction ? t.reverse() : t.play();
                },
              })),
              function () {
                var e;
                null === (e = w.current) || void 0 === e || e.kill();
              }
            );
          }, []),
            (0, u.useEffect)(
              function () {
                (p.gsap.to(s.current, { yPercent: 0, duration: 0.4 }),
                  f().refresh());
              },
              [i],
            ),
            (0, u.useEffect)(
              function () {
                P(!1);
              },
              [i],
            ));
          var O = function () {
              (k.current && clearTimeout(k.current), P(!0));
            },
            C = function () {
              k.current = setTimeout(function () {
                P(!1);
              }, 150);
            };
          return d().createElement(
            a(),
            { position: "fixed", ref: s },
            d().createElement(
              c(),
              { container: !0, size: 12, alignItems: "center" },
              d().createElement(
                c(),
                { size: { xs: 6, sm: 6, md: 2, lg: 2 }, className: q },
                d().createElement("img", {
                  src: v,
                  className: G,
                  alt: "Glocal LPO",
                  onClick: function () {
                    o("/");
                  },
                }),
              ),
              n
                ? d().createElement(
                    c(),
                    {
                      size: { xs: 6, sm: 6, md: 0, lg: 0 },
                      justifyContent: "flex-end",
                      container: !0,
                    },
                    d().createElement(H, null),
                  )
                : d().createElement(
                    d().Fragment,
                    null,
                    d().createElement(
                      c(),
                      { size: { xs: 0, sm: 0, md: 8, lg: 8 } },
                      d().createElement(
                        "div",
                        { className: V },
                        d().createElement(
                          m.Link,
                          {
                            to: y.J.home.href,
                            "data-replace": y.J.home.label,
                            className: B,
                          },
                          d().createElement("span", null, y.J.home.label),
                        ),
                        d().createElement(
                          m.Link,
                          {
                            to: y.J.about.href,
                            "data-replace": y.J.about.label,
                            className: B,
                          },
                          d().createElement("span", null, y.J.about.label),
                        ),
                        d().createElement(
                          m.Link,
                          {
                            to: y.J.services.href,
                            "data-replace": y.J.services.label,
                            className: B,
                            onMouseEnter: O,
                            onMouseLeave: C,
                            ref: g,
                          },
                          d().createElement("span", null, y.J.services.label),
                        ),
                        d().createElement(
                          m.Link,
                          {
                            to: y.J["contact-us"].href,
                            "data-replace": y.J["contact-us"].label,
                            className: B,
                          },
                          d().createElement(
                            "span",
                            null,
                            y.J["contact-us"].label,
                          ),
                        ),
                        d().createElement(
                          m.Link,
                          {
                            to: y.J.blog.href,
                            "data-replace": y.J.blog.label,
                            className: r.footerLink,
                          },
                          d().createElement("span", null, y.J.blog.label),
                        ),
                      ),
                    ),
                    d().createElement(
                      c(),
                      { size: { xs: 0, sm: 0, md: 2, lg: 2 } },
                      d().createElement(
                        "a",
                        { href: "tel:+1 650 407 2112", className: Y },
                        d().createElement(b.Es, null),
                        "+1 (650) 407 2112",
                      ),
                    ),
                    d().createElement(
                      l(),
                      {
                        id: "simple-menu",
                        anchorEl: g.current,
                        open: x,
                        onClose: C,
                        disableScrollLock: !0,
                        disableRestoreFocus: !0,
                        sx: { pointerEvents: "none" },
                        PaperProps: {
                          sx: { pointerEvents: "auto" },
                          onMouseEnter: O,
                          onMouseLeave: C,
                        },
                        anchorOrigin: {
                          vertical: "bottom",
                          horizontal: "center",
                        },
                        transformOrigin: {
                          vertical: "top",
                          horizontal: "center",
                        },
                        classes: { paper: J, root: U },
                      },
                      d().createElement(S, null),
                    ),
                  ),
            ),
          );
        };
      },
      9017(e, t, n) {
        (n.d(t, {
          iK: () => o.A,
          FN: () => v,
          DH: () => Y,
          DZ: () => s,
          z9: () => l,
          aF: () => ie,
          Dk: () => d,
          mB: () => x,
        }),
          n(354));
        var r = n(2015),
          i = n.n(r),
          a = n(4822),
          o = n(4098);
        const l = function (e) {
            var t = e.to,
              n = e.delay,
              r = e.className,
              l = void 0 === r ? "" : r,
              s = e.children;
            return i().createElement(
              o.A.FadeUp,
              { direction: "up", delay: n, style: { display: "inline-block" } },
              i().createElement(
                a.Link,
                {
                  to: t,
                  className: ""
                    .concat("LinkButton-module__button--u5bOy", " ")
                    .concat(l),
                },
                s,
              ),
            );
          },
          s = function (e) {
            var t = e.variant,
              n = void 0 === t ? "primary" : t,
              r = e.className,
              a = void 0 === r ? "" : r,
              l = e.direction,
              s = void 0 === l ? "up" : l,
              c = e.component,
              u = void 0 === c ? "h2" : c,
              d = e.children;
            if ("primary" === n) {
              var m = u;
              return i().createElement(
                o.A.FadeUp,
                { direction: s },
                i().createElement(
                  m,
                  {
                    className: ""
                      .concat("Heading-module__primaryHeading--K9qYp", " ")
                      .concat(a),
                  },
                  d,
                ),
              );
            }
            return i().createElement(
              o.A.FadeUp,
              { direction: s },
              i().createElement(
                "h2",
                {
                  className: ""
                    .concat("Heading-module__secondaryHeading--F9DoK", " ")
                    .concat(a),
                },
                d,
              ),
            );
          };
        n(1713);
        var c = n(9730),
          u = n.n(c);
        const d = function (e) {
            var t = e.icon,
              n = e.heading,
              r = e.text,
              a = e.direction,
              l = void 0 === a ? "right" : a,
              s = e.delay,
              c = void 0 === s ? "0" : s;
            return i().createElement(
              u(),
              { size: 6, className: "QualityBox-module__serviceBox--yuDr7" },
              i().createElement(
                o.A.FadeUp,
                { direction: l, delay: c },
                i().createElement(
                  "div",
                  { className: "QualityBox-module__serviceIcon--rNYQ3" },
                  i().createElement("img", { src: t, alt: "" }),
                ),
                i().createElement(
                  "div",
                  { className: "QualityBox-module__serviceHeading--Gk_aq" },
                  n,
                ),
                i().createElement("div", null, r),
              ),
            );
          },
          m = require("react-spring");
        function p(e) {
          return (
            (p =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            p(e)
          );
        }
        function g(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  i,
                  a,
                  o,
                  l = [],
                  s = !0,
                  c = !1;
                try {
                  if (((a = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = a.call(n)).done) &&
                      (l.push(r.value), l.length !== t);
                      s = !0
                    );
                } catch (e) {
                  ((c = !0), (i = e));
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((o = n.return()), Object(o) !== o)
                    )
                      return;
                  } finally {
                    if (c) throw i;
                  }
                }
                return l;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return f(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? f(e, t)
                      : void 0
                );
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        function f(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function h(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function y(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? h(Object(n), !0).forEach(function (t) {
                  b(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : h(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        }
        function b(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != p(e) || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != p(n)) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return String(e);
              })(e);
              return "symbol" == p(t) ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const v = function (e) {
          var t = e.cards,
            a = e.offset,
            o = e.showArrows,
            l = t.map(function (e, t) {
              return y(
                y({}, e),
                {},
                {
                  onClick: function () {
                    return f(t);
                  },
                },
              );
            }),
            s = g((0, r.useState)(!1), 2),
            c = s[0],
            u = s[1],
            d = g((0, r.useState)(null), 2),
            p = d[0],
            f = d[1],
            h = g((0, r.useState)(l), 1)[0],
            b = g((0, r.useState)(null), 2),
            v = b[0],
            w = b[1],
            E = g((0, r.useState)(!1), 2),
            x = E[0],
            S = E[1];
          return (
            (0, r.useEffect)(function () {
              (S(!0),
                Promise.resolve()
                  .then(n.t.bind(n, 4954, 23))
                  .then(function (e) {
                    w(function () {
                      return e.default;
                    });
                  }));
            }, []),
            (0, r.useEffect)(
              function () {
                u(o);
              },
              [a, o],
            ),
            x && v
              ? i().createElement(v, {
                  slides: h,
                  goToSlide: p,
                  offsetRadius: 2,
                  showNavigation: c,
                  animationConfig: m.config.gentle,
                })
              : null
          );
        };
        var w = n(4215),
          E = n(5451);
        const x = function (e) {
          e.id;
          var t = e.title,
            n = e.image,
            r = e.description,
            o = e.mobileDescription,
            l = e.link,
            s = e.className,
            c = void 0 === s ? "" : s,
            d = e.linkText,
            m = void 0 === d ? "SEE HOW WE CAN HELP" : d,
            p = (0, E.F)().isMobile;
          return i().createElement(
            "div",
            {
              size: 12,
              className: ""
                .concat("ServiceCard-module__card--EVFyf", " ")
                .concat(c),
            },
            i().createElement(
              u(),
              { size: 12, justifyItems: "flex-start" },
              i().createElement(
                "div",
                { className: "ServiceCard-module__heading--KMb82" },
                t,
              ),
            ),
            i().createElement(
              u(),
              {
                size: 12,
                className: "ServiceCard-module__serviceImage--WL6PQ",
              },
              i().createElement("img", { src: n, alt: "" }),
            ),
            i().createElement(
              u(),
              { size: 12, className: "ServiceCard-module__serviceText--JtEHg" },
              p ? o : r,
            ),
            i().createElement(
              u(),
              { size: 12 },
              i().createElement(
                a.Link,
                {
                  to: l,
                  className: "ServiceCard-module__howWeCanHelpLink--HiDda",
                },
                i().createElement("span", null, m),
                i().createElement(w.ou, { fill: "#a4836f" }),
              ),
            ),
          );
        };
        var S = n(179),
          P = n.n(S),
          k = n(479),
          O = n.n(k),
          C = n(5642),
          j = n.n(C),
          A = n(6368),
          D = n.n(A);
        const T = require("react-hook-form"),
          I = require("@emailjs/browser");
        var _ = n.n(I);
        const L = require("@mui/material/TextField");
        var z = n.n(L),
          N = ["name", "control", "label", "rules"];
        function M() {
          return (
            (M = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
                }),
            M.apply(null, arguments)
          );
        }
        const F = function (e) {
          var t = e.name,
            n = e.control,
            r = e.label,
            a = e.rules,
            o = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                i = (function (e, t) {
                  if (null == e) return {};
                  var n = {};
                  for (var r in e)
                    if ({}.hasOwnProperty.call(e, r)) {
                      if (-1 !== t.indexOf(r)) continue;
                      n[r] = e[r];
                    }
                  return n;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++)
                  ((n = a[r]),
                    -1 === t.indexOf(n) &&
                      {}.propertyIsEnumerable.call(e, n) &&
                      (i[n] = e[n]));
              }
              return i;
            })(e, N);
          return i().createElement(T.Controller, {
            name: t,
            control: n,
            rules: a,
            render: function (e) {
              var t = e.field,
                n = t.onChange,
                a = t.value,
                l = e.fieldState.error;
              return i().createElement(
                z(),
                M(
                  {
                    helperText: l ? l.message : "",
                    size: "small",
                    error: !!l,
                    onChange: n,
                    value: a,
                    fullWidth: !0,
                    label: r,
                    variant: "outlined",
                  },
                  o,
                ),
              );
            },
          });
        };
        function W(e) {
          return (
            (W =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            W(e)
          );
        }
        function R() {
          var e,
            t,
            n = "function" == typeof Symbol ? Symbol : {},
            r = n.iterator || "@@iterator",
            i = n.toStringTag || "@@toStringTag";
          function a(n, r, i, a) {
            var s = r && r.prototype instanceof l ? r : l,
              c = Object.create(s.prototype);
            return (
              H(
                c,
                "_invoke",
                (function (n, r, i) {
                  var a,
                    l,
                    s,
                    c = 0,
                    u = i || [],
                    d = !1,
                    m = {
                      p: 0,
                      n: 0,
                      v: e,
                      a: p,
                      f: p.bind(e, 4),
                      d: function (t, n) {
                        return ((a = t), (l = 0), (s = e), (m.n = n), o);
                      },
                    };
                  function p(n, r) {
                    for (
                      l = n, s = r, t = 0;
                      !d && c && !i && t < u.length;
                      t++
                    ) {
                      var i,
                        a = u[t],
                        p = m.p,
                        g = a[2];
                      n > 3
                        ? (i = g === r) &&
                          ((s = a[(l = a[4]) ? 5 : ((l = 3), 3)]),
                          (a[4] = a[5] = e))
                        : a[0] <= p &&
                          ((i = n < 2 && p < a[1])
                            ? ((l = 0), (m.v = r), (m.n = a[1]))
                            : p < g &&
                              (i = n < 3 || a[0] > r || r > g) &&
                              ((a[4] = n), (a[5] = r), (m.n = g), (l = 0)));
                    }
                    if (i || n > 1) return o;
                    throw ((d = !0), r);
                  }
                  return function (i, u, g) {
                    if (c > 1) throw TypeError("Generator is already running");
                    for (
                      d && 1 === u && p(u, g), l = u, s = g;
                      (t = l < 2 ? e : s) || !d;
                    ) {
                      a ||
                        (l
                          ? l < 3
                            ? (l > 1 && (m.n = -1), p(l, s))
                            : (m.n = s)
                          : (m.v = s));
                      try {
                        if (((c = 2), a)) {
                          if ((l || (i = "next"), (t = a[i]))) {
                            if (!(t = t.call(a, s)))
                              throw TypeError(
                                "iterator result is not an object",
                              );
                            if (!t.done) return t;
                            ((s = t.value), l < 2 && (l = 0));
                          } else
                            (1 === l && (t = a.return) && t.call(a),
                              l < 2 &&
                                ((s = TypeError(
                                  "The iterator does not provide a '" +
                                    i +
                                    "' method",
                                )),
                                (l = 1)));
                          a = e;
                        } else if ((t = (d = m.n < 0) ? s : n.call(r, m)) !== o)
                          break;
                      } catch (t) {
                        ((a = e), (l = 1), (s = t));
                      } finally {
                        c = 1;
                      }
                    }
                    return { value: t, done: d };
                  };
                })(n, i, a),
                !0,
              ),
              c
            );
          }
          var o = {};
          function l() {}
          function s() {}
          function c() {}
          t = Object.getPrototypeOf;
          var u = [][r]
              ? t(t([][r]()))
              : (H((t = {}), r, function () {
                  return this;
                }),
                t),
            d = (c.prototype = l.prototype = Object.create(u));
          function m(e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, c)
                : ((e.__proto__ = c), H(e, i, "GeneratorFunction")),
              (e.prototype = Object.create(d)),
              e
            );
          }
          return (
            (s.prototype = c),
            H(d, "constructor", c),
            H(c, "constructor", s),
            (s.displayName = "GeneratorFunction"),
            H(c, i, "GeneratorFunction"),
            H(d),
            H(d, i, "Generator"),
            H(d, r, function () {
              return this;
            }),
            H(d, "toString", function () {
              return "[object Generator]";
            }),
            (R = function () {
              return { w: a, m };
            })()
          );
        }
        function H(e, t, n, r) {
          var i = Object.defineProperty;
          try {
            i({}, "", {});
          } catch (e) {
            i = 0;
          }
          ((H = function (e, t, n, r) {
            function a(t, n) {
              H(e, t, function (e) {
                return this._invoke(t, n, e);
              });
            }
            t
              ? i
                ? i(e, t, {
                    value: n,
                    enumerable: !r,
                    configurable: !r,
                    writable: !r,
                  })
                : (e[t] = n)
              : (a("next", 0), a("throw", 1), a("return", 2));
          }),
            H(e, t, n, r));
        }
        function B(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            (t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r));
          }
          return n;
        }
        function G(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? B(Object(n), !0).forEach(function (t) {
                  q(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n),
                  )
                : B(Object(n)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t),
                    );
                  });
          }
          return e;
        }
        function q(e, t, n) {
          return (
            (t = (function (e) {
              var t = (function (e) {
                if ("object" != W(e) || !e) return e;
                var t = e[Symbol.toPrimitive];
                if (void 0 !== t) {
                  var n = t.call(e, "string");
                  if ("object" != W(n)) return n;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value.",
                  );
                }
                return String(e);
              })(e);
              return "symbol" == W(t) ? t : t + "";
            })(t)) in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function J(e, t, n, r, i, a, o) {
          try {
            var l = e[a](o),
              s = l.value;
          } catch (e) {
            return void n(e);
          }
          l.done ? t(s) : Promise.resolve(s).then(r, i);
        }
        function U(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n =
                null == e
                  ? null
                  : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != n) {
                var r,
                  i,
                  a,
                  o,
                  l = [],
                  s = !0,
                  c = !1;
                try {
                  if (((a = (n = n.call(e)).next), 0 === t)) {
                    if (Object(n) !== n) return;
                    s = !1;
                  } else
                    for (
                      ;
                      !(s = (r = a.call(n)).done) &&
                      (l.push(r.value), l.length !== t);
                      s = !0
                    );
                } catch (e) {
                  ((c = !0), (i = e));
                } finally {
                  try {
                    if (
                      !s &&
                      null != n.return &&
                      ((o = n.return()), Object(o) !== o)
                    )
                      return;
                  } finally {
                    if (c) throw i;
                  }
                }
                return l;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return V(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? V(e, t)
                      : void 0
                );
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        function V(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        const Y = function (e) {
            var t = e.section,
              n = U((0, r.useState)(!1), 2),
              o = n[0],
              l = n[1],
              c = U((0, r.useState)(""), 2),
              d = c[0],
              m = c[1],
              p = U((0, r.useState)(""), 2),
              g = p[0],
              f = p[1],
              h = (0, T.useForm)(),
              y = h.handleSubmit,
              b = h.control,
              v = h.formState.isSubmitting,
              E = h.reset,
              x = (0, a.useLocation)().pathname,
              S = (0, a.useNavigate)(),
              k = (function () {
                var e,
                  t =
                    ((e = R().m(function e(t) {
                      var n;
                      return R().w(
                        function (e) {
                          for (;;)
                            switch ((e.p = e.n)) {
                              case 0:
                                return (
                                  (e.p = 0),
                                  (e.n = 1),
                                  _().send(
                                    "service_5ukbpwr",
                                    "template_6ytxk8s",
                                    G(G({}, t), {}, { page_url: x }),
                                    "QpkBmnT4LJ4PGyWTX",
                                  )
                                );
                              case 1:
                                (f("success"), E(), S("/thank-you"), (e.n = 3));
                                break;
                              case 2:
                                ((e.p = 2),
                                  (n = e.v),
                                  console.error("EmailJS Error:", n),
                                  f("error"),
                                  m(
                                    "Failed to send message. Please try again later.",
                                  ));
                              case 3:
                                l(!0);
                              case 4:
                                return e.a(2);
                            }
                        },
                        e,
                        null,
                        [[0, 2]],
                      );
                    })),
                    function () {
                      var t = this,
                        n = arguments;
                      return new Promise(function (r, i) {
                        var a = e.apply(t, n);
                        function o(e) {
                          J(a, r, i, o, l, "next", e);
                        }
                        function l(e) {
                          J(a, r, i, o, l, "throw", e);
                        }
                        o(void 0);
                      });
                    });
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
              C = function () {
                l(!1);
              };
            return i().createElement(
              P(),
              {
                maxWidth: "xl",
                className:
                  "contact" === t
                    ? "ContactForm-module__contactForm--wcqqP"
                    : "",
              },
              i().createElement(
                u(),
                {
                  container: !0,
                  className: "ContactForm-module__commonContainer--EkXjO",
                  spacing: 12,
                  alignItems: "flex-start",
                },
                i().createElement(
                  u(),
                  { size: { md: 12, lg: 4 } },
                  i().createElement(
                    s,
                    {
                      className: "ContactForm-module__getInTouchHeading--XcBTb",
                    },
                    "Get In Touch",
                  ),
                  i().createElement(
                    "div",
                    { className: "ContactForm-module__formHeading--JPkZ4" },
                    "You Focus on Winning, We Take Care of the Rest.",
                  ),
                  i().createElement(
                    "div",
                    { className: "ContactForm-module__formText--tCIzq" },
                    "At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management.",
                  ),
                ),
                i().createElement(
                  u(),
                  { container: !0, size: { md: 12, lg: 8 } },
                  i().createElement(
                    "form",
                    { onSubmit: y(k) },
                    i().createElement(
                      u(),
                      { container: !0, size: 12 },
                      i().createElement(
                        u(),
                        {
                          size: 12,
                          className:
                            "ContactForm-module__requiredFieldTitle--y85sx",
                        },
                        "All the fields marked with * are required",
                      ),
                      i().createElement(
                        u(),
                        { size: 12, container: !0, spacing: 3 },
                        i().createElement(
                          u(),
                          { size: { xs: 12, md: 6 } },
                          i().createElement(F, {
                            control: b,
                            name: "first_name",
                            label: "FIRST NAME",
                            fullWidth: !0,
                            variant: "standard",
                            rules: { required: "First name is required" },
                          }),
                        ),
                        i().createElement(
                          u(),
                          { size: { xs: 12, md: 6 } },
                          i().createElement(F, {
                            control: b,
                            name: "last_name",
                            label: "LAST NAME",
                            fullWidth: !0,
                            variant: "standard",
                            rules: { required: "Last name is required" },
                          }),
                        ),
                        i().createElement(
                          u(),
                          { size: { xs: 12, md: 6 } },
                          i().createElement(F, {
                            control: b,
                            name: "email",
                            label: "EMAIL",
                            type: "email",
                            fullWidth: !0,
                            variant: "standard",
                            rules: {
                              required: "Email is required",
                              pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email",
                              },
                            },
                          }),
                        ),
                        i().createElement(
                          u(),
                          { size: { xs: 12, md: 6 } },
                          i().createElement(F, {
                            control: b,
                            name: "company",
                            label: "COMPANY",
                            fullWidth: !0,
                            variant: "standard",
                            rules: { required: "Company is required" },
                          }),
                        ),
                        i().createElement(
                          u(),
                          { size: { xs: 12, md: 6 } },
                          i().createElement(F, {
                            control: b,
                            name: "job_title",
                            label: "JOB TITLE",
                            fullWidth: !0,
                            variant: "standard",
                            rules: { required: "Job title is required" },
                          }),
                        ),
                        i().createElement(
                          u(),
                          { size: { xs: 12, md: 6 } },
                          i().createElement(F, {
                            control: b,
                            name: "phone",
                            label: "PHONE",
                            fullWidth: !0,
                            variant: "standard",
                            rules: { required: "Phone is required" },
                          }),
                        ),
                        i().createElement(
                          u(),
                          { size: 12 },
                          i().createElement(F, {
                            control: b,
                            name: "message",
                            label:
                              "PLEASE DESCRIBE THE TYPE OF SERVICE YOU ARE INTERESTED IN",
                            fullWidth: !0,
                            variant: "standard",
                            rules: { required: "This field is required" },
                          }),
                        ),
                      ),
                      i().createElement(
                        u(),
                        {
                          size: 12,
                          className: "ContactForm-module__submitWrapper--mczY4",
                        },
                        i().createElement(
                          D(),
                          { type: "submit", disabled: v },
                          v
                            ? i().createElement(w.mj, {
                                className: "ContactForm-module__loader--LEqQo",
                              })
                            : i().createElement(w.ou, {
                                fill: "#564847",
                                className:
                                  "ContactForm-module__formSubmitButton--iOlZY",
                              }),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              i().createElement(
                O(),
                {
                  open: o,
                  autoHideDuration: 5e3,
                  onClose: C,
                  anchorOrigin: { horizontal: "center", vertical: "top" },
                },
                i().createElement(
                  j(),
                  {
                    onClose: C,
                    severity: g,
                    variant: "filled",
                    sx: { width: "100%" },
                  },
                  d,
                ),
              ),
            );
          },
          K = require("@mui/material/Modal");
        var Z = n.n(K),
          Q = n(6989),
          X = n.n(Q);
        const $ = require("@mui/material/Fade");
        var ee = n.n($);
        const te = require("@mui/material/Backdrop");
        var ne = n.n(te),
          re = { boxShadow: 24, p: 4 };
        const ie = function (e) {
          var t = e.onClose,
            n = e.open,
            r = e.children;
          return i().createElement(
            Z(),
            {
              "aria-labelledby": "spring-modal-title",
              "aria-describedby": "spring-modal-description",
              open: n,
              onClose: t,
              closeAfterTransition: !0,
              slots: { backdrop: ne() },
              slotProps: {
                backdrop: {
                  TransitionComponent: ee(),
                  "backdrop-filter": "blur(9.5px)",
                },
              },
            },
            i().createElement(
              ee(),
              { in: n },
              i().createElement(
                X(),
                { sx: re, className: "Modal-module__box--f4G7K" },
                i().createElement(w.US, {
                  className: "Modal-module__closeIcon--OkD_e",
                  onClick: t,
                }),
                r,
              ),
            ),
          );
        };
      },
      5451(e, t, n) {
        n.d(t, { F: () => l, Y: () => o });
        var r = n(2015),
          i = n.n(r),
          a = (0, r.createContext)(null),
          o = function (e) {
            var t = e.value,
              n = e.children;
            return i().createElement(a.Provider, { value: t }, n);
          },
          l = function () {
            var e = (0, r.useContext)(a);
            if (!e)
              throw new Error("useDevice must be used within a DeviceProvider");
            return e;
          };
      },
      3555(e, t, n) {
        n.d(t, { J: () => r });
        var r = {
          home: { label: "Home", href: "/" },
          about: { label: "About Us", href: "/about" },
          services: { label: "Services", href: "/services" },
          "contact-us": { label: "Contact Us", href: "/contact-us" },
          blog: { label: "Blog", href: "/blog" },
          faq: { label: "FAQs", href: "/faq" },
          "real-estate-litigation": {
            label: "Real Estate Litigation",
            href: "/services/real-estate-litigation",
          },
          "personal-injury": {
            label: "Personal Injury",
            href: "/services/personal-injury",
          },
          "estate-planning-probate": {
            label: "Estate Planning & Probate",
            href: "/services/estate-planning-probate",
          },
          "employee-law": {
            label: "Employment Law",
            href: "/services/employee-law",
          },
          "workers-compensation": {
            label: "Workers Compensation",
            href: "/services/workers-compensation",
          },
          contracts: { label: "Contracts", href: "/services/contracts" },
          "business-litigation-support": {
            label: "Business Litigation Support",
            href: "/services/business-litigation-support",
          },
          immigration: { label: "Immigration", href: "/services/immigration" },
          "family-law": { label: "Family Law", href: "/services/family-law" },
          bankruptcy: { label: "Bankruptcy", href: "/services/bankruptcy" },
          "intellectual-property": {
            label: "Intellectual Property",
            href: "/services/intellectual-property",
          },
          "criminal-law": {
            label: "Criminal Law",
            href: "/services/criminal-law",
          },
          "terms-of-service": {
            label: "Terms of Service",
            href: "/terms-of-service",
          },
          "privacy-policy": {
            label: "Privacy Policy",
            href: "/privacy-policy",
          },
          "cookie-settings": {
            label: "Cookie Settings",
            href: "/cookie-settings",
          },
        };
      },
      5339(e, t, n) {
        n.d(t, { CX: () => w, FZ: () => v, jb: () => b });
        var r = n(2015),
          i = n.n(r),
          a = n(1925),
          o = n(2026),
          l = n(7863),
          s = n(1868),
          c = n(2921),
          u = n(5806),
          d = n(3851),
          m = n(2240),
          p = n(4461),
          g = n(8537),
          f = n(7484),
          h = n(9467),
          y = n(3555),
          b = {
            "business-litigation-support": {
              title: "Business Litigation Support",
              metaTitle:
                "Litigation Support Services for Law Firms | Glocal LPO",
              metaDescription:
                "Glocal LPO delivers reliable litigation support services for law firms, reducing costs while ensuring fast turnaround and compliance-driven legal assistance.",
              metaKeywords:
                "Litigation support services, business legal solutions",
              heading: i().createElement(
                i().Fragment,
                null,
                "Strategic Litigation ",
                i().createElement("br", null),
                " Support Services",
              ),
              accordionTitle:
                "Expert Business Litigation Support Services for Every Stage:",
              background: n(566),
              backgroundPosition: "top center",
              description: {
                mainDescription:
                  "Accuracy is the foundation of our approach — we perform thorough document reviews to meticulously safeguard your business interests.",
                smallDesription:
                  "We provide comprehensive litigation support across all facets of business law, including meticulous document review, discovery analysis, contract disputes, intellectual property matters, shareholder conflicts, franchise agreement issues, non-compete enforcement, and more. Our goal is to ensure your business interests are safeguarded at every stage of the legal process, with strategies designed to protect and advance your rights.",
              },
              accordianItems: [
                {
                  header: {
                    icon: n(664),
                    title: "Business Litigation Solutions",
                  },
                  content: {
                    heading:
                      "Precision is key — we meticulously review every document to safeguard your interests.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "With a track record of handling complex business litigation matters, we leverage deep legal expertise and strategic insight to protect your business interests and resolve disputes efficiently.",
                    listItems: [
                      "Business Litigation Support: Comprehensive assistance for all business-related legal challenges.",
                      "Document Review: Thorough review and analysis of key documents to ensure accuracy and compliance.",
                      "Discovery Documents Analysis: In-depth examination of discovery documents to uncover critical information.",
                      "Business Disputes & Litigation: Expert support in resolving a wide range of business conflicts.",
                      "Contract Disputes: Resolving disagreements related to breach, interpretation, and enforcement of contracts.",
                      "Breach of Contract: Legal strategies to address violations of contract terms and protect your interests.",
                      "Business Partnership Disputes: Mediation and litigation support for conflicts between business partners.",
                      "Intellectual Property Disputes: Defending and enforcing intellectual property rights, including patents, trademarks, and copyrights.",
                      "Shareholder Disputes: Legal guidance and representation in shareholder conflicts, ensuring fair resolution.",
                      "Franchise Agreement Disputes: Resolving conflicts related to franchise agreements, ensuring compliance with terms.",
                      "Non-Compete Agreements: Legal support for enforcing or challenging non-compete clauses in employment contracts.",
                    ],
                  },
                },
              ],
            },
            "personal-injury": {
              title: "Personal Injury",
              metaTitle:
                "Personal Injury Paralegal Support for Law Firms | Glocal LPO",
              metaDescription:
                "Need reliable personal injury paralegal support? Glocal LPO helps law firms streamline claims, organize files, and prepare cases efficiently.",
              metaKeywords:
                "personal injury paralegal, personal injury legal assistant",
              heading: i().createElement(
                i().Fragment,
                null,
                "Powerful Personal ",
                i().createElement("br", null),
                " Injury Paralegal ",
                i().createElement("br", null),
                " Support",
              ),
              accordionTitle:
                "Seamless Personal Injury Paralegal & Legal Assistant Services:",
              background: n(2891),
              backgroundPosition: "top center",
              description: {
                mainDescription:
                  "Injury-related litigation entails exacting case analysis, exhaustive legal research, tactical document preparation and personalized support.",
                smallDesription:
                  "At Glocal LPO, we provide full-spectrum legal support, enabling law firms and attorneys to optimize case management with streamlined execution and process oversight.",
              },
              casesSpecializedIn: [
                {
                  id: "01",
                  title: "Motor Vehicle Accidents",
                  description:
                    "Car, truck, bicycle and motorcycle accident claims.",
                  image: n(3873),
                },
                {
                  id: "02",
                  title: "Medical Negligence & Malpractice",
                  description: "Ensuring Compliance with Legal Standards.",
                  image: n(631),
                },
                {
                  id: "03",
                  title: "Slip & Fall or Trip & Fall Cases",
                  description: "Highlighting Maximum Injury Compensation.",
                  image: n(7118),
                },
                {
                  id: "04",
                  title: "Dog Bite",
                  description:
                    "Nerve damage, disfigurement, or long-term medical issues.",
                  image: n(4059),
                },
                {
                  id: "05",
                  title: "Brain & Spinal Cord Injuries",
                  description:
                    "Securing Justice for Those with Devastating Injuries.",
                  image: n(5687),
                },
                {
                  id: "06",
                  title: "Workplace & Construction Accidents",
                  description:
                    "Protecting Legal Rights for Workplace Injuries.",
                  image: n(9689),
                },
              ],
              accordianItems: [
                {
                  header: {
                    icon: n(664),
                    title: "Client Onboarding & Case Merit Evaluation",
                  },
                  content: {
                    heading: "Trust begins with a compelling first impression",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "Flexible, Scalable Solutions - We can manage large caseloads across personal injury, medical malpractice, workers' compensation, and other complex legal areas with expert legal review and a thorough pre-screening.",
                    listItems: [
                      "Client Intakes",
                      "Inquiries via phone/email",
                      "Fact checks",
                      "Filing on various case management tools",
                      "Client follow-ups & document collection",
                      "Letter of representation (LOR)",
                      "Workflow administration",
                      "Medical authorization letters (HIPPA)",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2291),
                    title: "Medical Record Retrieval & Summarization",
                  },
                  content: {
                    heading:
                      "Medical records - the linchpins of every personal injury claim's success.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "We streamline medical documentation process for law firms by reducing review time by half. We specifically hire competent healthcare professionals to assist the paralegals.",
                    listItems: [
                      "Retrieving & organizing medical records",
                      "Patient Record Extraction",
                      "Summarizing diagnosis & treatments",
                      "Creating medical chronologies & injury assessments",
                      "Medical History Compilation",
                      "Medical Billing Summarization",
                      "Privilege Logs",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(4714),
                    title: "Document Drafting & Discovery Support",
                  },
                  content: {
                    heading: "Precision in Words, Irrefutable Outcomes.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "Reduce overhead costs while gaining access to top-tier legal expertise and AI-powered analysis—customized to your firm's needs.",
                    listItems: [
                      "Demand letters",
                      "Mediation position papers",
                      "Petitions",
                      "Complaints & Pleadings",
                      "Motions",
                      "Drafting & responding to interrogatories",
                      "Requests for the production of documents",
                      "Requests for admissions",
                      "Interrogatories",
                      "Witness and exhibit lists",
                      "Subpoenas",
                      "Deposition summaries",
                      "Witness Expert Summaries",
                      "Initial & Expert Disclosures",
                      "Case and File Summaries",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(1221),
                    title:
                      "Legal Research, Case Law Review & Legal Interpretation",
                  },
                  content: {
                    heading:
                      "Well-Substantiated Research, Relevant Precedents, Strongest Claims.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "In-depth knowledge in platforms like Westlaw, Lexis Plus AI, Bloomberg Law, Clio, and many more...",
                    listItems: [
                      "Analyzing case law & statutes to support legal arguments",
                      "Drafting legal memoranda for attorneys' reference",
                      "Identifying relevant precedents to build a stronger case strategy",
                      "Researching on powerful and authentic platforms",
                      "Making Research ready before you arrive in your office",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2124),
                    title: "Litigation & Trial Support",
                  },
                  content: {
                    heading: "Well-equipped legal minds secure success.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "Glocal LPO sets the gold standard in legal outsourcing by engaging only the most qualified law graduates and seasoned lawyers for complex litigation assignments.",
                    listItems: [
                      "Pre-trial motion drafting",
                      "Exhibit preparation & evidence organization",
                      "Jury instruction drafting",
                      "Trial logistics coordination",
                    ],
                  },
                },
                {
                  header: { icon: n(2183), title: "Administrative Tasks" },
                  content: {
                    heading:
                      "Diligent Business administration underpins financial accountability.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "To secure your ongoing liquidity while eliminating unnecessary red tapes we carefully select professional having experience in supporting legal functions with unmatched expertise.",
                    listItems: [
                      "Legal time tracking & expense management",
                      "Invoice preparation & compliance checks",
                      "Billing audits to prevent revenue leakage",
                    ],
                  },
                },
              ],
            },
            "employee-law": {
              title: "Employment Law",
              metaTitle: "Employment Law Outsourcing Solutions | Glocal LPO",
              metaDescription:
                "Glocal LPO offers employment law outsourcing services including legal research, contract drafting, and compliance support for attorneys.",
              metaKeywords:
                "employment law outsourcing, outsourcing employment law",
              heading: i().createElement(
                i().Fragment,
                null,
                "Ensuring Fair Workplaces ",
                i().createElement("br", null),
                " & Compliance",
              ),
              accordionTitle: "Trusted Outsourcing Employment Law Services:",
              background: n(7991),
              backgroundPosition: "top center",
              description: {
                mainDescription:
                  "We provide comprehensive employment law support to attorneys across the U.S., ensuring businesses and employees navigate complex legal landscapes with confidence.",
                smallDesription:
                  "Our team of experienced Paralegals assist in all aspects of employment law, from compliance and contract drafting to litigation support and workplace dispute resolution. With in-depth expertise in federal and state employment regulations, we deliver precise, strategic, and efficient legal assistance to safeguard workplace rights and employer interests.",
              },
              casesSpecializedIn: [
                {
                  id: "01",
                  title: "Workplace Discrimination & Harassment",
                  description: "Title VII, ADA, ADEA, EEOC claims",
                  image: n(6404),
                },
                {
                  id: "02",
                  title: "Wage & Hour Compliance",
                  description:
                    "FLSA, overtime disputes, misclassification issues.",
                  image: n(4406),
                },
                {
                  id: "03",
                  title: "Wrongful Termination & Retaliation",
                  description: "Whistleblower protection, at-will exceptions.",
                  image: n(3330),
                },
                {
                  id: "04",
                  title: "Employment Contracts & Agreements",
                  description: "Offer letters, NDAs, non-compete clauses.",
                  image: n(3619),
                },
                {
                  id: "05",
                  title: "Workplace Investigations & Compliance",
                  description: "Employee handbooks, training policies.",
                  image: n(499),
                },
              ],
              accordianItems: [
                {
                  header: {
                    icon: n(664),
                    title: "Pre-Litigation & Case Investigation",
                  },
                  content: {
                    heading:
                      "Deduce, Defend, and Resolve - Before the Game is Afoot!",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "Our keen-eyed paralegals, much like a well-trained Baker Street force, leave no stone unturned in the realm of employment law—be it ensuring compliance, drafting contracts, aiding in litigation, or unraveling the mysteries of workplace disputes with precision and tact.",
                    listItems: [
                      "Legal Research & Case Assessment: Analyzing employment claims, reviewing company policies, and assessing regulatory compliance.",
                      "EEOC & State Agency Filings: Drafting complaints, position statements, and response to agency investigations.",
                      "Discovery Requests & Deposition Preparation: Drafting interrogatories, requests for production, and preparing witnesses.",
                      "Administrative Hearings Representation: Support in proceedings before labor boards, unemployment agencies, and OSHA.",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2291),
                    title: "Litigation & Motion Practice",
                  },
                  content: {
                    heading: "Building rock-solid Cases, with no loose ends!",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "Our team of experts carefully analyzes legal disputes, builds strong arguments, and ensures every motion is strategically planned to achieve the best outcome in employment law cases.",
                    listItems: [
                      "Complaints & Answer to Complaint: Drafting wrongful termination, harassment, discrimination, and wage dispute claims.",
                      "Motions for Summary Judgment & Dismissals: Strategizing legal defenses for employers or claimants.",
                      "Class Action Support: Wage and hour disputes, systemic discrimination, and mass layoff litigation.",
                      "Trial Preparation & Courtroom Support: Evidence compilation, trial briefs, and exhibit preparation.",
                    ],
                  },
                },
                {
                  header: { icon: n(4714), title: "Settlement & Resolution" },
                  content: {
                    heading:
                      "Through reason and dialogue, justice finds its rightful end.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "With precision, we dissect every legal dispute, construct unshakable arguments, and draft each motion with strategic foresight—ensuring that justice is not merely pursued, but logically and inevitably secured.",
                    listItems: [
                      "Mediation & Arbitration Agreements: Drafting enforceable alternative dispute resolution agreements.",
                      "Severance & Settlement Negotiations: Structuring fair and enforceable separation packages.",
                      "Final Judgments & Appeals: Identifying legal errors, preparing appellate briefs, and motion practice.",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(1221),
                    title:
                      "Employment Compliance & Advisory Services / Workplace Policies & Training",
                  },
                  content: {
                    heading: "By law's fair hand, we guard and guide.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "WE have the ability to scale resources up or down based on workload.",
                    listItems: [
                      "Employee Handbooks & Policies: Drafting compliant and updated workplace policies.",
                      "Harassment & Discrimination Training: Ensuring legal compliance with Title VII and state anti-discrimination laws.",
                      "OSHA & Workplace Safety Compliance: Risk mitigation strategies, safety protocols, and regulatory adherence.",
                      "Whistleblower & Retaliation Policies: Ensuring protections under SOX, Dodd-Frank, and federal statutes.",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2124),
                    title:
                      "Employment Compliance & Advisory Services / Wage & Hour Compliance",
                  },
                  content: {
                    heading:
                      "Balancing Rights, Regulating Wages, Ensuring Justice.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "Our seasned attrneys keep up with evolving wage laws and industry standards.",
                    listItems: [
                      "FLSA & State Wage Laws: Ensuring proper worker classification, overtime compliance, and payroll audits.",
                      "Independent Contractor Agreements: Structuring legally compliant work arrangements.",
                      "Collective Bargaining & Union Relations: Advising on NLRA compliance and union contract negotiations.",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2183),
                    title:
                      "Employment Compliance & Advisory Services / Employee Benefits & Leave Policies",
                  },
                  content: {
                    heading: "Rights and Benefits for Every Worker!",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "We specialize in jurisdiction-specific employment laws, ensuring our legal support withstands the highest level of scrutiny and  aid in protecting employee's rights effectively.",
                    listItems: [
                      "FMLA & ADA Compliance: Structuring leave policies that comply with federal and state laws.",
                      "ERISA & Retirement Plan Compliance: Drafting benefit plans and ensuring regulatory compliance.",
                      "Paid Leave & Unemployment Benefits: Advising on evolving state and federal paid leave mandates.",
                    ],
                  },
                },
              ],
            },
            "workers-compensation": {
              title: "Workers' Compensation & Workplace Injury Support",
              metaTitle: "Best Workers Compensation Law Firms | Glocal LPO",
              metaDescription:
                "Looking for reliable workers compensation law firms? Get expert legal guidance and claim the compensation you deserve after a workplace injury.",
              metaKeywords:
                "workers compensation law firms, workers compensation florida",
              heading: i().createElement(
                i().Fragment,
                null,
                "Justice endures, even in toil ",
                i().createElement("br", null),
                " and trial.",
              ),
              accordionTitle:
                "Expert Support from Workers Compensation Law Firms:",
              background: n(6631),
              backgroundPosition: "top center",
              description: {
                mainDescription:
                  "Our comprehensive paralegal support to attorneys handling workers' compensation cases across the U.S. ",
                smallDesription:
                  "Our experienced legal Paralegals, assist in all aspects of workplace injury claims, from case preparation and medical record analysis to litigation support and settlement negotiations. With expertise in federal and state workers' compensation laws, we deliver precise, strategic, and efficient assistance to help attorneys advocate for their clients, whether employees seeking benefits or employers defending claims.",
              },
              casesSpecializedIn: [
                {
                  id: "01",
                  title: "Claim Filing & Case Management",
                  description:
                    "Initial filings, documentation, and administrative procedures.",
                  image: n(1928),
                },
                {
                  id: "02",
                  title: "Employer Defense",
                  description:
                    "Fraudulent claims, return-to-work policies, and premium disputes.",
                  image: n(8298),
                },
                {
                  id: "03",
                  title: "Medical Evidence & Disability Evaluations",
                  description:
                    " IME coordination, medical record reviews, and disability rating analysis.",
                  image: n(5475),
                },
                {
                  id: "04",
                  title: "Third-Party Liability Claims",
                  description:
                    "Subrogation and concurrent personal injury claims.",
                  image: n(2926),
                },
                {
                  id: "05",
                  title: "Settlement & Appeals Support",
                  description:
                    "Benefit calculations, mediation preparation, and appellate briefs.",
                  image: n(5480),
                },
              ],
              accordianItems: [
                {
                  header: {
                    icon: n(664),
                    title: "Claim Preparation & Investigation",
                  },
                  content: {
                    heading: "Diligence in Inquiry, Precision in Justice.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "Our Paralegals have been trained by attorneys from maximum jurisdictions including Hawaii.",
                    listItems: [
                      "Legal Research & Case Assessment: Conducting research on workplace injury claims, employer policies, and state-specific regulations.",
                      "Claim Form Preparation & Filings: Assisting in completing and filing workers' compensation claims and employer responses.",
                      "Medical Record Review & Evidence Compilation: Summarizing treatment records, accident reports, and impairment ratings.",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2291),
                    title: "Litigation & Motion Practice",
                  },
                  content: {
                    heading: "No Claim Unexamined, No Truth Overlooked.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "Our paralegals are law graduates that have worked in diversified legal matters and suits.",
                    listItems: [
                      "Petitions & Responses: Assisting attorneys in drafting petitions, motions, and responses to benefit denials.",
                      "Depositions & Discovery: Drafting interrogatories, document requests, and preparing deposition outlines.",
                      "Medical & Vocational Expert Coordination: Assisting in obtaining expert opinions and vocational assessments.",
                      "Trial Preparation & Courtroom Support: Compiling evidence, drafting trial briefs, and preparing exhibits.",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(4714),
                    title: "Settlement & Appeals Support",
                  },
                  content: {
                    heading:
                      "Resolving Disputes with Logic, Pursuing Justice with Deduction.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "The team have witnessed live settlemet disputes done by the attorneys.",
                    listItems: [
                      "Settlement Agreements & Benefit Calculations: Assisting in structuring fair and legally sound compensation agreements.",
                      "Mediation & Arbitration Support: Preparing documents and summaries for alternative dispute resolution proceedings.",
                      "Appeal Briefs & Post-Trial Motions: Conducting legal research and assisting in drafting appellate filings.",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(1221),
                    title: "Employer Compliance & Risk Management",
                  },
                  content: {
                    heading: "We uphold order and mitigate uncertainties.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "The Assciates are trained in OSHA-compliant safety policies, protocols, and training programs.",
                    listItems: [
                      "Workplace Safety & OSHA Compliance: Assisting in reviewing employer safety policies and regulatory adherence.",
                      "Return-to-Work & Light Duty Policies: Supporting structured return-to-work programs and accommodations.",
                      "Fraud Investigation & Defense: Assisting in identifying fraudulent claims and employer liability risks.",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2124),
                    title: "Medical & Disability Benefit Coordination",
                  },
                  content: {
                    heading:
                      "Ensuring dignity, support, and security for every worker in need.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "Our team of healthcare proofessionals suppoort the attorneys in assessing complex medical recrds.",
                    listItems: [
                      "Independent Medical Evaluations (IME) Support: Coordinating medical evaluations and obtaining expert testimony.",
                      "Temporary & Permanent Disability Benefits: Assisting in calculations and disputes over benefit entitlements.",
                      "Vocational Rehabilitation & Retraining Programs: Researching alternative employment and retraining options for injured workers.",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2183),
                    title: "Insurance & Third-Party Liability Matters",
                  },
                  content: {
                    heading:
                      "Protecting rights, ensuring accountability, and securing a just future.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "Under the guidance of seasoned attorneys, our paralegals leverage years of experience to assist U.S. law firms in safeguarding the rights of both injured workers and employers with precision and expertise.",
                    listItems: [
                      "Subrogation & Third-Party Claims: Assisting attorneys in identifying responsible third parties for cost recovery.",
                      "Workers' Compensation Insurance Disputes: Supporting attorneys in premium audits and policy coverage issues.",
                    ],
                  },
                },
              ],
            },
            "estate-planning-probate": {
              title: "Estate Planning & Probate",
              metaTitle:
                "Estate Planning and Probate Services for Law Firms | Glocal LPO",
              metaDescription:
                "Glocal LPO provides estate planning and probate services for law firms, including wills, trusts, drafting, and estate administration support.",
              metaKeywords: "estate planning and probate, estate planning laws",
              heading: i().createElement(
                i().Fragment,
                null,
                "Your Client’s Legacy, ",
                i().createElement("br", null),
                "Safeguarded by ",
                i().createElement("br", null),
                "Estate Planning Laws",
              ),
              accordionTitle:
                "Guiding You Through Estate Planning & Probate Services:",
              background: n(6413),
              backgroundPosition: "top center",
              description: {
                mainDescription:
                  "Estate planning isn't just paperwork—it's a protective strategy. ",
                smallDesription:
                  "We craft tailored documents that safeguard assets and minimize risk. When probate begins, our expertise ensures a smooth transition—handling court procedures, validating wills, and managing claims with precision. From planning to resolution, we protect inheritances, expedite the process, and ensure full legal compliance—securing your client's legacy at every step.",
              },
              accordianItems: [
                {
                  header: { icon: n(664), title: "Estate Planning" },
                  content: {
                    heading:
                      "Our Brilliant Lawyers draft superior Courtroom Documents",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "Backed by seasoned estate planning specialists, we safeguard your clients' interests while delivering efficient, accurate, and hassle-free probate back-end support.",
                    listItems: [
                      "Revocable Living Trusts- Flexible legal arrangement efficiently done to avoid probate",
                      "Irrevocable Trusts - Shielding assets from creditors and lawsuits.",
                      "Last Will and Testament - Ensuring wills are compliant with Estate Planning laws. ",
                      "Durable Power of Attorney - Expertly crafted POAs ensuring secure delegation of financial and legal authority.",
                      "Health Care Directives - Tailored healthcare directives that reflect client's medical wishes with legal clarity.",
                      "HIPAA Authorization Forms - Regulation-compliant authorizations enabling smooth access to medical records.",
                      "Pour-Over Wills - Facilitating seamless transfer of non-trust assets to beneficiaries upon death.",
                      "Living Wills - Explicitly documented medical preferences for a secure and clear end-of-life plan.",
                      "Beneficiary Designations - Well-structured records guaranteeing direct and efficient beneficiary asset distribution.",
                      "Guardianship Designations - Official designation of reliable guardians to ensure the care and security of minors and dependents.",
                    ],
                  },
                },
                {
                  header: { icon: n(2183), title: "Probate" },
                  content: {
                    heading:
                      "Seamless Probate Documents prepped without any Pitfalls",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "Ensuring smooth estate transitions with expert-backed, accurate, and efficient probate support, protecting your clients every step of the way.",
                    listItems: [
                      "Petition for Probate - Assist with drafting court petitions to initiate probate and validate wills seamlessly.",
                      "Letters Testamentary / Letters of Administration - Precise document preparation with the available documents to secure court approval for estate management.",
                      "Inventory and Appraisal - Detailed asset documentation and valuation to ensure accurate estate accounting.",
                      "Notice to Creditors - Timely preparation and filing of legal notices to manage estate liabilities efficiently.",
                      "Accounting and Final Distribution - Comprehensive estate accounting and final asset distribution reports, ensuring compliance.",
                      "Petition for Final Settlement - Flawless documentation to close probate smoothly and distribute assets per court approval.",
                      "Waivers and Consents - Professionally prepared legal waivers to streamline estate administration and avoid disputes.",
                      "Claims Against Estate - Efficient handling of creditor claims, ensuring proper validation and resolution.",
                      "Affidavits of Heirship - Legally sound affidavits to establish heirs and facilitate estate transfers without delays.",
                    ],
                  },
                },
              ],
            },
            "real-estate-litigation": {
              title: "Real Estate",
              metaTitle:
                "Real Estate Litigation Law Services for Law Firms | Glocal LPO",
              metaDescription:
                "Glocal LPO provides real estate litigation law support including research, document drafting, and case management for attorneys and law firms.",
              metaKeywords:
                "real estate litigation law, real estate litigation",
              heading: i().createElement(
                i().Fragment,
                null,
                "Backed by Real Estate ",
                i().createElement("br", null),
                " Litigation Law",
              ),
              accordionTitle: "Real Estate Litigation Services We Offer:",
              background: n(247),
              backgroundPosition: "top center",
              description: {
                mainDescription:
                  "A strong estate plan isn't just paperwork—it's a fortress.",
                smallDesription:
                  "We structure your client's documents relating to assets, highlight points to eliminate the risks therein, and ensure your strategies stand unrefuted.",
              },
              accordianItems: [
                {
                  header: {
                    icon: n(664),
                    title: "Authoritative Legal documents that we draft",
                  },
                  content: {
                    heading:
                      "Drafting the Documents That Drive Justice Forward.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "We don't just assist in resolving disputes. We redefine the benchmarks. From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future. When the stakes are high, we deliver results.",
                    listItems: [
                      "Complaint and Answer - Expertise in outlining the legal claims, facts, and the damages sought.",
                      "Motion for Summary Judgment- Disputes involving contracts, foreclosure proceedings, landlord-tenant issues, and property title claims.",
                      "Discovery Requests (Interrogatories, Requests for Production, Requests for Admission) - We help in uncovering key facts about property ownership, contracts, financial transactions, and compliance with laws.",
                      "Notices of Deposition and Subpoenas - Testimony and documents from parties and third parties, such as real estate agents, lenders, or municipal authorities.",
                      "Settlement Agreements - Disputes relating to property sales, leases, construction defects, foreclosures, boundary disputes, and landlord-tenant issues.",
                      "Trial Briefs - Summarization of relevant facts, evidence, and applicable laws.",
                      "Appeal Documents - Identify legal errors ",
                      "Lis Pendens - Title disputes, Foreclosures, Breach of real estate and Easements & boundary disputes. ",
                      "Quiet Title Actions - Establishing a single, undisputed titleholder and eliminating challenges from third parties and fraudulent, or disputed claims. ",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2183),
                    title: "Technology and Tools we use",
                  },
                  content: {
                    heading:
                      "Tech-powered perfectionists: We know the tools that matter",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Clio",
                      "MyCase",
                      "Smokeball",
                      "WealthCounsel",
                      "Westlaw",
                      "LexisNexis",
                      "DocuSign",
                      "Hot Docs",
                    ],
                  },
                },
              ],
            },
            "family-law": {
              title: "Family Law",
              metaTitle:
                "Family Law Litigation Services for Law Firms | Glocal LPO",
              metaDescription:
                "Glocal LPO supports law firms with reliable family law litigation services, helping manage support cases with confidence.",
              metaKeywords: "family law litigation, family law legal documents",
              heading: i().createElement(
                i().Fragment,
                null,
                "Navigating Challenges ",
                i().createElement("br", null),
                " with Strength and ",
                i().createElement("br", null),
                " Sensitivity",
              ),
              accordionTitle:
                "Family Law Litigation & Legal Documents Services:",
              background: n(1316),
              backgroundPosition: "top center",
              description: {
                mainDescription:
                  "Our family law paralegals play a crucial role in managing legal and administrative aspects of cases—from client intake to final agreements. ",
                smallDesription:
                  "They draft legal documents, conduct research, manage timelines, and coordinate with clients and legal teams, all while navigating the emotional nuances of family matters.",
              },
              casesSpecializedIn: [
                {
                  id: "01",
                  title: "Divorce & Legal Separation",
                  description:
                    "Contested Divorce, Uncontested Divorce, Legal Separation, Annulment, Division of Property & Assets.",
                  image: n(5525),
                },
                {
                  id: "02",
                  title: "Child Custody & Visitation",
                  description:
                    "Initial Custody Orders, Parenting Plans, Custody Modifications, Guardianship.",
                  image: n(4207),
                },
                {
                  id: "03",
                  title: "Child Support",
                  description:
                    "Establishing Child Support Orders, Modifications of Support, Enforcement Actions.",
                  image: n(2423),
                },
                {
                  id: "04",
                  title: "Spousal Support",
                  description:
                    "Temporary & Permanent Support Orders, Modifications.",
                  image: n(490),
                },
                {
                  id: "05",
                  title: "Paternity",
                  description:
                    "Establishing Paternity, Custody and Child Support Proceedings.",
                  image: n(3287),
                },
                {
                  id: "06",
                  title: "Domestic Violence & Protective Orders",
                  description:
                    "Emergency Protective Orders (EPO), Restraining Orders (Temporary & Permanent).",
                  image: n(9281),
                },
                {
                  id: "07",
                  title: "Prenuptial & Postnuptial Agreements",
                  description: "Drafting and Reviewing Agreements.",
                  image: n(3837),
                },
                {
                  id: "08",
                  title: "Guardianship & Conservatorship",
                  description:
                    "Guardianship for Minors, Guardianship of Adults.",
                  image: n(8825),
                },
              ],
              accordianItems: [
                {
                  header: { icon: n(664), title: "Pleadings & Court Filings" },
                  content: {
                    heading:
                      "To fight justice, we inscribe your clients' cause with the precision of the scribe, presenting your pleadings to the court as decrees of fate.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Petition for Divorce / Legal Separation / Annulment",
                      "Response to Petition",
                      "Motion for Temporary Orders (Custody, Support, Property, etc.)",
                      "Affidavits / Declarations (e.g., Financial Disclosure)",
                      "Summons and Proof of Service",
                      "Default Judgment Package",
                      "Notice of Hearing",
                      "Findings of Fact & Conclusions of Law",
                      "Final Judgment / Decree of Divorce",
                      "Orders After Hearing",
                    ],
                  },
                },
                {
                  header: { icon: n(2291), title: "Discovery Documents" },
                  content: {
                    heading:
                      "With a keen eye and a steady hand, we dig up the docs that'll show you the truth.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Interrogatories",
                      "Request for Production of Documents",
                      "Request for Admissions",
                      "Subpoenas for Records (e.g., financial, employment, medical)",
                      "Deposition Notices & Summaries",
                    ],
                  },
                },
                {
                  header: { icon: n(4714), title: "Financial Documents" },
                  content: {
                    heading:
                      "As a samurai guards his blade, we help you guard the integrity of the financial documents, bringing justice and balance.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Income and Expense Declaration",
                      "Asset & Debt Disclosure Statements",
                      "Property Division Worksheets",
                      "Child Support Calculation Worksheets",
                      "Spousal Support Guideline Calculations",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(1221),
                    title: "Custody & Support Agreements",
                  },
                  content: {
                    heading:
                      "We process your financial documents, bringing order and fairness to your case.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Parenting Plans / Custody Agreements",
                      "Child Support Agreements",
                      "Visitation Schedules",
                      "Custody Modification Petitions|",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2124),
                    title: "Settlement Agreements & Contracts",
                  },
                  content: {
                    heading:
                      "Turning negotiations into agreements — we ensure the settlement is both fair and binding.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Marital Settlement Agreements (MSA)",
                      "Divorce Settlement Agreements",
                      "Prenuptial Agreements",
                      "Postnuptial Agreements",
                      "Stipulations (Custody, Support, Property)",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2124),
                    title: "Protective Orders & Domestic Violence Filings",
                  },
                  content: {
                    heading:
                      "In times of crisis, we step in with expertise —trust us for legal needs in filing protective orders, ensuring safety and peace.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Temporary Restraining Orders (TRO)",
                      "Domestic Violence Restraining Orders (DVRO)",
                      "Emergency Protective Orders (EPO)",
                      "Supporting Affidavits / Declarations",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2183),
                    title: "Guardianship & Adoption Documents",
                  },
                  content: {
                    heading:
                      "We ensure every guardianship and adoption document is handled with grace.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Petition for Guardianship",
                      "Letters of Guardianship",
                      "Consent to Adoption Forms",
                      "Petition for Adoption",
                      "Petition for Termination of Parental Rights",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2183),
                    title: "Case Management & Organization",
                  },
                  content: {
                    heading:
                      "Efficient management, organized strategy — we streamline your case to achieve the best possible outcome.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Opening, Organizing, and Maintaining Client Files (Digital & Physical)",
                      "Monitoring Case Progress & Deadlines",
                      "Drafting Case Summaries and Case Status Reports",
                    ],
                  },
                },
                {
                  header: { icon: n(2183), title: "Calendar & Scheduling" },
                  content: {
                    heading:
                      "Driven by precision, we schedule with accuracy — keeping your goals on time and on target.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Managing Court Hearings, Deadlines, and Appointments",
                      "Scheduling Depositions, Mediations, and Client Meetings",
                    ],
                  },
                },
                {
                  header: { icon: n(2183), title: "Client Communication" },
                  content: {
                    heading:
                      "Through word and will, we uphold the sacred bond of client and counsel",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Gathering Personal, Financial, and Supporting Documents",
                      "Providing Case Updates and Clarifications",
                      "Drafting Routine Correspondence (Letters, Emails)",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2183),
                    title: "Court Filing & Service of Documents",
                  },
                  content: {
                    heading:
                      "From desk to docket, we deliver every document flawlessly and promptly.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "E-Filing Pleadings & Documents with Court Platforms (e.g., Odyssey eFile)",
                      "Coordinating Personal Service of Summons and Legal Documents",
                      "Filing Proof of Service with the Court",
                    ],
                  },
                },
                {
                  header: { icon: n(2183), title: "Legal Research" },
                  content: {
                    heading: "With grit, we chart the clearest path to truth.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Reviewing State Family Law Statutes and Local Court Rules",
                      "Researching Child & Spousal Support Guidelines",
                      "Analyzing Case Precedents and Court Rulings",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2183),
                    title: "Document Review & Trial Preparation",
                  },
                  content: {
                    heading:
                      "Every detail reviewed, every strategy prepared — your trial, ready for success.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Proofreading Legal Documents for Accuracy & Consistency",
                      "Compiling Evidence & Exhibits for Hearings/Trials",
                      "Preparing Trial Binders & Hearing Folders",
                      "Petition for Adoption",
                      "Summarizing Deposition Transcripts and Testimonies",
                    ],
                  },
                },
                {
                  header: { icon: n(2183), title: "Billing & Timekeeping" },
                  content: {
                    heading:
                      "From start to finish, we keep time and billing aligned for a smooth, transparent process.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Recording Attorney and Paralegal Billable Hours",
                      "Tracking Case-Related Expenses and Costs",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2183),
                    title: "Software & Tools Commonly Used",
                  },
                  content: {
                    heading: "Punchline / Heading here...",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "Glocal LPO provides skilled paralegal support backed by deep knowledge of family law, jurisdiction-specific rules, and efficient case handling. ",
                    listItems: [
                      "Family Law Calculators: DissoMaster, FamilySoft (Child & Spousal Support)",
                      "Case Management: Clio, MyCase, PracticePanther",
                      "Court E-Filing Systems: Odyssey eFile, One Legal, State-Specific Portals",
                      "Document Processing: Microsoft Word, Excel, Adobe Acrobat",
                      "Legal Research Platforms: Westlaw, LexisNexis, Case text",
                    ],
                  },
                },
              ],
            },
            immigration: {
              title: "Immigration",
              metaTitle:
                "Immigration Paralegal Services for Law Firms | Glocal LPO",
              metaDescription:
                "Glocal LPO provides immigration paralegal services for law firms, handling petitions, USCIS filings, case preparation, and document review.",
              metaKeywords:
                "Immigration paralegal services, immigration legal service providers",
              heading: i().createElement(
                i().Fragment,
                null,
                "Guiding Every Step ",
                i().createElement("br", null),
                " of Your Case",
              ),
              accordionTitle: "Immigration Legal Services for Your Cases:",
              background: n(4033),
              backgroundPosition: "top center",
              description: {
                mainDescription:
                  "We are a committed team of immigration paralegals with in-depth experience across humanitarian, family-based, and employment-based immigration matters. ",
                smallDesription:
                  "Over past three years, we have supported various law firms across the US in numerous cases including I-360 VAWA petitions, I-130 family petitions, and employment visas such as EB-1, EB-2 NIW, and O-1. Our work also extends to U visa applications, Special Immigrant Juvenile (SIJ) petitions, and both affirmative and defensive asylum filings.",
              },
              casesSpecializedIn: [
                {
                  id: "01",
                  title: "Strategic Immigration Roadmaps",
                  description:
                    "Preparation of comprehensive strategy and supporting documentation.",
                  image: n(165),
                },
                {
                  id: "02",
                  title: "Persuasive Petition Drafting",
                  description: "Drafting of compelling petition letters",
                  image: n(5726),
                },
                {
                  id: "03",
                  title: "Organized Case File Management",
                  description: "Organize and prepare immigration case files.",
                  image: n(3185),
                },
                {
                  id: "04",
                  title: "Insightful Legal Research",
                  description:
                    "Research on evolving immigration statutes and guidelines, offering actionable insights to help shape robust legal strategies.",
                  image: n(4135),
                },
                {
                  id: "05",
                  title: "Process Simplification & Clarity",
                  description:
                    "Simplifying complex immigration procedures —clarifying steps, timelines, and expectations to strengthen trust and satisfaction.",
                  image: n(8899),
                },
              ],
              accordianItems: [
                {
                  header: {
                    icon: n(664),
                    title:
                      "Essential Immigration Law Services by Glocal LPO Team",
                  },
                  content: {
                    heading:
                      "Efficient. Accurate. Immigration Support That Delivers.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Strategic Immigration Roadmaps: Preparation of comprehensive strategy and supporting documentation",
                      "Persuasive Petition Drafting: Drafting of compelling petition letters",
                      "Organized Case File Management: Organize and prepare immigration case files",
                      "Insightful Legal Research: Research on evolving immigration statutes and guidelines, offering actionable insights to help shape robust legal strategies.",
                      "Process Simplification & Clarity: Simplifying complex immigration procedures —clarifying steps, timelines, and expectations to strengthen trust and satisfaction.",
                      "Reponses to Requests for Evidence (RFEs) - full procedural compliance with USCIS, EOIR, and NYSCEF standards.",
                      "I-130 and I-485 to H-1B petitions -  ll major immigration forms carefully and correctly, following up-to-date legal rules.",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2291),
                    title:
                      "We help streamline your legal workflow by expertly drafting critical documents",
                  },
                  content: {
                    heading:
                      "We transform confusion into clarity, guiding your case to victory.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Petition Letters - Professionally prepared submissions for various visa and immigration requests.",
                      "Self-Petition Letters - Tailored petitions, including those under VAWA and similar provisions.",
                      "VAWA 360 & I-600 Memos - Detailed legal memorandums supporting VAWA and intercountry adoption cases.",
                      "Asylum Briefs & Declarations - Compelling narratives and legal briefs to strengthen asylum applications.",
                      "Affidavits & Reference Letters - Drafting third-party testimonies and recommendation letters.",
                      "Cover Letters & Motions - Strategically crafted submissions and legal motions.",
                      "Checklists & Interview Questions - Curated content lists and questionnaires to support case preparation.",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(4714),
                    title: "We Support Across Immigration Case Types",
                  },
                  content: {
                    heading:
                      "From asylum to naturalization, we provide expert support for every immigration need.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Adjustment of Status (AOS)",
                      "O-1 and EB-1 Visas for Extraordinary Ability and Professionals",
                      "Asylum and Humanitarian Relief Cases",
                      "P-3 Visas for Culturally Unique Artists and Performers",
                      "Family-Based Petitions and Sponsorships",
                      "In-depth Legal Research to Support Case Strategy and Briefs",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(1221),
                    title: "Administrative & Client Coordination Services ",
                  },
                  content: {
                    heading:
                      "From the first step to the final stage, we assist you with commitment and know-how",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      " We are Cost-Efficient and have Scalable Support with U.S. Immigration Law Trained Legal Professionals. ",
                    listItems: [
                      "Case Tracking & File Management - Maintain organized, up-to-date case files at every stage.",
                      "Client Follow-ups - Reach out for missing documents, clarifications, and signatures.",
                      "Hearing Preparation - Assist in prepping clients for interviews, hearings, and court appearances.",
                      "P-3 Visas for Culturally Unique Artists and Performers",
                      "Email & Documentation Support - Draft and manage client emails, track submissions, and organize support materials.",
                    ],
                  },
                },
              ],
            },
            "intellectual-property": {
              title: "Intellectual Property",
              metaTitle:
                "Outsource Support for Intellectual Property Law Firms | Glocal LPO",
              metaDescription:
                "Outsource legal support for intellectual property law firms to Glocal LPO. We assist with IP research, documentation, and case management.",
              metaKeywords:
                "intellectual property law firm, patent annuity service",
              heading: i().createElement(
                i().Fragment,
                null,
                "Safeguarding Rights ",
                i().createElement("br", null),
                " and Intellectual ",
                i().createElement("br", null),
                " Property Law Firm",
              ),
              accordionTitle:
                "Expert Solutions for Intellectual Property Law Firms:",
              background: n(7235),
              backgroundPosition: "top center",
              description: {
                mainDescription:
                  "Strengthening IP Rights with Expert Legal Support",
                smallDesription:
                  "We provide outsourced support to attorneys by drafting precise legal documents that safeguard their clients' intellectual property rights, ensuring trademarks, patents, and copyrights remain legally secure. Our services ensure accuracy, compliance with evolving regulations, and robust protection for intellectual property assets.",
              },
              accordianItems: [
                {
                  header: { icon: n(664), title: "IP Litigation:" },
                  content: {
                    heading: "IP Battles Won with Detailed Records Review",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "With deep expertise in trademark, patent, and copyright disputes, we provide cost-effective, scalable solutions that enhance case outcomes and streamline legal operations.",
                    listItems: [
                      "Complaint: Drafting and filing legal complaints to address IP violations.",
                      "Answers: Providing well-structured responses to legal complaints.",
                      "Counterclaims: Filing counterclaims to challenge baseless allegations.",
                      "Temporary Restraining Order (TRO): Obtaining TROs to prevent ongoing infringement.",
                      "TRO Memo: Preparing memos to justify the need for TROs.",
                      "Motions: Drafting various motions, including dismissals and injunctions.",
                      "Notices: Issuing legal notices for compliance and litigation.",
                      "Client Declaration: Assisting clients in preparing legal declarations.",
                      "Default Judgment: Securing judgments against non-responsive parties.",
                      "DJ Memo and Motions: Preparing declaratory judgment memos and motions.",
                      "Discovery Requests and Responses: Managing discovery to gather crucial case information.",
                      "Case Review: Analyzing cases to develop effective legal strategies.",
                      "Damage Negotiations: Negotiating settlements for damages.",
                      "Document Review: Ensuring accuracy and compliance in legal documents.",
                      "Legal Research: Conducting thorough research to support litigation.",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2291),
                    title:
                      "Registrations | Our expertise in USPTO procedures guarantees accuracy and efficiency.",
                  },
                  content: {
                    heading: "Where records speak, false claims falter.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "We help new law firms in securing IP registrations by preparing and filing trademarks, patents, and copyrights, ensuring legal protection for your innovations and brand identity.",
                    listItems: [
                      "Search: Identifying potential conflicts before filing applications.",
                      "Drafting the Application: Creating clear and legally sound applications.",
                      "Filing the Application: Submitting applications to USPTO and relevant authorities.",
                      "Examination: Responding to office actions and objections.",
                      "Prosecution: Managing responses and hearings to ensure approval.",
                      "Grant: Facilitating the final approval and formalities.",
                      "Identification of Trade Secrets: Safeguarding proprietary business information.",
                      "Confidentiality Agreements: Drafting enforceable agreements to protect sensitive data.",
                      "Security Measures: Advising on best practices to prevent IP theft.",
                      "Enforcement: Implementing strategies to protect and defend IP rights.",
                    ],
                  },
                },
              ],
            },
            "criminal-law": {
              title: "Criminal Law",
              metaTitle:
                "Outsource Criminal Case Management Services | Glocal LPO",
              metaDescription:
                "Outsource criminal case management to Glocal LPO for accurate documentation, legal research, and organized case workflows for attorneys and law firms.",
              metaKeywords:
                "criminal case management, criminal paralegal services",
              heading: i().createElement(
                i().Fragment,
                null,
                "Behind Every Legal ",
                i().createElement("br", null),
                " Victory",
              ),
              accordionTitle:
                "Expert Criminal Case Management & Paralegal Services:",
              background: n(6259),
              backgroundPosition: "top center",
              description: {
                mainDescription:
                  "We provide comprehensive criminal defense paralegal support to attorneys across US. ",
                smallDesription:
                  "Our team of experienced legal professionals assists at every stage of the criminal proceedings, from case analysis and pre-trial preparation to plea negotiations and courtroom advocacy. With a deep understanding of US criminal law and procedural requirements, we deliver precise, efficient, and strategic support, enabling defense counsel to navigate cases effectively and uphold their clients' rights.",
              },
              casesSpecializedIn: [
                {
                  id: "01",
                  title: "Misdemeanors & Felonies",
                  description:
                    "Comprehensive defense for both minor and serious criminal charges.",
                  image: n(1403),
                },
                {
                  id: "02",
                  title: "DUI, DWI & Traffic Offenses",
                  description:
                    "Strategic support for driving-related violations and license protection.",
                  image: n(7341),
                },
                {
                  id: "03",
                  title: "Disorderly Conduct & Civic Unrest",
                  description:
                    "Defending rights in public disturbance and protest-related offenses.",
                  image: n(3011),
                },
                {
                  id: "04",
                  title: "Drug Possession & Illicit Trade",
                  description:
                    "Expert support in drug charges and controlled substance cases.",
                  image: n(9857),
                },
                {
                  id: "05",
                  title: "Theft, Burglary & White-Collar Intrigue",
                  description:
                    "Smart defense for property theft and financial fraud allegations.",
                  image: n(2058),
                },
                {
                  id: "06",
                  title: "Domestic Violence & Assaults",
                  description:
                    "Tactful handling of emotionally sensitive personal violence matters.",
                  image: n(8722),
                },
                {
                  id: "07",
                  title: "Homicide & Murder",
                  description:
                    "Focused legal aid in high-stakes life and death cases.",
                  image: n(4688),
                },
              ],
              accordianItems: [
                {
                  header: {
                    icon: n(664),
                    title: "Pre-Trial Assistance & Case Investigation",
                  },
                  content: {
                    heading:
                      "Ere the first word be spoken in court, we have already forged the path to thy triumph.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Legal Research & Case Law Analysis: In-depth research on relevant statutes, precedents, and legal arguments.",
                      "Case File Review: Analyzing police reports, forensic evidence, witness statements, and discovery materials.",
                      "Fact Investigation & Evidence Gathering: Identifying key weaknesses in the prosecution's case and compiling strong defense materials.",
                      "Drafting Pre-Trial Motions: Suppression motions, bail applications, motions to dismiss, and requests for evidence disclosure.",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2291),
                    title: "Plea Negotiations & Legal Documentation",
                  },
                  content: {
                    heading:
                      "Through eloquent negotiation and firm documentation, we secure thy cause before the law.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Plea Agreement Support: Drafting and reviewing plea agreements, analyzing potential legal consequences, and assisting in negotiations.",
                      "Mitigation Strategies: Compiling character references, rehabilitation evidence, and alternative sentencing recommendations.",
                      "Sentencing Memoranda & Legal Briefs: Crafting persuasive sentencing arguments and post-conviction filings.",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(4714),
                    title: "Trial Preparation & Litigation Support",
                  },
                  content: {
                    heading:
                      "In the service of justice, we prepare with prayerful diligence, supporting your cause through every challenge.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Trial Strategy Development: Assisting attorneys in formulating strong legal arguments and structuring the case for trial.",
                      "Exhibit & Evidence Organization: Preparing trial binders, timelines, and visual exhibits for courtroom presentations.",
                      "Witness Preparation: Coordinating expert witness testimony and drafting direct and cross-examination questions.",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(1221),
                    title: "Post-Trial & Appeal Support",
                  },
                  content: {
                    heading:
                      "When the trial ends, our support continues — we uphold your cause in appeal, trusting in the grace of justice.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "With knowledge as our spear and precision as our armor, unlike generic outsourcing providers, we specialize in jurisdiction-specific laws.",
                    listItems: [
                      "Post-Conviction Relief Motions: Preparing motions for sentence modifications, appeals, and expungements.",
                      "Case File Review & Appeal Briefs: Assisting in drafting appellate briefs and reviewing trial transcripts for errors.",
                    ],
                  },
                },
              ],
            },
            bankruptcy: {
              title: "Bankruptcy",
              metaTitle: "Outsource Legal Services for Bankruptcy | Glocal LPO",
              metaDescription:
                "Glocal LPO provides reliable legal services for bankruptcy cases. Support for research, documentation, and case preparation for attorneys and law firms.",
              metaKeywords:
                "legal services for bankruptcy, outsourcing employment law",
              heading: i().createElement(
                i().Fragment,
                null,
                "For Affordable ",
                i().createElement("br", null),
                " Bankruptcy Law Firm",
              ),
              accordionTitle:
                "Legal Services for Bankruptcy, Built for Recovery:",
              background: n(8646),
              backgroundPosition: "top center",
              description: {
                mainDescription:
                  "Strategic Legal Support for Debt Relief and Financial Recovery",
                smallDesription:
                  "Whether your client is an individual, business, or family struggling with debt, we navigate the legal pathways to financial freedom with precision and expertise. We help you conclude the legal options to eliminate or restructure their debts through available records. ",
              },
              accordianItems: [
                {
                  header: {
                    icon: n(2291),
                    title:
                      "Chapter 7 Bankruptcy: Fresh Start Through Liquidation",
                  },
                  content: {
                    heading: "Our bankruptcy litigators, turn iron to genius!",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Petition preparation (including Schedules A-J)",
                      "Statement of Financial Affairs",
                      "Statement of Intention",
                      "Means Test Calculation",
                      "Notice to Creditors",
                      "Reaffirmation Agreements",
                      "Motion to Avoid Lien",
                      "Discharge of Debts",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(4714),
                    title: "Chapter 13 Bankruptcy: Structured Repayment Plans",
                  },
                  content: {
                    heading: "You draft the structure, we drive the success.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Chapter 13 Petition and Plan",
                      "Schedules A-J and Statement of Financial Affairs",
                      "Proof of Claim, Motions to Modify Plan, Incur Debt, and Avoid Lien",
                      "Discharge Orders",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(1221),
                    title: "Chapter 11 Bankruptcy: Business Reorganization",
                  },
                  content: {
                    heading:
                      "Structured by you, reorganized by us — for better, faster results.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "Voluntary Petitions, Schedules A-J, and Statements of Financial Affairs.",
                      "Disclosure Statements and Plans of Reorganization.",
                      "Motions for Use of Cash Collateral, Monthly Operating Reports, and Motions to Dismiss/Convert.",
                      "Confirmation Orders.",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2124),
                    title:
                      "Chapter 12 Bankruptcy: Family Farmer & Fisherman Support",
                  },
                  content: {
                    heading: "For Every growing Dream — We've Got Your Back.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "Our professionals specialize in bankruptcy laws, court procedures, and documentation and ensure filings are completed correctly and efficiently.",
                    listItems: [
                      "Petitions, chapter 12 plans, Schedules A-J, and Statements of financial affairs.",
                      "Motions for use of cash collateral, Motions to incur debt, and Motions to modify plans.",
                      "Confirmation orders.",
                    ],
                  },
                },
                {
                  header: { icon: n(2183), title: "Means Test & Eligibility" },
                  content: {
                    heading:
                      "We help you get the Means Test right — because almost right won't work.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "We accurately calculate and file Means Test forms, Statements of Current Monthly Income, and Disposable Income Calculations.",
                      "We also provide support for motions to challenge means test results.",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(2183),
                    title: "Wage Garnishment & Levy Protection",
                  },
                  content: {
                    heading:
                      "Your clients' money and their rights — we aim to help you protect both.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "Our team prioritizes clear communication and personalized support with full range of bankruptcy and foreclosure services.",
                    listItems: [
                      "Motions to Stop Wage Garnishment and Quash Garnishment",
                      "Claims of Exemption, Objections to Garnishment, and Release of Garnishment",
                      "Levy Release Forms",
                    ],
                  },
                },
              ],
            },
            contracts: {
              title: "Contracts",
              metaTitle: "Outsource Contract Drafting Services | Glocal LPO",
              metaDescription:
                "Glocal LPO offers reliable contract drafting services including legal agreements, document review, and customized contract preparation.",
              metaKeywords:
                "contract drafting services, Contract management, Legal research services, Litigation support",
              heading: i().createElement(
                i().Fragment,
                null,
                "Execution for Strong ",
                i().createElement("br", null),
                "Business Foundations",
              ),
              accordionTitle: "Expert Contract Drafting Services & Execution:",
              background: n(6258),
              backgroundPosition: "top center",
              description: {
                mainDescription:
                  "We provide comprehensive contract-related legal support to attorneys and businesses across the U.S, U.K, and Canada",
                smallDesription:
                  "Our team of seasoned legal professionals specializes in drafting, reviewing, negotiating, and managing contracts to ensure clarity, enforceability, and protection of your clients' interests. With a deep understanding of contract law and a commitment to precision, we deliver strategic solutions that minimize risk and maximize value.",
              },
              casesSpecializedIn: [
                {
                  id: "01",
                  title: "Contract Drafting & Review",
                  description:
                    "Crafting and scrutinizing agreements to ensure legal compliance and alignment with client goals.",
                  image: n(2457),
                },
                {
                  id: "02",
                  title: "Contract Negotiation",
                  description:
                    "Facilitating favorable terms and resolving disputes during negotiations.",
                  image: n(8903),
                },
                {
                  id: "03",
                  title: "Contract Administration",
                  description:
                    "Managing and tracking contracts to ensure compliance and performance.",
                  image: n(3960),
                },
                {
                  id: "04",
                  title: "Dispute Resolution",
                  description:
                    "Providing support for contract-related conflicts and litigation.",
                  image: n(7722),
                },
              ],
              accordianItems: [
                {
                  header: { icon: n(664), title: "Legal Documents" },
                  content: {
                    heading: "Strategic drafting. Uncompromising protection.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "1.1 Contract Drafting: Tailored agreements that reflect client objectives while ensuring legal enforceability.",
                      "1.2 Contract Review: Detailed analysis of existing contracts to identify risks, ambiguities, and opportunities for improvement.",
                      "1.3 Contract Negotiation Documents: Preparing counteroffers, term sheets, and negotiation briefs to secure favorable terms.",
                      "1.4 Amendments and Addendums: Modifying existing contracts to reflect changing circumstances or new agreements.",
                      "1.5 Termination Letters: Drafting legally sound notices to terminate contracts in compliance with applicable laws.",
                      "1.6 Non-Disclosure Agreements (NDAs): Protecting confidential information with robust and enforceable NDAs.",
                    ],
                  },
                },
                {
                  header: { icon: n(2291), title: "Client Interaction" },
                  content: {
                    heading:
                      "A contract is not just a law, but a trust we protect.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "2.1 Gathering Contract Requirements: Collaborating with clients to understand their needs and objectives.",
                      "2.2 Clarifying Contract Terms: Explaining complex legal language and implications to ensure informed decision-making.",
                      "2.3 Negotiating Contract Details: Advocating for clients' interests during negotiations to achieve balanced and favorable outcomes.",
                    ],
                  },
                },
                {
                  header: { icon: n(4714), title: "Contract Administration" },
                  content: {
                    heading:
                      "From deadlines to compliance lines, we keep your contract on track.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "3.1 Contract Management: Organizing and maintaining contracts for easy access and reference.",
                      "3.2 Contract Tracking: Monitoring key dates, obligations, and renewals to ensure compliance.",
                      "3.3 Compliance Monitoring: Ensuring all parties adhere to contractual terms and legal requirements.",
                      "3.4 Document Management: Securely storing and organizing contracts for future reference and audits.",
                    ],
                  },
                },
                {
                  header: {
                    icon: n(1221),
                    title: "Types of Contracts Handled",
                  },
                  content: {
                    heading:
                      "From the straightforward to the sophisticated — every contract is in trusted hands.",
                    smallHeading: "",
                    description: "",
                    listItems: [
                      "4.1 Business Contracts: Partnership agreements, joint ventures, and shareholder agreements.",
                      "4.2 Real Estate Contracts: Leases, purchase agreements, and development contracts.",
                      "4.3 Employment Agreements: Offer letters, non-compete agreements, and severance packages.",
                      "4.4 Vendor Contracts: Supplier agreements, procurement contracts, and service level agreements (SLAs).",
                      "4.5 Service Agreements: Consulting contracts, maintenance agreements, and outsourcing contracts.",
                      "4.6 Intellectual Property Licenses: Licensing agreements for patents, trademarks, and copyrights.",
                    ],
                  },
                },
                {
                  header: { icon: n(2124), title: "Related Services" },
                  content: {
                    heading:
                      "In the realm of contracts, we command the research, analyze with accuracy, and bring forth clarity.",
                    smallHeading: "Glocal's Distinctive Edge:",
                    description:
                      "We specialize in contract law and jurisdiction-specific requirements, ensuring that every document we produce is tailored to your clients' needs and stands up to legal scrutiny. Whether you need support with a single contract or ongoing contract management, we are here to provide the expertise and advocacy your clients deserve.",
                    listItems: [
                      "5.1 Legal Research Related to Contract Law: Providing insights into jurisdiction-specific contract laws and precedents.",
                      "5.2 Due Diligence Support for Contracts: Reviewing contracts during mergers, acquisitions, or other transactions.",
                      "5.3 Support for Contract Disputes: Assisting with breach of contract claims, enforcement actions, and dispute resolution.",
                    ],
                  },
                },
              ],
            },
          },
          v = [
            {
              id: "12",
              title: y.J["business-litigation-support"].label,
              link: y.J["business-litigation-support"].href,
              image: n(3851),
              description:
                "When business disputes arise, the right legal support can make or break the case. We provide strategic analysis, and well-founded legal groundwork to keep you ahead in your legal practice.",
              mobileDescription:
                "When business disputes arise, the right legal support can make or break the case. We provide strategic analysis, and well-founded legal groundwork to keep you ahead in your legal practice.",
            },
            {
              id: "02",
              title: y.J["personal-injury"].label,
              link: y.J["personal-injury"].href,
              image: n(2026),
              description:
                "Accidents happen, but accountability is non-negotiable. We provide end to end legal support with legal precision, ensuring your clients get the maximum compensation which they deserve.",
              mobileDescription:
                "Accidents happen, but accountability is non-negotiable. We provide end to end legal support with legal precision, ensuring your clients get the maximum compensation which they deserve.",
            },
            {
              id: "03",
              title: y.J["employee-law"].label,
              link: y.J["employee-law"].href,
              image: n(1868),
              description:
                "Whether it's discrimination, retaliation, or wrongful termination, we prepare foolproof legal documentation to ensure justice is served.",
              mobileDescription:
                "Whether it's discrimination, retaliation, or wrongful termination, we prepare foolproof legal documentation to ensure justice is served.",
            },
            {
              id: "04",
              title: y.J["workers-compensation"].label,
              link: y.J["workers-compensation"].href,
              image: n(2921),
              description:
                "From pre-trial to post-trial, we handle the documentation that ensures your claim is strong, your clients' rights are protected, and your case is foolproof.",
              mobileDescription:
                "From pre-trial to post-trial, we handle the documentation that ensures your claim is strong, your clients' rights are protected, and your case is foolproof.",
            },
            {
              id: "01",
              title: y.J["estate-planning-probate"].label,
              link: y.J["estate-planning-probate"].href,
              image: n(7863),
              description:
                "A strong estate plan isn't just paperwork—it's a fortress. We structure your client's documents relating to assets, highlight points to eliminate the risks therein, and ensure your strategies stand unrefuted.",
              mobileDescription:
                "A strong estate plan isn't just paperwork—it's a fortress. We structure your client's documents relating to assets, highlight points to eliminate the risks therein, and ensure your strategies stand unrefuted.",
            },
            {
              id: "05",
              title: y.J["real-estate-litigation"].label,
              link: y.J["real-estate-litigation"].href,
              image: n(1925),
              description:
                "From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future. When the stakes are high, we deliver results.",
              mobileDescription:
                "From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future. When the stakes are high, we deliver results.",
            },
            {
              id: "06",
              title: y.J["family-law"].label,
              link: y.J["family-law"].href,
              image: n(4461),
              description:
                "Family law isn't just legal—it's personal. We review the documents in each case with strategy, discretion, and an unwavering commitment to securing the best outcome for you.",
              mobileDescription:
                "Family law isn't just legal—it's personal. We review the documents in each case with strategy, discretion, and an unwavering commitment to securing the best outcome for you.",
            },
            {
              id: "07",
              title: y.J.immigration.label,
              link: y.J.immigration.href,
              image: n(2240),
              description:
                "Immigration is more than just paperwork—it's about securing the future. We prepare arguments, draft letters and fill forms with precision, ensuring a smooth, strategic path forward.",
              mobileDescription:
                "Immigration is more than just paperwork—it's about securing the future. We prepare arguments, draft letters and fill forms with precision, ensuring a smooth, strategic path forward.",
            },
            {
              id: "08",
              title: y.J["intellectual-property"].label,
              link: y.J["intellectual-property"].href,
              image: n(7484),
              description:
                "We support attorneys with watertight IP documentation—trademark, patent, and copyright filings that stand strong under scrutiny.",
              mobileDescription:
                "We support attorneys with watertight IP documentation—trademark, patent, and copyright filings that stand strong under scrutiny.",
            },
            {
              id: "09",
              title: y.J["criminal-law"].label,
              link: y.J["criminal-law"].href,
              image: n(9467),
              description:
                "We power defense attorneys with sharp, strategic paralegal support—from pre-trial prep to courtroom execution. Fast. Focused. Built to defend every right, every time.",
              mobileDescription:
                "We power defense attorneys with sharp, strategic paralegal support—from pre-trial prep to courtroom execution. Fast. Focused. Built to defend every right, every time.",
            },
            {
              id: "10",
              title: y.J.bankruptcy.label,
              link: y.J.bankruptcy.href,
              image: n(8537),
              description:
                "Whether your client is an individual, business, or family struggling with debt, we navigate the legal pathways to financial freedom with precision and expertise.",
              mobileDescription:
                "Whether your client is an individual, business, or family struggling with debt, we navigate the legal pathways to financial freedom with precision and expertise.",
            },
            {
              id: "11",
              title: y.J.contracts.label,
              link: y.J.contracts.href,
              image: n(5806),
              description:
                "From drafting to review, we ensure every contract puts your client in an advantageous position—clear, enforceable, and built to protect their interests.",
              mobileDescription:
                "From drafting to review, we ensure every contract puts your client in an advantageous position—clear, enforceable, and built to protect their interests.",
            },
          ],
          w = [
            {
              id: "12",
              title: "Business Litigation Support",
              description:
                "When business disputes arise, the right legal support can make or break the case. We provide strategic analysis, and well-founded legal groundwork to keep you ahead in your legal practice.",
              contentBoxTitle:
                "In business, the fine print is where battles are won.",
              link: y.J["business-litigation-support"].href,
              image: d,
              menuContent:
                "When disputes strike, our legal precision keeps your practice ahead.",
            },
            {
              id: "02",
              title: "Personal Injury",
              description:
                "Accidents happen, but accountability is non-negotiable. We provide end to end legal support with legal precision, ensuring your clients get the maximum compensation which they deserve.",
              contentBoxTitle:
                "Injury wasn't your clients' choice. Justice is.",
              link: y.J["personal-injury"].href,
              image: o,
              menuContent:
                "When accidents happen, we draft demand letters that demand justice.",
            },
            {
              id: "03",
              title: "Employment Law",
              description:
                "Whether it's discrimination, retaliation, or wrongful termination, we prepare foolproof legal documentation to ensure justice is served.",
              contentBoxTitle:
                "Your clients' rights aren't optional. They're enforceable.",
              link: y.J["employee-law"].href,
              image: s,
              menuContent:
                "Crafting impeccable legal documentation to fight discrimination, retaliation, and wrongful termination.",
            },
            {
              id: "04",
              title: "Workers Compensation",
              description:
                "From pre-trial to post-trial, we handle the documentation that ensures your claim is strong, your clients' rights are protected, and your case is foolproof.",
              contentBoxTitle:
                "Injured on the job? We make sure the law works for you.",
              link: y.J["workers-compensation"].href,
              image: c,
              menuContent:
                "Building foolproof workers' compensation cases with meticulous documentation from start to finish.",
            },
            {
              id: "01",
              title: "Estate Planning & Probate",
              description:
                "A strong estate plan isn't just paperwork—it's a fortress. We structure your client's documents relating to assets, highlight points to eliminate the risks therein, and ensure your strategies stand unrefuted.",
              contentBoxTitle:
                "Building Estate Plans That Stand the Test of Time.",
              link: y.J["estate-planning-probate"].href,
              image: l,
              menuContent:
                "Transforming estate plans into unbreakable fortresses with precise documentation and risk mitigation.",
            },
            {
              id: "05",
              title: "Real Estate Litigation",
              description:
                "From property disputes to estate planning, we develop full proof documents that protect your client's assets and secure their future. When the stakes are high, we deliver results.",
              contentBoxTitle:
                "Real estate law isn't just about property—it's about power.",
              link: y.J["real-estate-litigation"].href,
              image: a,
              menuContent:
                "Securing your client's property and future with ironclad legal documentation and results-driven strategy.",
            },
            {
              id: "06",
              title: "Family Law",
              description:
                "Family law isn't just legal—it's personal. We review the documents in each case with strategy, discretion, and an unwavering commitment to securing the best outcome for you.",
              contentBoxTitle: "Family disputes need finesse, not just force.",
              link: y.J["family-law"].href,
              image: p,
              menuContent:
                "Navigating sensitive family matters with strategic legal precision and a commitment to your clients' well-being.",
            },
            {
              id: "07",
              title: "Immigration",
              description:
                "Immigration is more than just paperwork—it's about securing the future. We prepare arguments, draft letters and fill forms with precision, ensuring a smooth, strategic path forward.",
              contentBoxTitle: "Borders may divide, but the law unites.",
              link: y.J.immigration.href,
              image: m,
              menuContent:
                "Crafting precise immigration solutions to pave the way for your clients' future.",
            },
            {
              id: "08",
              title: "Intellectual Property",
              description:
                "We support attorneys with watertight IP documentation—trademark, patent, and copyright filings that stand strong under scrutiny.",
              contentBoxTitle: "IP Protection. Drafted Right. Defended Better.",
              link: y.J["intellectual-property"].href,
              image: f,
              menuContent:
                "Fortifying your clients' innovations with rock-solid IP documentation and protection.",
            },
            {
              id: "09",
              title: "Criminal Law",
              description:
                "We power defense attorneys with sharp, strategic paralegal support—from pre-trial prep to courtroom execution. Fast. Focused. Built to defend every right, every time.",
              contentBoxTitle: "Criminal Defense. Backed by Precision.",
              link: y.J["criminal-law"].href,
              image: h,
              menuContent:
                "Empowering defense with precision, strategy, and unwavering support—every step of the way.",
            },
            {
              id: "10",
              title: "Bankruptcy",
              description:
                "Whether your client is an individual, business, or family struggling with debt, we navigate the legal pathways to financial freedom with precision and expertise.",
              contentBoxTitle: "Bankruptcy isn't the end. It's a fresh start.",
              link: y.J.bankruptcy.href,
              image: g,
              menuContent:
                "Guiding clients through financial turmoil with expert strategies for a fresh start.",
            },
            {
              id: "11",
              title: "Contracts",
              description:
                "From drafting to review, we ensure every contract puts your client in an advantageous position—clear, enforceable, and built to protect their interests.",
              contentBoxTitle:
                "A contract is only as strong as the words that bind it.",
              link: y.J.contracts.href,
              image: u,
              menuContent:
                "Crafting contracts that secure your client's future—clear, strong, and unbreakable.",
            },
          ];
      },
      7550(e, t, n) {
        n.d(t, {
          $5: () => C,
          Al: () => y,
          Cx: () => S,
          DD: () => T,
          EV: () => A,
          JK: () => p,
          K6: () => r,
          Ly: () => i,
          Mi: () => O,
          OJ: () => l,
          QF: () => s,
          Tg: () => w,
          Ue: () => d,
          V8: () => g,
          _v: () => m,
          aM: () => k,
          b0: () => D,
          bD: () => x,
          dY: () => u,
          fF: () => b,
          gy: () => v,
          hl: () => o,
          np: () => a,
          op: () => P,
          pt: () => c,
          sh: () => h,
          ts: () => j,
          wR: () => E,
          x3: () => f,
        });
        var r = "ContactUs-module__aboutHeading--TaayA",
          i = "ContactUs-module__aboutLPO--YwSu6",
          a = "ContactUs-module__aboutText--Cqgep",
          o = "ContactUs-module__address--Dsu9b",
          l = "ContactUs-module__addressContainer--xeZUS",
          s = "ContactUs-module__breadcrumb--WlOMN",
          c = "ContactUs-module__carouselBody--V1yqt",
          u = "ContactUs-module__carouselCard--vWDsX",
          d = "ContactUs-module__carouselHeadingSection--qldkU",
          m = "ContactUs-module__carouselSection--YfNpx",
          p = "ContactUs-module__clientInfoWrapper--XY3Vl",
          g = "ContactUs-module__clientName--JpXUT",
          f = "ContactUs-module__commonContainer--Q12Om",
          h = "ContactUs-module__contactAddressContainer--v0axY",
          y = "ContactUs-module__designation--Vp79p",
          b = "ContactUs-module__dividerContainer--hg3Bd",
          v = "ContactUs-module__formSection--lsr_T",
          w = "ContactUs-module__founderContainer--XXM6M",
          E = "ContactUs-module__headingContainer--yrKu3",
          x = "ContactUs-module__imageListItem--XJV9z",
          S = "ContactUs-module__imageListRoot--Vn4VT",
          P = "ContactUs-module__infoContainer--AT9Fd",
          k = "ContactUs-module__lpoTitle--J97VA",
          O = "ContactUs-module__mapFrame--Pipe6",
          C = "ContactUs-module__masterHead--uS9VV",
          j = "ContactUs-module__sectionDivider--kd3Fn",
          A = "ContactUs-module__testimonial--Jb8n7",
          D = "ContactUs-module__textCenter--_S2M0",
          T = "ContactUs-module__title--TqLZJ";
      },
      664(e, t, n) {
        e.exports = n.p + "accordian-icon-1-451aed47.png";
      },
      2291(e, t, n) {
        e.exports = n.p + "accordian-icon-2-b64c9adc.png";
      },
      4714(e, t, n) {
        e.exports = n.p + "accordian-icon-3-ee5f06b8.png";
      },
      1221(e, t, n) {
        e.exports = n.p + "accordian-icon-4-424cfbb2.png";
      },
      2124(e, t, n) {
        e.exports = n.p + "accordian-icon-5-a14feee0.png";
      },
      2183(e, t, n) {
        e.exports = n.p + "accordian-icon-6-38743277.png";
      },
      107(e, t, n) {
        e.exports = n.p + "layer-stamp-760de64c.png";
      },
      3653(e, t, n) {
        e.exports = n.p + "logo-b2b419b3.png";
      },
      1925(e, t, n) {
        e.exports = n.p + "service-image-1-c1ae9efe.jpg";
      },
      8537(e, t, n) {
        e.exports = n.p + "service-image-10-6ef8adee.jpg";
      },
      7484(e, t, n) {
        e.exports = n.p + "service-image-11-735edd1b.jpg";
      },
      9467(e, t, n) {
        e.exports = n.p + "service-image-12-8a4d8065.jpg";
      },
      2026(e, t, n) {
        e.exports = n.p + "service-image-2-c07007f9.jpg";
      },
      7863(e, t, n) {
        e.exports = n.p + "service-image-3-34b52c97.jpg";
      },
      1868(e, t, n) {
        e.exports = n.p + "service-image-4-083a1671.jpg";
      },
      2921(e, t, n) {
        e.exports = n.p + "service-image-5-f9db0aee.jpg";
      },
      5806(e, t, n) {
        e.exports = n.p + "service-image-6-5dbc67c6.jpg";
      },
      3851(e, t, n) {
        e.exports = n.p + "service-image-7-b19096b9.jpg";
      },
      2240(e, t, n) {
        e.exports = n.p + "service-image-8-92c1a7dc.jpg";
      },
      4461(e, t, n) {
        e.exports = n.p + "service-image-9-331e1a17.jpg";
      },
      3960(e, t, n) {
        e.exports = n.p + "Contract-Administration-8fb60ecb.jpg";
      },
      7722(e, t, n) {
        e.exports = n.p + "Dispute-Resolution-de2f0f5c.jpg";
      },
      2457(e, t, n) {
        e.exports = n.p + "contract-drafting-e87370b2.jpg";
      },
      8903(e, t, n) {
        e.exports = n.p + "contract-negotiation-83ea0647.jpg";
      },
      7341(e, t, n) {
        e.exports = n.p + "DUI-DWI-and-traffic-d6042116.jpg";
      },
      8722(e, t, n) {
        e.exports = n.p + "domestic-violence-74c753de.jpg";
      },
      9857(e, t, n) {
        e.exports = n.p + "drug-possession-17089f09.jpg";
      },
      4688(e, t, n) {
        e.exports = n.p + "homicide-and-murder-ed245388.jpg";
      },
      1403(e, t, n) {
        e.exports = n.p + "misdemeanors-and-felonies-6f52da55.jpg";
      },
      3011(e, t, n) {
        e.exports = n.p + "protest-related-offenses-7661baa3.jpg";
      },
      2058(e, t, n) {
        e.exports = n.p + "theft-burglary-e1b7601e.jpg";
      },
      3619(e, t, n) {
        e.exports = n.p + "Employment-Contracts-79d7edd4.jpg";
      },
      4406(e, t, n) {
        e.exports = n.p + "Wage-and-Hour-Compliance-1cab22b8.jpg";
      },
      6404(e, t, n) {
        e.exports =
          n.p + "Workplace-Discrimination-and-Harassment-71d41e35.jpg";
      },
      499(e, t, n) {
        e.exports = n.p + "Workplace-Investigations-aab77bdc.jpg";
      },
      3330(e, t, n) {
        e.exports = n.p + "Wrongful-Termination-8d54da56.jpg";
      },
      4207(e, t, n) {
        e.exports = n.p + "Child-Custody-62658b65.jpg";
      },
      2423(e, t, n) {
        e.exports = n.p + "Child-Support-219be4c2.jpg";
      },
      5525(e, t, n) {
        e.exports = n.p + "Divorce-233c29f5.jpg";
      },
      9281(e, t, n) {
        e.exports = n.p + "Domestic-Violence-8f40ca8e.jpg";
      },
      8825(e, t, n) {
        e.exports = n.p + "Guardianship-and-Conservatorship-7bf83838.jpg";
      },
      3287(e, t, n) {
        e.exports = n.p + "Paternity-41ac8002.jpg";
      },
      3837(e, t, n) {
        e.exports = n.p + "Prenuptial-and-Postnuptial-Agreements-ee6a9c4a.jpg";
      },
      490(e, t, n) {
        e.exports = n.p + "Spousal-Support-67322019.jpg";
      },
      3185(e, t, n) {
        e.exports = n.p + "Case-File-Management-6ecbdd0f.jpg";
      },
      4135(e, t, n) {
        e.exports = n.p + "Legal-Research-9b7182b9.jpg";
      },
      5726(e, t, n) {
        e.exports = n.p + "Petition-Drafting-8934dfb5.jpg";
      },
      8899(e, t, n) {
        e.exports = n.p + "Process-Simplification-44619a98.jpg";
      },
      165(e, t, n) {
        e.exports = n.p + "Strategic-Immigration-764c3152.jpg";
      },
      5687(e, t, n) {
        e.exports = n.p + "Brain-and-Spinal-Cord-6ea7d51d.jpg";
      },
      631(e, t, n) {
        e.exports = n.p + "Medical-Negligence-0da9e9ff.jpg";
      },
      3873(e, t, n) {
        e.exports = n.p + "Motor-Vehicle-Accidents-9b3996e2.jpg";
      },
      4059(e, t, n) {
        e.exports = n.p + "Nerve-damage-disfigurement-b4df0911.jpg";
      },
      7118(e, t, n) {
        e.exports = n.p + "Slip-and-Fall-or-Trip-8ffe8f95.jpg";
      },
      9689(e, t, n) {
        e.exports = n.p + "Workplace-and-Construction-Accidents-7848535a.jpg";
      },
      1928(e, t, n) {
        e.exports = n.p + "Claim-Filing-09d37cec.jpg";
      },
      8298(e, t, n) {
        e.exports = n.p + "Employer-Defense-5bbc1c8d.jpg";
      },
      5475(e, t, n) {
        e.exports = n.p + "Medical-Evidence-e164c849.jpg";
      },
      5480(e, t, n) {
        e.exports = n.p + "Settlement-and-Appeals-b9d76af7.jpg";
      },
      2926(e, t, n) {
        e.exports = n.p + "Third-Party-Liability-Claims-914b06f4.jpg";
      },
      8646(e, t, n) {
        e.exports = n.p + "bankruptcy-ecbb5eef.jpg";
      },
      566(e, t, n) {
        e.exports = n.p + "business-litigation-8bc34fac.jpg";
      },
      6258(e, t, n) {
        e.exports = n.p + "contracts-7cb8e75e.jpg";
      },
      6259(e, t, n) {
        e.exports = n.p + "criminal-law-49aef767.jpg";
      },
      7991(e, t, n) {
        e.exports = n.p + "employement-law-9c3d3db9.jpg";
      },
      6413(e, t, n) {
        e.exports = n.p + "estate-planning-2e77e7d1.jpg";
      },
      1316(e, t, n) {
        e.exports = n.p + "family-law-34fe13c6.jpg";
      },
      4033(e, t, n) {
        e.exports = n.p + "immigration-89436c16.jpg";
      },
      7235(e, t, n) {
        e.exports = n.p + "intellectual-property-590924d9.jpg";
      },
      2891(e, t, n) {
        e.exports = n.p + "personal-injury-623f32da.jpg";
      },
      247(e, t, n) {
        e.exports = n.p + "real-estate-litigation-110501c2.jpg";
      },
      6631(e, t, n) {
        e.exports = n.p + "workers-compensation-196ced69.jpg";
      },
      5219(e) {
        e.exports = require("@getbrevo/brevo");
      },
      394(e) {
        e.exports = require("@mui/material/Accordion");
      },
      8652(e) {
        e.exports = require("@mui/material/AccordionDetails");
      },
      3746(e) {
        e.exports = require("@mui/material/AccordionSummary");
      },
      5642(e) {
        e.exports = require("@mui/material/Alert");
      },
      6989(e) {
        e.exports = require("@mui/material/Box");
      },
      6368(e) {
        e.exports = require("@mui/material/Button");
      },
      179(e) {
        e.exports = require("@mui/material/Container");
      },
      9730(e) {
        e.exports = require("@mui/material/Grid2");
      },
      9021(e) {
        e.exports = require("@mui/material/ImageList");
      },
      9778(e) {
        e.exports = require("@mui/material/ImageListItem");
      },
      479(e) {
        e.exports = require("@mui/material/Snackbar");
      },
      3892(e) {
        e.exports = require("classnames");
      },
      5322(e) {
        e.exports = require("framer-motion");
      },
      5688(e) {
        e.exports = require("fslightbox-react");
      },
      255(e) {
        e.exports = require("gsap");
      },
      9084(e) {
        e.exports = require("gsap/dist/ScrollTrigger");
      },
      2015(e) {
        e.exports = require("react");
      },
      1990(e) {
        e.exports = require("react-helmet-async");
      },
      4822(e) {
        e.exports = require("react-router-dom");
      },
      9746(e) {
        e.exports = require("react-slick");
      },
      4954(e) {
        e.exports = require("react-spring-3d-carousel");
      },
    },
    i = {};
  function a(e) {
    var t = i[e];
    if (void 0 !== t) return t.exports;
    var n = (i[e] = { exports: {} });
    return (r[e](n, n.exports, a), n.exports);
  }
  ((a.m = r),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (a.d(t, { a: t }), t);
    }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (a.t = function (n, r) {
      if ((1 & r && (n = this(n)), 8 & r)) return n;
      if ("object" == typeof n && n) {
        if (4 & r && n.__esModule) return n;
        if (16 & r && "function" == typeof n.then) return n;
      }
      var i = Object.create(null);
      a.r(i);
      var o = {};
      e = e || [null, t({}), t([]), t(t)];
      for (
        var l = 2 & r && n;
        ("object" == typeof l || "function" == typeof l) && !~e.indexOf(l);
        l = t(l)
      )
        Object.getOwnPropertyNames(l).forEach((e) => (o[e] = () => n[e]));
      return ((o.default = () => n), a.d(i, o), i);
    }),
    (a.d = (e, t) => {
      for (var n in t)
        a.o(t, n) &&
          !a.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (a.f = {}),
    (a.e = (e) =>
      Promise.all(Object.keys(a.f).reduce((t, n) => (a.f[n](e, t), t), []))),
    (a.u = (e) => e + ".server.js"),
    (a.miniCssF = (e) => {}),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (a.p = "assets/"),
    (n = { 792: 1 }),
    (a.f.require = (e, t) => {
      if (!n[e]) {
        var r = require("./" + a.u(e));
        n[e] ||
          ((e) => {
            var t = e.modules,
              r = e.ids,
              i = e.runtime;
            for (var o in t) a.o(t, o) && (a.m[o] = t[o]);
            i && i(a);
            for (var l = 0; l < r.length; l++) n[r[l]] = 1;
          })(r);
      }
    }));
  var o = a(7560);
  module.exports = o;
})();
