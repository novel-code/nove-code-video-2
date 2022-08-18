const NavigationDesktop = (props) => {
  const { navLinksData } = props;

  return (
    <nav>
      <ul className='nav-ul'>
        {navLinksData.map((el, i) => {
          if (!el.children) {
            return (
              <li key={i} className='nav-li'>
                <a href='#' className='nav-link'>
                  <span>{el.name}</span>
                </a>
              </li>
            );
          }

          return (
            <li key={i} className='nav-li position-relative'>
              <div className='nav-link'>
                <span>{el.name}</span>
              </div>
              <ul className='children'>
                {el.children.map((el, i) => {
                  return (
                    <li key={i} className='child'>
                      <span>{el.name}</span>
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
