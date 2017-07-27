package pl.training.backend.userprofile.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.training.backend.userprofile.model.UserProfile;
import pl.training.backend.userprofile.repository.UserProfileRepository;

/**
 * Created by Raynor on 2017-07-27.
 */
@Service
public class UserProfileService {

    @Autowired
    UserProfileRepository userProfileRepository;

    public void addUserProfile(UserProfile userProfile){
        userProfileRepository.saveAndFlush(userProfile);
    }
}
