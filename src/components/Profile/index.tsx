import styles from '../../styles/components/Profile.module.css'

 function Profile(){
    return (
      <div className={styles.profileContainer} >
        <img src="https://avatars.githubusercontent.com/u/67909156?s=460&u=9d22229fc54acd9e3d534df1b5d63bf3c671de1d&v=4" alt="Gregory Praxedes"/>
        <div>
          <strong>Gregory Praxedes</strong>
          <p>
            <img src="icons/level.svg" alt="level"/>
            Level 1
            </p>
        </div>
      </div>
    )
}
export default Profile
