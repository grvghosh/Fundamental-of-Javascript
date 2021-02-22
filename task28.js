function compare(base, perpendicular)
{
{
    var result;
	var area_triangle = area_triangle(base, perpendicular);
	var area_square = area_square(base, perpendicular);
	
    if (area_triangle>area_square)
    {result = area_triangle;
    return result;
    }
    else 
    {result = area_square;
    return result;
    }
    
}
function area_triangle(base, perpendicular){return(0.5*base*perpendicular);}
function area_square(base, perpendicular){return(base*base);}
}

var base = 10, perpendicular = 40;
console.log(compare(base, perpendicular));
module.exports = compare ;
