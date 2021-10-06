import MainNavigation from "./MainNavigation";
import "../../styles/Layout.scss"

function Layout(props) {

   return (
      <div>
         <MainNavigation></MainNavigation>
         <div className="mainLayout">
            {props.children}
         </div>
      </div>
   );
}

export default Layout;