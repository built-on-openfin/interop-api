import { FinContextGroupPicker } from 'wc-fin-react';
import './App.css';

function App() {

  return (
    <>
      <div id="title-bar">
          <FinContextGroupPicker joinText="Join {0} Context Group" leaveText="Leave {0} Context Group" bindSelf={ true } bindViews={ true } ></FinContextGroupPicker>
            <div className="title-bar-draggable">
                    <div id="title"></div>
            </div>
            <div id="buttons-wrapper">
              <div className="button" title="Minimize Window"  id="minimize-button" onClick={() => window.fin.me.minimize().catch(console.error)}>
           </div>
        <div className="button" title="Maximize Window" id="expand-button" onClick={() => console.log("expand clicked")}></div>
        <div className="button" title="Close Window" id="close-button" onClick={() => window.fin.me.close().catch(console.error)}></div>
            </div>
        </div>
    <div id="body-container">
        <div id="layout-container"></div>
    </div>
</>
  );
}

export default App;
