package pl.training.backend.userprofile.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.training.backend.userprofile.model.UserProfile;

/**
 * Created by Raynor on 2017-07-27.
 */
public interface UserProfileRepository extends JpaRepository<UserProfile, Long> {
}
