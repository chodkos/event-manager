package pl.training.backend.userprofile.dto;

import lombok.Data;

/**
 * Created by Raynor on 2017-07-27.
 */
@Data
public class UserProfileDto  {

    private Long id;
    private String firstName;
    private String lastName;
    private String description;

}
