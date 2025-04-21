import AllRecipes from '../../Components/AllRecipes/AllRecipes';
import Hero from '../../Components/Hero/Hero'
import HomeBlog from '../../Components/HomeBlog/HomeBlog';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Shareyourrep from '../../Components/Shareyourrep/Shareyourrep';
import Trendingrecipe from '../../Components/Trendingrecipe/Trendingrecipe';

const MainPage = () => {
    return ( 
        <> 
            <Hero/>
            <Shareyourrep/>
            <Trendingrecipe/>
            <HomeBlog/>
            <AllRecipes/>
            <Newsletter/>
        </>
     );
}
 
export default MainPage;