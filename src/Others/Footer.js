export function Footer(props){
    const {label1,label2,label3} = props;
    return(
      <footer class="py-4 bg-light mt-auto">
      <div class="container-fluid px-4">
          <div class="d-flex align-items-center justify-content-between small">
              <div class="text-muted">{label1}</div>
              <div>
                  <a href="#">{label2}</a>
                  &middot;
                  <a href="#">{label3}</a>
              </div>
          </div>
      </div>
  </footer>
    )
  }