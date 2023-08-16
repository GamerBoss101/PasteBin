<script>
    import "$lib/css/styles.css";

    import NavBar from "$lib/components/layout/NavBar.svelte";

</script>

<svelte:head>

    <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC9ElEQVR4nO1YPWtUQRR9ECzUSKpdN8FekiCmsIgiiqVoZ2EC+QFGf4GmEUFIK4Ik6g9YRTBW0cZCwY9otSa7KmhhIYiFIggS4h6Z5Ey8zs57O2/fzHOLObC8nXnn3XvPne9JkoiIiIiIiEAA8Bj9g6dFhPQVkqJCkv8MRCEE+gxJr1ADDP2DJz0LoZhlGlrnswWgxl9L1pHfUV+Au87nciERdDZPY9cNpx2BiW9qnrjX+H/eh5BpGrsHoApgVTT3WwAjKd8V5gK4w/JZH0JGaewDgIrh8F2O4LK4e21cbAlS2O9DyACAnwDaAJo03BT/11QglsDWLNxuXaspuErEBn0PFBZCZy9FtpTTYWb8jXA6TG7FqB8xuNstY7SE5DaEv+deRNDhIo0qp1VRLwNRgY6LgFdlSxlclYwJ0RImtyq4Cz6FnKfR25Z3Mtu/hahqF267C/cW38/6FHKERl+nvB9jfwafYxm2nLgAVsg57FPIILP9C8AO411F9GndIqpcsdhx4uLvBKM4g96E0Ph7Op5ICazBbDdsAebkjuuJwasIGr8rBmrNCKwpth2yvii3HkLIHI3rDFqzaQmwV67CpRBCTqET29m18GWAebkaJ0MI2YdOtHIEl4ersbnIhhDztcSu9SWICDp9SCdnLAFsBmirz8k9zfKjkEL02eSyJRDVdQ7YZqc8XAAXvZ1BMoRM0cn9UAsigDrrp0MK0WeTj6G2KNjaHSuMhhQizyZDvlsEwB7W+zuDZIh5wQCOWVZs2e//mW5duACOej+DZAhZoLMrAbYoV/n/RhlCZo3zhM91pM3nuTKETNJZ5sC2rNbWcWOZABQmyxCyWwzU1K2H6xbFwtsAsCu4EDrX1zTfHc8eLmcUbatViggGoC/O5ly2I451ekWvlylkhk5f8Qonb/ZNnrpeesbyhTKF7ATwiY4fADhu3BS6LIjgJd4JAEssf9YLbZliDgL4Bn/4AeBQqSKMS7dFZrJXqG9vpt0LR0REJF7wB9F1wWDrlDgAAAAAAElFTkSuQmCC">

    <title>PasteBin</title>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</svelte:head>

<div style="background-color: var(--bg-color);">
	<main>
        <NavBar />
		<slot />
	</main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</div>