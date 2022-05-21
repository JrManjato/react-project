export function NavBrand (props) {
    const {label} = props;
    return(
      <a class="navbar-brand ps-3" href="index.html">{label}</a>
    );
  }