import React from 'react';
import s from './MySkills.module.css'

export const MySkills = () => {
    return (
        <div className={s.scillsWrapper} id='skills'>
            <div className={s.scillsConteiner}>
                <div className={s.skillsConteinerMySkill}>
                    My skills
                </div>
                <div className={s.scillsTehnologies}>
                    <div className={s.scillsTehnologiesItem}>
                        <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png' alt={'image'}/>
                        <b>React</b>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eius facilis illo inventore laboriosam officiis quibusdam quidem, tempora voluptates. Quaerat?
                        </div>

                    </div>
                    <div className={s.scillsTehnologiesItem}>
                        <img src='https://cdn3.vectorstock.com/i/1000x1000/26/17/script-logo-design-vector-31372617.jpg' alt={'image'}/>
                        <b>Tyscrips</b>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, fuga.
                        </div>

                    </div>
                    <div className={s.scillsTehnologiesItem}>

                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUDAQT///8AAAAGBQeQkJDIyMmWlpa7urulpaYzMjPx8fHr6+s5ODnY2Nj29vbb29shICE+PT7FxcV7e3tvb29cW1zQ0NBOTU5qamqysrKrq6swLzAqKSrl5eVzc3MQDhFgYGFEREWKiYokIyQYFxicnJ1dXV6EhIRDQ0RUVFUaGhtLS0t2ca/vAAAHL0lEQVR4nO2da3eiMBBAw1irYsX6fj/aaqvt//9/Cz5WEpJAAhiGM/fL7qmKuQRDmBkC8+50l9u3HasDh8546f/3Yrd/+xOIcN24QriY7Pu84agudndCn23M0F/XS+8KdPy7Ybdm/XcHdv7N8LeegqHi+mo4rqtgqDiKDHv1FQwV+6HhudaGe4916ywYnjR8tqy1IYMFq/E4EwEjtqq54YnVY7KtBHas4boNJQO1N2RkWAPIED9kiB8yxA8Z4ocM8UOG+CFD/JAhfsgQP2SIHzLEDxnihwzxQ4b4IUP8kCF+yBA/ZIgfMsRPWYbAU9K3ZKEkQ9hOmw+mHYeKZRm+eHEGZFgiZGgJGT4RMrSEDJ8IGVpChk+EDC0hwyfyHMM3MiwRMrSEDJ8IGVpChk+EDC0hQ9XHSgiTV8bwqvV+mp3Ps9mswwoTrYZhpDJvT4P4Z/zp8Dg/5JesgGHo8HXse3K6i31OR/eGAN89hd6VYPGXx9G1Yei30fpdmH7YOzo2hN9pul/EwlrRrSHMs/mFdG1zkC4NAdqZBUMmdopODRcmgp7lgk8ODc16MOJgo+jOEMamgl7PZrhxZgjvSYOgeZyfv3aH9eC8f211k28YoTJsis1ffgglKp1lYhdYdKIrQ5gIjW8nZqDRH8SxyKITn2OYPJcBf6b3V9LeAfHHarFCoCPDy6KNMUHl0Scqmh+mrgz51zVrqgkHqvn6cq4MuYNUt/Af7LgtHdEYche72jVwYRh/axOJIX8y9LWtjhYhfdDHYviXvdUw4DaFxfBsYAjH1xgoDVPWUM1Zi1sFQ4uTnAGODD+4l7c1NOQvLNRTmgJwZAger/hWnqOrM74YIm2tyqrod2WYuPTzmuNybltwZSheHl4Ybr+Kt3RlCL5MMXqQyL5RrOVzDJNXR8IbOPrtfYEZRGeGIAk0xegdZwVJujJkMNMaelHk7XNdgKUzQwY/aYoh/vI7r6Q7QwafGRSjrsz3FByHhuEpI1BYibQqnz9URJqS8VAl9jlSp4ah4kmf4Y7RfK9ydk0dLQwdW1kdt1bd6Nrwcgk/SuQw5Filut0bXsMU42GWUWda2ShG6nNCIslzW1VU86CF1pDdAk7zZYqlefLpOYZZH+wWSR7GC8V1xwXjTHe1DC8fDVl/KstsjI9TM8PMoUt45Zr1ZdisaOuTpfzqw3SwMTKERSvGj+4UwBtaPLwukly9SirCPks15EZ03fEiVJI07KYjoeRf4lRpmn0qy5CbcNoUGNw3BCdhdDXdWA5D3c7kKy1yPUMSQJjWGT6EK4ehrmqAj4ducl3CglDVYFj8ZWbIjW66xGb23s7ytXwG0TDLYWbI/yTUx54QtV8kgvpGCTMh9Gg4mJoZcil1709tyGfPXsRSoHaMZfrvij9MDZOkhudDruHqnSmEYOZiH3Kvfqcbct9bqiEfHlP/vISiNfHqHLgTefpkmjfUzTQkmBnyP3nlDxH4gSZIxPS5oz29RIbfYfsyDYW0n2pvCuXbib7mZzzptWr8GG54Y7jhzJs/+lRncmHMfUkY8ntgl9JkoQiuzDlNIogr70T45t+V2OnCsZA2dPDJRtPyRENDsbBXFuETM2eSnhZSwPpeEb7UtKLG8ApYzE7LWi/OI9uStAx/LDR1iiB8p+lFvqmhWH7efedbBwlBWT8LBYfhZYpmesRvz3gGaGqYTPu9PCZe0f/24hum0qxMS3yT3BHEabdmIlWMIYOtaOgF7cltgrmeSyIP0ksBYXgMN/IjmaFGwWIhjDosP9YG0lvNgn5/I4+QSbtQVowRHAfCjBzej4ltmt9UYm74JhVRogizSUsV/OFxfl5d5HansSxAbFEfZh5NzJjYvKEc2/kS04xIhuUSDBOjhI6+ZpAcpX9cYPikzExieFOjLckzOxi8lNNmkYbZFQN9JDhTrcIDy9tIraL6IClLk7BJnVKfdBkKgbFlwM4ub5G4W0eGZqLy2E7WRH4zbW8psc3MwG6ob1Kwz7LPAQZZjvhNpo3Jsc49Acw0bfNfsjYJoLNISf/2cvjlyq6FbWtL00NBy2gdhCgxKrud8tZ9r518RVG58ofhV799DuONC7rN1z/jOq3oA43xcbjhOzOYLrf5C9vyZkgvU6zBeT4ajbbn05flPRH3DcHvYLbfhtsaTT4Gh2JKMIvIAee64UO5pYrXl1YIMsQPGeKHDPFDhvghQ/yQIX7IED9kiB8yxA8Z4ocM8UOG+CFD/JAhfsgQP2SIHzLEDxnihwzxQ4b4IUP8kCF+yBA/9Te0LvJHQoO5fH7mE4AOK3U5dPfAlonLjtQMWLJcy/9UH+gy2yfS4QAmHrN4rAkioBcalvvoBbdEt6mGhkZL/qECVt7V0LdcL67qQMO/GXq+6bKGKID15QZVdr1LbFS7c8b/u1zZ/SbG7wLvpXLMxeR8XxDlbuh5m8VosHPduEI4dMax5Tn+AXbATPFAjgdmAAAAAElFTkSuQmCC' alt={'image'}/>
                        <b>Js</b>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos est ipsam quas repellendus temporibus vitae.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

