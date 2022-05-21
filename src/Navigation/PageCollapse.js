export function PageCollapse (props){
    const {id, children} = props;
    return(
      <div class="collapse" id={id} aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
        {children}
      </div>
    );
  }