import Link from 'next/link';
import { useCallback, useEffect, useState } from "react";
import classes from './MainNavigation.module.css'
import { FaTimes, FaBars } from 'react-icons/fa';

type NavBarProps = {
  target: React.RefObject<HTMLDivElement>

}

function MainNavigation({target}: NavBarProps){
    const [isModal, setIsModal] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const scrollListener = useCallback(() => {
      if(!target.current)
        return;

      const element = target.current;
      const totalHeight = element.clientHeight - element.offsetTop - window.innerHeight;
      const windowsScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      if(windowsScrollTop === 0){
        setScrolled(false);
      }

      if(windowsScrollTop > 0){
        setScrolled(true);
      }
      
    }, [target])
  
    useEffect(() => {
      document.body.addEventListener('scroll', scrollListener)
      return () => document.body.removeEventListener('scroll', scrollListener)
    }, [])
 
    const isDisappear = !isModal
        ? `${classes.container_nav} ${classes.container_div_nav}`
        : `${classes.container_nav} ${classes.container_div_nav} ${classes.container_responsive}`;

    return (
      <div className={`${classes.container} ${scrolled ? classes.scrolled : ''}`}>
        <Link className={classes.nav_title} href='/' onClick={() =>setIsModal(!isModal)}>Oázis</Link>
        <div className={isDisappear}>
          <Link className={classes.nav_a} href='/' onClick={() =>setIsModal(!isModal)}>Kezdőlap</Link>
          <Link className={classes.nav_a}href='/menu' onClick={() =>setIsModal(!isModal)}>Étlap</Link>
          {/* <Link className={classes.nav_a}href='/drinks' onClick={() =>setIsModal(!isModal)}>Itallap</Link> */}
          <Link className={classes.nav_a} href='/weekly' onClick={() =>setIsModal(!isModal)}>Heti menü</Link>
          <Link className={classes.nav_a}href='/galeria' onClick={() =>setIsModal(!isModal)}>Galéria</Link>
          <Link className={classes.nav_a}href='/informations' onClick={() =>setIsModal(!isModal)}>Információk</Link>
          <button className={[classes.container_nav_btn, classes.nav_nav_close_btn].join(" ")} onClick={() =>setIsModal(!isModal)}>
            <FaTimes />
          </button>
        </div>
        <button className={classes.container_nav_btn} onClick={()=> setIsModal(!isModal)}>
        <FaBars />
      </button>
      </div>
  );
}

export default MainNavigation;
