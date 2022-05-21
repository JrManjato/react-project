export function NavlinkCollapsed1(props){
    const {databdtarget, ariacontrols,label} = props;
    return(
      <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target={databdtarget} aria-expanded="false" aria-controls={ariacontrols}>
      {label}
      <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
      </a>
    );
  }