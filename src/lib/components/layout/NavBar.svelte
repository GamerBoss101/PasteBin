<script>
    import { page } from "$app/stores";
</script>

<nav class="navbar navbar-expand-md">
    <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="/">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img width="25" height="25" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC9ElEQVR4nO1YPWtUQRR9ECzUSKpdN8FekiCmsIgiiqVoZ2EC+QFGf4GmEUFIK4Ik6g9YRTBW0cZCwY9otSa7KmhhIYiFIggS4h6Z5Ey8zs57O2/fzHOLObC8nXnn3XvPne9JkoiIiIiIiEAA8Bj9g6dFhPQVkqJCkv8MRCEE+gxJr1ADDP2DJz0LoZhlGlrnswWgxl9L1pHfUV+Au87nciERdDZPY9cNpx2BiW9qnrjX+H/eh5BpGrsHoApgVTT3WwAjKd8V5gK4w/JZH0JGaewDgIrh8F2O4LK4e21cbAlS2O9DyACAnwDaAJo03BT/11QglsDWLNxuXaspuErEBn0PFBZCZy9FtpTTYWb8jXA6TG7FqB8xuNstY7SE5DaEv+deRNDhIo0qp1VRLwNRgY6LgFdlSxlclYwJ0RImtyq4Cz6FnKfR25Z3Mtu/hahqF267C/cW38/6FHKERl+nvB9jfwafYxm2nLgAVsg57FPIILP9C8AO411F9GndIqpcsdhx4uLvBKM4g96E0Ph7Op5ICazBbDdsAebkjuuJwasIGr8rBmrNCKwpth2yvii3HkLIHI3rDFqzaQmwV67CpRBCTqET29m18GWAebkaJ0MI2YdOtHIEl4ersbnIhhDztcSu9SWICDp9SCdnLAFsBmirz8k9zfKjkEL02eSyJRDVdQ7YZqc8XAAXvZ1BMoRM0cn9UAsigDrrp0MK0WeTj6G2KNjaHSuMhhQizyZDvlsEwB7W+zuDZIh5wQCOWVZs2e//mW5duACOej+DZAhZoLMrAbYoV/n/RhlCZo3zhM91pM3nuTKETNJZ5sC2rNbWcWOZABQmyxCyWwzU1K2H6xbFwtsAsCu4EDrX1zTfHc8eLmcUbatViggGoC/O5ly2I451ekWvlylkhk5f8Qonb/ZNnrpeesbyhTKF7ATwiY4fADhu3BS6LIjgJd4JAEssf9YLbZliDgL4Bn/4AeBQqSKMS7dFZrJXqG9vpt0LR0REJF7wB9F1wWDrlDgAAAAAAElFTkSuQmCC">
            <a class="navbar-brand d-flex" href="/">THE BIN</a>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#h">Paste</a>
                </li>
            </ul>
        </div>
        <button class="btn btn-success">
            { #if $page.data.id == null}
                <a href="/api/auth/login">Login</a>
            { :else }
                <a href="/api/auth/logout">Logout</a>
            { /if }
        </button>
    </div>
</nav>

<style>

    img {
        margin-right: 10px;
    }

    a {
        text-decoration: none !important;
    }

    nav {
        color: white !important;
        background-color: var(--bg-color-dark);
        position: sticky;
        top: 0;
        z-index: 1000;
    }

    .container {
        margin-bottom: 0;
    }

    .nav-item {
        font-size: 18px;
        margin-left: 5px;
        margin-right: 5px;
    }
    
</style>