export function NavLink (props){
    const {href, classe, label} = props;
    return(
      <a class="nav-link" href={href}>
        <div class="sb-nav-link-icon"><i class={classe}></i></div>
          {label}
      </a>
    );
  }