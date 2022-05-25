import './App.css';
import { CardBody } from './Card/CardBody';
import { CardHeader } from './Card/CardHeader';
import { Collapse } from './Navigation/Collapse';
import { DropDownMenu } from './Navigation/DropDownMenu';
import { NavBar } from './Navigation/NavBar';
import { NavBrand } from './Navigation/navBrand';
import { NavLink } from './Navigation/NavLink';
import { NavlinkCollapsed1 } from './Navigation/NavlinkCollapsed1';
import { NavlinkCollapsed2 } from './Navigation/NavlinkCollapsed2';
import { PageCollapse } from './Navigation/PageCollapse';
import { SearchBar } from './Navigation/SearchBar';
import { SidebarButtonToggle } from './Navigation/SidebarButtonToggle';
import { SideNav } from './Navigation/SideNav';
import { SideNavFooter } from './Navigation/SideNavFooter';
import { SideNavMenu } from './Navigation/SideNavMenu';
import { SideNavMenuHeading } from './Navigation/SideNavMenuHeading';
import { BreadCrumb } from './Others/BreadCrumb';
import { BreadCrumbItem } from './Others/BreadCrumbItem';
import { ConteuneurFluid } from './Others/Conteneur';
import { Footer } from './Others/Footer';
import { Title1 } from './Others/Title1';
import { Table } from './Table Composants/Table';
function App() {
  return (
    <body>
      <NavBar>
          <NavBrand label="Start Bootstrap"/>
          <SidebarButtonToggle/>
          <SearchBar/>
          <DropDownMenu label1="Settings" label2="Activity Log" label3="Logout"/>   
      </NavBar>

    <SideNav id="layoutSidenav">
      <SideNav id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div class="sb-sidenav-menu">
            <div class="nav">
                 <SideNavMenuHeading label="Core"/>
                  <NavLink href="index.html" classe="fas fa-tachometer-alt" label="Dashboard"/>                     
                 <SideNavMenuHeading label="Interface"/>

                <NavlinkCollapsed2 label="Layouts" classe="fas fa-columns" databdtarget="#collapseLayouts" ariacontrols="collapseLayouts" />                          
                  <Collapse arialabelledby="headingOne">
                    <SideNavMenu label1="Static Navigation" label2="Light Sidenav" href1="layout-static.html" href2="layout-sidenav-light.html"/>                             
                  </Collapse>

                <NavlinkCollapsed2 label="Pages" classe="fas fa-book-open" databdtarget="#collapsePages" ariacontrols="collapsePages" />
                  <Collapse arialabelledby="headingTwo">

            <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                <NavlinkCollapsed1 databdtarget="#pagesCollapseAuth" ariacontrols="pagesCollapseAuth" label="Authentication" />  

                <PageCollapse id="pagesCollapseAuth">
                    <SideNavMenu label1="Login" label2="Register" label3="Forgot Password" href1="login.html" href2="register.html" href3="password.html"/>
                </PageCollapse>

                <NavlinkCollapsed1 databdtarget="#pagesCollapseError" ariacontrols="pagesCollapseError" label="Error"/>

                <PageCollapse id="pagesCollapseError">
                  <SideNavMenu label1="401 Page" label2="404 Page" label3="500 Page" href1="401.html" href2="404.html" href3="500.html"/>                                          
                </PageCollapse>
            </nav>
                </Collapse>
                    <SideNavMenuHeading label="Addons"/>
                      <NavLink href="charts.html" classe="fas fa-chart-area" label="Charts"/>
                      <NavLink href="tables.html" classe="fas fa-table" label="Tables"/>
            </div>
          </div>
          <SideNavFooter/>
        </nav>
      </SideNav>

      <SideNav id="layoutSidenav_content">
        <main>
          <ConteuneurFluid>
            <Title1 label="Tables"/>
              <BreadCrumb>
                <BreadCrumbItem label="Dashboard" href="idnex.html"/>
                <BreadCrumbItem label="Table"/>
              </BreadCrumb>
        <div class="card mb-4">
            <CardBody>
              DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the
              <a target="_blank" href="https://datatables.net/">official DataTables documentation</a>                          .
            </CardBody>
        </div>

        <div class="card mb-4">
            <CardHeader label="DataTable Example" />                          
            <CardBody>
              <Table />
             </CardBody>
            </div>
          </ConteuneurFluid>
         </main>
      <Footer label1="Copyright &copy; Your Website 2022" label2="Privacy Policy" label3="Terms &amp; Conditions" />
    </SideNav>
  </SideNav>      
</body>
  );
}

export default App;
