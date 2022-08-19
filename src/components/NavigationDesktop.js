const NavigationDesktop = (props) => {
  const { navLinksData } = props;

  return (
    <nav>
      <ul className='main-nav'>
        {navLinksData.map((el, i) => {
          if (!el.children) {
            return (
              <li key={el.id}>
                <a href='#' className='header-nav-link'>
                  <span>{el.name}</span>
                </a>
              </li>
            );
          }

          return (
            <li key={el.id} className='header-nav-options'>
              <div className='header-nav-div'>
                <span>{el.name}</span>
              </div>
              <ul className='header-nav-ul'>
                {el.children.map((ele) => {
                  if (false === false) return;

                  if (!ele.children) {
                    return (
                      <li key={ele.id} className='sub-menu-li'>
                        <a
                          href='#'
                          className='sub-menu-link'
                          style={{ textDecoration: "none" }}
                        >
                          <span>{ele.name}</span>
                        </a>
                      </li>
                    );
                  }

                  return (
                    <li key={ele.id} className='sub-menu-options'>
                      <div className='sub-menu-div'>
                        <span>{ele.name}</span>
                      </div>
                      <ul className='sub-menu-ul'>
                        {ele.children.map((elem) => {
                          if (false === false) return;
                          return (
                            <li key={elem.id} className='grand-child-link'>
                              <a href='#'>
                                <span>{elem.name}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationDesktop;
