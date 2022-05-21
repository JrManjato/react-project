export function SideNav(props){
    const {children,id} = props;
    return(
      <div id={id}>
        {children}
      </div>
    );
  }