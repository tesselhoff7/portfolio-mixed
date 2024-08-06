import "./FooterStyles.scss";

function Footer() {
  return (
    <section id="footer">
      <div class="btn-4" data-tooltip="Size: 20Mb">
        <div class="button-wrapper">
          <div class="text">Download</div>
          <span class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="2em"
              height="2em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
