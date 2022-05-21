export function Collapse (props){
    const {children,arialabelledby} = props;
    return(
      <div class="collapse" id="collapseLayouts" aria-labelledby={arialabelledby} data-bs-parent="#sidenavAccordion">
        {children}
      </div>
    );
  }