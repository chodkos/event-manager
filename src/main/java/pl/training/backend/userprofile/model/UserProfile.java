package pl.training.backend.userprofile.model;

import lombok.Data;
import org.springframework.stereotype.Component;

import javax.persistence.*;

/**
 * Created by Raynor on 2017-07-27.
 */
@Table(name = "profiles")
@Component
@Entity
@Data
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String description;

    public UserProfile(String firstName, String lastName, String description) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
    }

    public UserProfile() {
    }
}