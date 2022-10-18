import { Fragment } from "react";
const Clients = () => {
  return (
    <Fragment>
      <div className="content clients">
        {/* title */}
        <div className="title">Sites Created Professionally</div>
        {/* content */}
        <div className="row client-items">
          {/* client item */}
          <div className="col col-d-4 col-t-4 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://slimware.com"
                >
                  <img src="images/clients/client_1.png" alt="Slimware" />
                </a>
                  Slimware
              </div>
            </div>
          </div>
          {/* client item */}
          <div className="col col-d-4 col-t-4 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://gamingwonderland.com"
                >
                  <img src="images/clients/client_2.png" alt="GamingWonderland" />
                </a>
                  GamingWonderland
              </div>
            </div>
          </div>
          {/* client item */}
          <div className="col col-d-4 col-t-4 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://ecards.myfuncards.com"
                >
                  <img src="images/clients/client_3.png" alt="MyFunCards" />
                </a>
                  MyFunCards
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Clients;
