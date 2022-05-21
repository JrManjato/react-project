export function SideNavMenu(props){
    const {label1,label2,label3,href1,href2,href3} = props;
    return(
      <nav class="sb-sidenav-menu-nested nav">
        <a class="nav-link" href={href1}>{label1}</a>
        <a class="nav-link" href={href2}>{label2}</a>
        <a class="nav-link" href={href3}>{label3}</a>
      </nav>
    );
  }