import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Fale comigo</h2>
            <Link to="/">Contato</Link>
            <Link to="/">Suporte</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Redes sociais</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Whatsapp</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              GB <span class="icon"></span>
            </Link>
          </div>
          <small class="website-rights">
            Gabriela Barros 2020 © Todos os direitos reservados.
          </small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link whatsapp"
              to="/"
              target="_blank"
              aria-label="Whatsapp"
            >
              <i class="fab fa-whatsapp" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
