<template>
	<div class="home">
		<HeaderComponent />
		<Section class="qIntro wrapper">
			<div class="qintro__container wrapper">
				<div class="qIntro__aboutMe">
          <p>My name is Nicklas, and I like</p>
          <p>Programming, IT, Gaming And Music</p>
        </div>
				<div class="qIntro__pb">
          <img class="pb__image" src="@/assets/selfie.jpg" alt="">
				</div>
			</div>
		</Section>
    <section class="skills">
      <div class="skills__container">
        <div class="skills__content">
          <p class="skills__heading">Skills</p>
          <ul ref="skills__ul" class="skills_menu">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Github</li>
          </ul>
          <div class="skills__info">
            <p>More info</p>
          </div>
        </div>
      </div>
    </section>
	</div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
	name: "Home",
	components: {
		HeaderComponent
  }
};
</script>

<style lang="scss" scoped>
  $neonColor: #fe53bb;

  .animation__line {
		width: 20px;
		display: block;
		content: " ";
		border-top: 1px solid white;
		position: absolute;
		transition: all 1s;
	}
  .qIntro{
    height: 100vh;
    
    .qintro__container{
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 100%;

      .qIntro__aboutMe{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      .qIntro__pb{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .pb__image{
          height: 15rem;
          border-radius: 100%;
        }
      }
    }
  }
  .skills{
    height: 100vh;
    background: rgb(115,25,25);

    .skills__container{
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .skills__content{
        background: rgb(33, 33, 33);
        border-radius: 25px;
        width: 80%;

        .skills__heading{
          text-align: center;
          margin-top: 0;
          font-size: 2rem;
          color: $neonColor;
        }
        .skills_menu{
          display: flex;
          justify-content: space-around;
          background-color: #363636;
          li{
            display: inline;
            padding: .5rem;
            color: $neonColor;
            font-size: 1.5rem;
            width: 100%;
            display: flex;
            justify-content: center;
            border-right: 1px solid black;
          }
          li:last-of-type{
            border: none;
          }
        }
        .skills__info{
          display: flex;
          justify-content: center;
          p{
            color: #fe53bb;
          }
        }
      }
    }
  }
</style>
