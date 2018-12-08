const CodeIcon = () => (
  <React.Fragment>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
      <path d="M5 15a.502.502 0 0 1-.354-.146l-4-4a.5.5 0 0 1 0-.707l4-4a.5.5 0 0 1 .707.707L1.707 10.5l3.646 3.646a.5.5 0 0 1-.354.853zM15 15a.5.5 0 0 1-.354-.853l3.646-3.646-3.646-3.646a.5.5 0 0 1 .707-.707l4 4a.5.5 0 0 1 0 .707l-4 4a.498.498 0 0 1-.354.146zM7.5 15a.5.5 0 0 1-.424-.765l5-8a.5.5 0 0 1 .848.53l-5 8A.5.5 0 0 1 7.5 15z" />
    </svg>
    <style jsx>{`
      svg {
        fill: #0099ff;
        margin-right: 4px;
      }
    `}</style>
  </React.Fragment>
)

const GoHomeIcon = () => (
  <React.Fragment>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
      <path d="M19.871 12.165l-8.829-9.758A1.392 1.392 0 0 0 10 1.937c-.397 0-.767.167-1.042.47L.129 12.165a.5.5 0 0 0 .741.67l2.129-2.353V18.5c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5v-8.018l2.129 2.353a.499.499 0 1 0 .741-.671zM12 19H8v-4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V19zm4-.5a.5.5 0 0 1-.5.5H13v-4.5c0-.827-.673-1.5-1.5-1.5h-3c-.827 0-1.5.673-1.5 1.5V19H4.5a.5.5 0 0 1-.5-.5V9.377l5.7-6.3c.082-.091.189-.141.3-.141s.218.05.3.141l5.7 6.3V18.5z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
      <path d="M.646 10.146l6-6a.5.5 0 0 1 .707.707L2.207 9.999H18.5a.5.5 0 0 1 0 1H2.207l5.146 5.146a.5.5 0 0 1-.708.707l-6-6a.5.5 0 0 1 0-.707z" />
    </svg>
    <style jsx>{`
      svg {
        margin-right: 4px;
      }
      svg + svg {
        margin-right: 16px;
      }
    `}</style>
  </React.Fragment>
)

export default () => (
  <React.Fragment>
    <a href="/">
      <span>
        <GoHomeIcon /> midudev
      </span>
      <div>
        <CodeIcon />frontend, performance & more...
      </div>
    </a>
    <style jsx>{`
      a {
        color: #000;
        display: block;
        font-size: 24px;
        font-weight: 300;
        line-height: 20px;
        overflow: hidden;
        padding: 16px;
        text-decoration: none;
      }
      a:hover span {
        transform: translateX(0px);
      }
      div {
        align-items: center;
        color: #09f;
        display: flex;
        font-size: 12px;
        height: 20px;
      }
      span {
        display: block;
        transform: translateX(-65px);
        transition: all 0.3s ease-in-out;
      }
    `}</style>
  </React.Fragment>
)
