export function NavlinkCollapsed2(props){
    const {databdtarget, ariacontrols,label,classe} = props;
    return(
      <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target={databdtarget} aria-expanded="false" aria-controls={ariacontrols}>
      <div class="sb-nav-link-icon"><i class={classe}></i></div>
      {label}
      <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
  </a>
    );
  }